import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Client} from "./Client";

@Entity()
export class ClientImage {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    filename!: string;

    @Column()
    originalName!: string;

    @Column()
    mime!: string;

    @Column()
    size!: number;

    @ManyToOne(() => Client, client => client.clientImage)
    client!: Client;

}
