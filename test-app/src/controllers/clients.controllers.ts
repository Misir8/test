import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Client, ClientStatus} from "../models/Client";
import {validationResult} from 'express-validator';


export const getClients = async (req: Request, res: Response): Promise<Response> => {
    const {name, email, birthDate, status} = req.query;
    const query = await getRepository(Client).createQueryBuilder('client');
    if (name){
        query.andWhere('client.firstName LIKE :name', { name: `%${name}%` });
    }
    if (email){
        query.andWhere('client.email LIKE :email', { email: `%${email}%` });
    }
    if (birthDate){
        query.andWhere('client.birthDate LIKE :birthDate', { birthDate: `%${birthDate}%` });
    }
    if (status){
        query.andWhere('client.status LIKE :status', { status: `%${status}%` });
    }

    return res.send(await query.getMany());
};

export const getClientById = async ( req: Request, res: Response): Promise<any> => {
    const id = req.params.id;
    const client = await getRepository(Client).findOne(id);
    if(!client) return res.status(404).send(`Client with id ${id} not found`);

    return res.send(client);
}

export const createClient = async ( req: Request, res: Response): Promise<any> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
    }

    req.body.status = ClientStatus.DEMO;
     await getRepository(Client).save(req.body)
        .then((client) => res.status(201).send(client))
        .catch((err) => res.status(500).send(err.message));
}


