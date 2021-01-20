import multer from "multer";
import HttpException from "./httpExeption";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "application/pdf") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb (new HttpException(404, 'Only image/png, image/jpg, image/jpeg and application/pdf type'));
        }
    },
    limits: {
        fileSize: 10 * 1024 * 1024
    },
});

export default upload;
