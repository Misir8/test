import express, { Application} from 'express';
import bodyParser from 'body-parser';
import {createConnection} from "typeorm";
import router from './routes/index.route';
import errorMiddleware from "./middleware/errorHandler";
import cors from 'cors';
import mysqldump from 'mysqldump';

mysqldump({
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'clientDb',
    },
    dumpToFile: './dump.sql',
});

createConnection().then(async connection => {
    console.log('successfully connect with db');
}).catch(err => {
    throw new Error(err.message);
});

const app: Application = express();
app.use(cors());
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(router);
app.use(errorMiddleware);

const port = 3000;


app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
