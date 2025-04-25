import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database: process.env.DATABASE_URL,
  jwt_secret: process.env.JWT_SECRET,
  account_sid: process.env.TWILIO_ACCOUNT_SID,
  auth_token: process.env.TWILIO_AUTH_TOKEN
};
