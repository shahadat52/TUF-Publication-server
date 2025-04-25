import express from 'express';
import { upload } from '../../utils/sendImageToCloudinary';
import { sarokControllers } from './sarok.controller';

const router = express.Router();

router.post(
    '/create-sarok',
    upload.single('file'),
    (req, res, next) => {
        const data = JSON.parse(req.body.data)
        req.body = data
        next()
    },
    sarokControllers.createSarok

);

export const sarokRouters = router