import express from 'express';
import { userControllers } from './user.controller';

const router = express.Router();

router.post(
    '/registration',
    userControllers.createUsers
);

router.get(
    '/',
    userControllers.getAllUsers
);

router.get(
    '/:id',
    userControllers.getSingleUser
);

router.post(
    '/login',
    userControllers.loginUser
);

export const UserRoutes = router;