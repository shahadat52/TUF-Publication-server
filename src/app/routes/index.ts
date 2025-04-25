import { Router } from "express";
import { ProductRoutes } from "../modules/product/product.route";
import { UserRoutes } from "../modules/user/user.route";
import { OrderRoutes } from "../modules/order/order.route";
import { NoticeRoutes } from "../modules/notice/notice.route";
import { sarokRouters } from "../modules/sarok/sarok.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/products',
        route: ProductRoutes,
    },
    {
        path: '/user',
        route: UserRoutes,
    },
    {
        path: '/order',
        route: OrderRoutes
    },
    {
        path: '/notice',
        route: NoticeRoutes
    },
    {
        path: '/sarok',
        route: sarokRouters
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router