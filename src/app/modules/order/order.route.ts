import express from 'express';
import { orderControllers } from './order.controller';

const router = express.Router();

router.post(
    '/order-place',
    orderControllers.placeOrder
);

router.get(
    '/',
    orderControllers.getAllOrders
);

router.get(
    '/:orderId',
    orderControllers.getSingleOrder
);
router.put(
    '/:orderId',
    orderControllers.updateSingleOrder
);

router.get(
    '/myOrders/:branchName',
    orderControllers.getMyOrders
);


export const OrderRoutes = router;