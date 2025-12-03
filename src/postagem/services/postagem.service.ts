import { TemaService } from './../../tema/services/tema.service';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";

@Injectable() // Indica que é uma Classe de Serviço e pode ser inserida/injetada 
export class PostagemService {
    constructor(
        @InjectRepository(Postagem) // Aplica a inversão de dependência a nossa classe Repository
        private postagemRepository: Repository<Postagem>, // Criamos um Objeto da classe Repository voltado para Postagens
        private temaService: TemaService // Dentro do Construtor injetamos o temaService para podermos usar seus métodos 
    ) { }

    async findAll(): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            relations:{ // // Indica que queremos trazer também o relacionamento
                tema: true
            }
        });
    }

    async findById(id: number): Promise<Postagem> {  // Verifica primeiro se a postagem existe

        const postagem = await this.postagemRepository.findOne({
            where: {id},
            relations:{
                tema: true
            }
        });

        if (!postagem) // Se a postagem não existir, lace uma Exceção que vai direto para o Cliente com o status 404 Not Found
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

        return postagem;
    }

    async findAllByTitulo(titulo: string): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`)
            },
            relations:{
                tema: true
            }
        })
    }

    async create(postagem: Postagem): Promise<Postagem> {
       
        if (postagem.tema){
            
            let tema = await this.temaService.findById(postagem.tema.id)

            if (!tema)
                throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);
            
            return await this.postagemRepository.save(postagem);

        }

        return await this.postagemRepository.save(postagem);
    }

    async update(postagem: Postagem): Promise<Postagem> {
        
        let buscaPostagem: Postagem = await this.findById(postagem.id);   // Chama o método findById anteriro para pesquisar uma postagem pelo id extraido do objeto postagem

        if (!buscaPostagem || !postagem.id) // Se a postagem não existir, lace uma Exceção que vai direto para o Cliente com o status 404 Not Found
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

        if (postagem.tema){
            
            let tema = await this.temaService.findById(postagem.tema.id)
                
            if (!tema)
                throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);
                
            return await this.postagemRepository.save(postagem);
    
        }
        
        return await this.postagemRepository.save(postagem);
    }
    
    async delete(id: number): Promise<DeleteResult> {
        
        let buscaPostagem = await this.findById(id);

        if (!buscaPostagem)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

        return await this.postagemRepository.delete(id);

    }

}