import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_temas"})
export class Tema {

    @PrimaryGeneratedColumn() 
    @ApiProperty()    
    id: number

    @IsNotEmpty() // quando cadastrar a postagem no insomnia o campo não pode estar vazio
    @Column({length: 255, nullable: false}) // construção da tabela
    @ApiProperty() 
    descricao: string

    @ApiProperty() 
    @OneToMany(() => Postagem, (postagem) => postagem.tema) 
    postagem: Postagem[]
    /* Um tema pode ter várias postagens vinculadas | Uma postagem possui apenas um tema
     A entidade tema possui um array chamado postagem contendo todas as postagens relacionadas
    (postagem) => postagem.tema indica qual campo, dentro da entidade Postagem, aponta de volta para o Tema */

    
}