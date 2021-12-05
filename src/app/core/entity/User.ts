import { IEntity } from "src/app/core/persistence/IEntity";
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 } from 'uuid';

@Entity("User")
export class User implements IEntity {
    constructor(){}
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({type: 'varchar', nullable: false})
    name: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt?: Date;

    @BeforeInsert() addId(){
        this.id = v4()
    }
}