import { Schema, model } from 'mongoose';
import { TNotice } from './notice.interface';



const noticeSchema = new Schema<TNotice>({
    notice: {
        type: String,
        required: [true, 'Notice must be required']
    }
}, { timestamps: true });

export const NoticeModel = model('notice', noticeSchema);

