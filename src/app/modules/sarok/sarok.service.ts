/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import { SarokModel } from "./sarok.model"

const createSarokInDB = async (formData: any, file: any) => {
    const { secure_url } = await sendImageToCloudinary(file.path, formData.name) as { secure_url: string };
    formData.studentImg = secure_url
    const result = await SarokModel.create(formData)

    return result;
};

export const sarokServices = {
    createSarokInDB
}