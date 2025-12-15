import { IsNotEmpty } from "class-validator"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Tema } from "../../tema/entities/tema.entity"
import { Usuario } from "../../usuario/entities/usuario.entity"
import { ApiProperty } from "@nestjs/swagger"

@Entity({name: "tb_postagens"})
export class Postagem {

    @PrimaryGeneratedColumn()   
    @ApiProperty()   
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    @ApiProperty()  
    titulo: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    @ApiProperty()  
    texto: string

    @UpdateDateColumn()
    @ApiProperty()  
    data: Date
    
    @ApiProperty({ type: () => Tema })   
    @ManyToOne(() => Tema, (tema) => tema.postagem, { // Define um relacionamento MUITOS para UM (ManyToOne) 
        onDelete: "CASCADE" // Garante que ao deletar um Tema, todas as Postagens associadas a ele sejam removidas automaticamente
    })
    tema: Tema // → esse campo indica qual Tema a Postagem pertence | Cria o atributo "tema" na entidade atual onde sera criada uma chave estrangeira (FK) no banco de dados

        // Indica o lado MUITO do relacionamento, indicando que esse campo se conecta ao campo Postagem da Model Usuario
    @ApiProperty({ type: () => Usuario })  
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}