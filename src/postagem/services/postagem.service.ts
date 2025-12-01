import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
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

}
