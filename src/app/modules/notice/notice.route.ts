import express from 'express';
import { noticeControllers } from './notice.controller';

const router = express.Router();

router.post(
    '/create-notice',
    noticeControllers.createNotice
);

router.get(
    '/',
    noticeControllers.getAllNotices
);
router.get(
    '/last-notice',
    noticeControllers.lastNotice
)

router.get(
    '/:id',
    noticeControllers.getSingleNotice
);

router.delete(
    '/:id',
    noticeControllers.deleteNotice
)



export const NoticeRoutes = router;