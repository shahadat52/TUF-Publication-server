import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';


const productSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Name is Required'],
        trim: true
    },
    category: {
        type: String,
        required: [true, 'Category is Required'],
        trim: true
    },

    deliveryStatus: {
        type: String,
        default: 'pending',
        enum: ['pending', 'approved'],
    },
    productId: {
        type: String,
        required: [true, 'ProductId is Required'],
        trim: true
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
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true
    },
    invoice: {
        type: Number,
        required: [true, 'Invoice number is required'],
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
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

