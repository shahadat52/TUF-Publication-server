import nodemailer from 'nodemailer';
import config from '../config';

const sendEmail = async (to: string) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: config.node_env === 'production',
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: 'shahadathossain.sh255@gmail.com',
            pass: 'wckr ahea jlus vvpm',
        },
    });

    await transporter.sendMail({
        from: 'mtupbd@gmail.com', // sender address
        to, // list of receivers
        subject: 'Your order already sent to courier', // Subject line
        text: 'Please contract courier service',
        html: "<p>Please contract courier service</p>",
    });
};

export default sendEmail;
