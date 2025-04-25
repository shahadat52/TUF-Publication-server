/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import AppError from "../../errors/appErrors";
import sendEmail from "../../utils/sendEmail";
import { OrderModel } from "./order.model";
import httpStatus from 'http-status';

const placeOrderInDB = async (orderData: any) => {
    const lastOrder = await OrderModel.findOne().sort({ createdAt: -1 }).select('invoice')
    if (!lastOrder) {
        orderData.invoice = 1
    } else {
        orderData.invoice = lastOrder.invoice + 1
    }
    const result = await OrderModel.create(orderData);
    return result
};

const getAllOrdersFromDB = async (query: any) => {
    const last = 'T23:59:59.999Z';
    let filter: any = {};

    if (query?.startDate && query?.endDate) {
        const lastDate = query.endDate.concat('', last);
        filter.createdAt = {
            $gte: new Date(query.startDate),
            $lte: new Date(lastDate),
        };
    }

    if (query?.email) {
        filter.email = query.email;
    }

    const result = await OrderModel.find(filter).sort({ createdAt: -1 }).limit(100);
    return result;
};

const getSingleOrderById = async (id: string) => {
    const result = await OrderModel.findById(id);
    return result
};

const updateOrderStatusById = async (id: string) => {

    const statuses = ['pending', 'approved', 'packaging', 'courier'];

    const order = await OrderModel.findById(id);
    if (!order) {
        throw new AppError(httpStatus.FORBIDDEN, 'order not found');
    }
    const currentIndex = statuses.indexOf(order.status);
    const nextStatus = statuses[currentIndex + 1];
    if (nextStatus === 'courier') {
        sendEmail(order?.email)
    }
    order.status = nextStatus;
    const result = await order.save();
    return result
};

const getMyOrdersFromDB = async (email: string) => {
    const result = await OrderModel.find({ email: email });
    return result
};

const lastOrderFromDB = async () => {
    const lastOrder = await OrderModel.findOne().sort({ createdAt: -1 }).select('invoice')
    return lastOrder
}

const getSpecificProductOrderFromDB = async (productId: any) => {
    const result = await OrderModel.aggregate([
        { $unwind: "$products" }
        ,
        { $match: { "products.productId": productId.productId } }
    ])
    return result
};

const getDeliveryPendingProductsFromDB = async () => {
    const result = await OrderModel.aggregate([
        {
            $match: {
                "products.deliveryStatus": "pending"
            }
        },
        {
            $project: {
                branchName: 1,
                email: 1,
                invoice: 1,
                address: 1,
                totalPrice: 1,
                phone: 1,
                status: 1,
                products: {
                    $filter: {
                        input: "$products",
                        as: "product",
                        cond: { $eq: ["$$product.deliveryStatus", "pending"] }
                    }
                }
            }
        }
    ]);
    return result;
}

const updateDeliveryStatusInDB = async (productId: string, newStatus: string) => {
    const result = await OrderModel.findOneAndUpdate(

        { 'products._id': new mongoose.Types.ObjectId(productId) },
        { $set: { 'products.$.deliveryStatus': newStatus } },
        { new: true }

    );
    return result;
};

const getAnnualPrizeOrdersFromDB = async () => {

    const result = await OrderModel.aggregate([
        {
            $unwind: "$products"
        },
        {
            $match: {
                "products.productId": { $regex: "A", $options: "i" }
            }
        },
        {
            $group: {
                _id: "$invoice",
                branchName: { $first: "$branchName" },
                createdAt: { $first: "$createdAt" },
                totalPrice: { $first: "$totalPrice" },
                address: { $first: "$address" },
                phone: { $first: "$phone" },
                status: { $first: "$status" },
                products: { $push: "$products" },
            }
        },
        {
            $sort: {
                createdAt: -1
            }
        }
    ]);
    return result
}





export const orderServices = {
    placeOrderInDB,
    getAllOrdersFromDB,
    getSingleOrderById,
    updateOrderStatusById,
    getMyOrdersFromDB,
    lastOrderFromDB,
    getSpecificProductOrderFromDB,
    getDeliveryPendingProductsFromDB,
    updateDeliveryStatusInDB,
    getAnnualPrizeOrdersFromDB
}