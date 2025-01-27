/* eslint-disable @typescript-eslint/no-explicit-any */

import AppError from "../../errors/appErrors";
import { OrderModel } from "./order.model";
import httpStatus from 'http-status';

const placeOrderInDB = async (orderData: any) => {
    const result = await OrderModel.create(orderData);
    return result
};

const getAllOrdersFromDB = async () => {

    const result = await OrderModel.find();
    return result
};
const getSingleOrderById = async (id: string) => {
    const result = await OrderModel.findById(id);
    return result
};

const updateSingleOrderById = async (id: string) => {
    const statuses = ['pending', 'approved', 'packaging', 'courier'];

    const order = await OrderModel.findById(id);
    if (!order) {
        throw new AppError(httpStatus.FORBIDDEN, 'order not found');
    }
    const currentIndex = statuses.indexOf(order.status);
    const nextStatus = statuses[currentIndex + 1];
    order.status = nextStatus;
    const result = await order.save();
    return result
};

const getMyOrdersFromDB = async (branchName: string) => {
    const result = await OrderModel.find({ branchName: branchName });
    return result
};

export const orderServices = {
    placeOrderInDB,
    getAllOrdersFromDB,
    getSingleOrderById,
    updateSingleOrderById,
    getMyOrdersFromDB
}