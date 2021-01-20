import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Client} from "../models/Client";
import {ClientImage} from "../models/ClientImage";


export const getAllFiles = async (req: Request, res: Response): Promise<any> => {
    const {id} = req.params;
    const client = await getRepository(Client).findOne(id,{ relations: ['clientImage']});
    if (!client) {
        return res.status(404).send(`Client with id ${id} not found`)
    }
    return res.send(client)
}


export const uploadClientFiles = async (req: Request, res: Response): Promise<any> => {
    const {files} = req;
    const {id} = req.params;
    const client = await getRepository(Client).findOne(id);
    if (!client) {
         return res.status(404).send(`Client with id ${id} not found`)
    }
    const imageRepo = await getRepository(ClientImage);

    Object.values(files).forEach(({filename, originalname, size, mimetype}) => {
        const image: ClientImage = {originalName: originalname, mime: mimetype, filename, size} as ClientImage;
        // @ts-ignore
        image.client = client;
        imageRepo.save(image).catch(err => res.status(500).send(err.message));
    });
    return res.status(201).send({message: 'files created'});
}
