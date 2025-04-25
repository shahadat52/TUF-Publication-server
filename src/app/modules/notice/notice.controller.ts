import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { noticeServices } from "./notice.service";
import httpStatus from 'http-status';

const createNotice = catchAsync(async (req, res) => {

    const result = await noticeServices.createNoticeInDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Notice create successfully',
        data: result,
    });
});

const getAllNotices = catchAsync(async (req, res) => {

    const result = await noticeServices.getAllNoticesFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Notices Data Retrieved successfully',
        data: result,
    });
});

const getSingleNotice = catchAsync(async (req, res) => {
    const { id } = req.params

    const result = await noticeServices.getNoticeById(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Notice Data Retrieved successfully',
        data: result,
    });
});

const deleteNotice = catchAsync(async (req, res) => {
    const { id } = req.params

    const result = await noticeServices.deleteNoticeById(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Notice Delete successfully',
        data: result,
    });
});

const lastNotice = catchAsync(async (req, res) => {
    const result = await noticeServices.getLastNotice();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Last Notice Retrieved successfully',
        data: result,
    });
});

export const noticeControllers = {
    createNotice,
    getAllNotices,
    getSingleNotice,
    lastNotice,
    deleteNotice
}
