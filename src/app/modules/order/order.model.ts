import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';


const productSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Name is Required'],
    },
    category: {
        type: String,
        required: [true, 'Category is Required'],
    },
    productId: {
        type: String,
        required: [true, 'ProductId is Required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is Required'],
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is Required'],
    },
    total: {
        type: Number,
        required: [true, 'Total is Required'],
    }
});

const orderSchema = new Schema<TOrder>({

    branchName: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },
    products: {
        type: [productSchema],
        required: [true, 'Products is Required'],
    },
    totalPrice: {
        type: Number,
        required: [true, 'Total price is Required'],
    },
    phone: {
        type: String,
        required: [true, 'Phone is Required'],
    },

    status: {
        type: String,
        enum: ['pending', 'approved', 'packaging', 'courier'],
        required: [true, 'Status is Required'],
        default: 'pending',
    },
}, { timestamps: true });

export const OrderModel = model('order', orderSchema);

