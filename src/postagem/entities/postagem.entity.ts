import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity ({ name: "tb_postagens"}) // Indicando que a classe é uma entidade/model
export class Postagem {

    @PrimaryGeneratedColumn() // Chave Primaria e Auto incremental
    id: number;

    @IsNotEmpty() // Validador de objeto
    @Column({ length: 100, nullable: false}) // Regra do MySQL - NOT NULL
    titulo: string;

    @IsNotEmpty() // Validador de objeto
    @Column({ length: 1000, nullable: false}) // Regra do MySQL - NOT NULL
    texto: string;

    @UpdateDateColumn()
    data: Date;
}