import express, {Router} from "express";
import {getClients, getClientById, createClient} from "../controllers/clients.controllers";
import {clientValidation} from '../validations/clientValidation';

const router: Router = express.Router();

router.route('/')
    .get(getClients)
    .post(clientValidation,createClient)

router.route('/:id')
    .get(getClientById)

export default router;

