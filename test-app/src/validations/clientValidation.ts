import {body} from "express-validator";
import {ClientStatus} from "../models/Client";

export const clientValidation = [
    body('email').isEmail().withMessage('Invalid email'),
    body('email').notEmpty().withMessage('Email required'),
    body('firstName').notEmpty().withMessage('Firstname required'),
    body('lastName').notEmpty().withMessage('Lastname required'),
    body('birthDate').notEmpty().withMessage('Birth Date required'),
    body('registrationDate').notEmpty().withMessage('Registration Date required'),
    body('ipAddress').notEmpty().withMessage('Ip Address required')
];
