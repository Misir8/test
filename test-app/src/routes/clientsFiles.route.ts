import {uploadClientFiles, getAllFiles} from "../controllers/clientsFiles.controller";
import express, {Router} from "express";
import upload from "../utils/multerHelpers";

const router: Router = express.Router();


router.route('/:id')
    .post(upload.array('photos'), uploadClientFiles)
    .get(getAllFiles)

export default router;
