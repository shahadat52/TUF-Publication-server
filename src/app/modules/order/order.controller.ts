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
    const query = req.query;

    const result = await orderServices.getAllOrdersFromDB(query);
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

const updateOrderStatus = catchAsync(async (req, res) => {
    const { orderId } = req.params;

    const result = await orderServices.updateOrderStatusById(orderId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order data updated successfully',
        data: result,
    });
});

const getMyOrders = catchAsync(async (req, res) => {
    const { email } = req.params;

    const result = await orderServices.getMyOrdersFromDB(email);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'My Order Retrieved successfully',
        data: result,
    });
});

const lastOrder = catchAsync(async (req, res) => {

    const result = await orderServices.lastOrderFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'last order Retrieved successfully',
        data: result,
    });
});

const getSpecificProductOrder = catchAsync(async (req, res) => {
    const productId = req.query;
    const result = await orderServices.getSpecificProductOrderFromDB(productId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'specific order data Retrieved successfully',
        data: result,
    });
});

const getDeliveryPendingProducts = catchAsync(async (req, res) => {

    const result = await orderServices.getDeliveryPendingProductsFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Delivery pending products retrieved successfully',
        data: result,
    })


});

const updateDeliveryStatus = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { newStatus } = req.body;
    const result = await orderServices.updateDeliveryStatusInDB(id, newStatus);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Delivery status updated successfully',
        data: result,
    });

})

const getAnnualPrizeOrders = catchAsync(async (req, res) => {
    const result = await orderServices.getAnnualPrizeOrdersFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Annual prize data retrieved successfully',
        data: result,
    })
})



export const orderControllers = {
    placeOrder,
    getAllOrders,
    getSingleOrder,
    updateOrderStatus,
    getMyOrders,
    lastOrder,
    getSpecificProductOrder,
    getDeliveryPendingProducts,
    updateDeliveryStatus,
    getAnnualPrizeOrders
}