import express, {Router} from "express";
import {getClients, getClientById, createClient, getClientWithStatusClient, patchStatus} from "../controllers/clients.controllers";
import {clientValidation} from '../validations/clientValidation';

const router: Router = express.Router();

router.route('/')
    .get(getClients)
    .post(clientValidation,createClient)

router.route('/:id')
    .get(getClientById)
    .patch(patchStatus)

router.route('/status/client')
    .get(getClientWithStatusClient)

export default router;

