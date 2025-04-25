import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { sarokServices } from "./sarok.service";

//controller fn will call service fn

const createSarok = catchAsync(async (req, res) => {
    // const data = req.body;
    // console.log(req.file);
    // console.log(data);

    const result = await sarokServices.createSarokInDB(req.body, req.file);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Sarok added successfully',
        data: result,
    });
});










export const sarokControllers = {
    createSarok,
}