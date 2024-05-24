import dotenv from "dotenv";

dotenv.config();

export const { APP_Port, DEBUG_MODE, DB_URL, JWT_SECERT } = process.env;
