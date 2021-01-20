import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {ClientImage} from "./ClientImage";


export enum ClientStatus {
    LEAD = 'lead',
    DEMO = 'demo',
    CLIENT = 'client'
}

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    email!: string;

    @Column()
    birthDate!: Date;

    @Column()
    registrationDate!: Date;

    @Column()
    ipAddress!: string;

    @Column({
        type: "set",
        enum: ClientStatus,
        default: [ClientStatus.DEMO]
    })
    status!: ClientStatus

    @OneToMany(() => ClientImage, photo => photo.client)
    clientImage!: ClientImage[];
}

