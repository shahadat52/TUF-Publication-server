import sendResponse from "../../utils/sendResponse";
import { orderServices } from "./order.service";
import catchAsync from "../../utils/catchAsync";
import httpStatus from 'http-status';

const placeOrder = catchAsync(async (req, res) => {

    const result = await orderServices.placeOrderInDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order placed successfully',
        data: result,
    });
});


const getAllOrders = catchAsync(async (req, res) => {

    const result = await orderServices.getAllOrdersFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Orders data retrieved successfully',
        data: result,
    });
});

const getSingleOrder = catchAsync(async (req, res) => {
    const { productId } = req.params;

    const result = await orderServices.getSingleOrderById(productId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order data retrieved successfully',
        data: result,
    });
});

const updateSingleOrder = catchAsync(async (req, res) => {
    const { orderId } = req.params;

    const result = await orderServices.updateSingleOrderById(orderId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order data updated successfully',
        data: result,
    });
});

const getMyOrders = catchAsync(async (req, res) => {
    const { branchName } = req.params;
    console.log(branchName);

    const result = await orderServices.getMyOrdersFromDB(branchName);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'My Order Retrieved successfully',
        data: result,
    });
});

export const orderControllers = {
    placeOrder,
    getAllOrders,
    getSingleOrder,
    updateSingleOrder,
    getMyOrders
}