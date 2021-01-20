import express, {Router} from "express";
import clientRouter from './clients.route';
import clientFilesRouter from './clientsFiles.route';

const router: Router = express.Router();

router.use('/clients', clientRouter);
router.use('/clientFiles', clientFilesRouter);

export default router;
