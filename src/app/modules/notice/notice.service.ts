/* eslint-disable @typescript-eslint/no-explicit-any */
import { TNotice } from "./notice.interface";
import { NoticeModel } from "./notice.model";

const createNoticeInDB = async (noticeData: TNotice) => {
    const result = await NoticeModel.create(noticeData)
    return result
}

const getAllNoticesFromDB = async () => {
    const result = await NoticeModel.find()
    return result
}

const getNoticeById = async (id: any) => {
    const result = await NoticeModel.findById(id)
    return result
}

const getLastNotice = async () => {
    const result = await NoticeModel.findOne().sort({ createdAt: -1 })
    return result
}

const deleteNoticeById = async (id: string) => {
    const result = await NoticeModel.findByIdAndDelete(id);
    return result
};

export const noticeServices = {
    createNoticeInDB,
    getAllNoticesFromDB,
    getNoticeById,
    getLastNotice,
    deleteNoticeById
}