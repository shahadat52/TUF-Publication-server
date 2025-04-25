import twilio from 'twilio';
import config from '../config';

const accountSid = config.account_sid;
const authToken = config.auth_token;
const client = twilio(accountSid, authToken);

const sendSms = async () => {
    const message = await client.messages.create({
        body: "আপনার অর্ডারটি কুরিয়ারে পৌছে দেওয়া হয়েছে। আপনার নিকটস্থ কুরিয়ারে যোগাযোগ করুণ",
        from: "+17173220633",
        to: "+18777804236",
    });

    console.log(message.body);
};

export default sendSms