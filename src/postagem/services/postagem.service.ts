import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable() // Indica que a classe é de servico e pode ser inserida em outras classes
export class PostagemService {

    // Iniciando ferramentas para classe de servico
    constructor(
        @InjectRepository(Postagem) // Pode chamar os metodos de uma Classe Repository
        private postagemRepository: Repository<Postagem>
    ) { }

    async findAll(): Promise<Postagem[]> {

        return await this.postagemRepository.find()
        
    }

    async findById(id: number): Promise<Postagem> {
        const postagem = await this.postagemRepository.findOne({
            where: { id }
        })

        if(!postagem){
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND)
        }

        return postagem

    }

    async findAllByTitulo(titulo: string): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`) //  para não diferenciar letras maiusculas e minusculas
            }
        })

        }

    async create(postagem: Postagem): Promise<Postagem> { // Create recebe um objeto da classe Postagem e persiste os dados no DB
        return await this.postagemRepository.save(postagem); // Resultado do save é um objeto da classe Postagem pesistido (salvo) no DB
    }
 
    async update(postagem: Postagem): Promise<Postagem> { // Update atualiza o DB da aplicação
        await this.findById(postagem.id) // findByID verifica se a postagem existe
         return await this.postagemRepository.save(postagem); // Save salva as alterações no DB na tb_postagens
    }

    async delete(id: number): Promise<DeleteResult> { // DeleteResult confirmará se o Objeto identificado pelo Atributo id foi apagado
        await this.findById(id) // verifica se a postagem que será deletada existe
        return await this.postagemRepository.delete(id); // Indica se a exclusão do Objeto foi bem sucedida
    }

}
