import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/httpExeption';
import multer from "multer";

function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
    const message = error.message || 'Something went wrong';

    if(error instanceof multer.MulterError){
        response.status(400).send({status: 400, message});
    }else{
    response
        .status(500)
        .send({
            status: 500,
            message,
        })
    }
}

export default errorMiddleware;
