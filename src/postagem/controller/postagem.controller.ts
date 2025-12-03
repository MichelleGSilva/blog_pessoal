import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.entity";
import { ReturnDocument } from "typeorm";
import { DeleteResult } from "typeorm/browser";

@Controller("/postagens") // Indica que a classe e uma controller
export class PostagemController {

    constructor(private readonly postagemService: PostagemService) { }

    @Get() // Indica qual tipo de requesição esse métido é executado
    @HttpCode(HttpStatus.OK) // Monta a resposta HTTP para o Front com o status 200
    findAll(): Promise<Postagem[]> {
        return this.postagemService.findAll();

    }

    @Get("/:id_post") // id = "1" => id = 1
    @HttpCode(HttpStatus.OK)
    findById(@Param('id_post', ParseIntPipe) id_post: number): Promise<Postagem> {
        return this.postagemService.findById(id_post);

    }
    
    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK) // resposta padrão será o código de status HTTP OK → 200
    findAllByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
        return this.postagemService.findAllByTitulo(titulo);

    }

    @Post()
    @HttpCode(HttpStatus.CREATED) // resposta padrão será o código de status HTTP create 201
    create(@Body() postagem: Postagem): Promise<Postagem> {
      return this.postagemService.create(postagem);
    }

    @Put() // Mapeia todas as requisições do HTTP PUT
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.update(postagem); // executa e retorna atualizando o DB
     }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT) // resposta padrão o HTTP Status NO_CONTENT 🡪 204
    delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
        return this.postagemService.delete(id); // retorna confirmação da exclusão do Objeto da Classe Postagem
    }
    
}
