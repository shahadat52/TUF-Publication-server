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
    orderControllers.updateOrderStatus
);

router.get(
    '/myOrders/:email',
    orderControllers.getMyOrders
);

router.get(
    '/lastOrder/invoice',
    orderControllers.lastOrder
);

router.get(
    '/specific/product/order',
    orderControllers.getSpecificProductOrder
);

router.get(
    '/delivery/pending/products',
    orderControllers.getDeliveryPendingProducts
);

router.patch(
    '/toggle-status/:id',
    orderControllers.updateDeliveryStatus
);

router.get(
    '/annual/prize',
    orderControllers.getAnnualPrizeOrders
)


export const OrderRoutes = router;