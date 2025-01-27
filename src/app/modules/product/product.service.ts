/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from "./product.interface";
import ProductModel from "./product.model";

const createProductsInDB = async (productData: any) => {
    const result = await ProductModel.create(productData);
    return result
};

const getAllProductsFromDb = async (query: Record<string, unknown>) => {

    let searchTerm = '';
    if (query?.searchTerm) {
        searchTerm = query.searchTerm as string;
    }


    if (query.searchTerm) {
        const searchQuery = await ProductModel.find({
            $or: ['name', 'category'].map(
                (field) => ({
                    [field]: { $regex: searchTerm, $options: 'i' },
                }),
            ),
        });
        return searchQuery
    }

    if (query?.category) {
        const filterQuery = await ProductModel.find({ category: query?.category })
        return filterQuery
    }


    const result = await ProductModel.find()
    return result
};

const getSingleProductById = async (id: string) => {
    const result = await ProductModel.findById(id);
    return result
};
const deleteSingleProductById = async (id: string) => {
    const result = await ProductModel.findByIdAndDelete(id);
    return result
};

const updateProductDataById = async (id: string, updateData: TProduct) => {
    const result = await ProductModel.findByIdAndUpdate(
        id,
        updateData,
        { new: true }
    );
    return result
};

export const productServices = {
    createProductsInDB,
    getAllProductsFromDb,
    getSingleProductById,
    deleteSingleProductById,
    updateProductDataById
}