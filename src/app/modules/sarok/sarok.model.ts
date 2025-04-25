import { Schema, model } from 'mongoose';
import { TSarok } from './sarok.interface';


const SarokSchema = new Schema<TSarok>(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            unique: true,
        },
        fatherName: {
            type: String,
            required: [true, 'fatherName is required'],
            unique: true,
        },
        motherName: {
            type: String,
            required: [true, 'motherName is required'],
            select: 0,
        },
        studentImg: {
            type: String,
            required: [true, 'Student image is required'],
            select: 0,
        },

    },
    { timestamps: true },
);

export const SarokModel = model('sarok', SarokSchema);
