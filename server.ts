// server.ts

import express from 'express';
import helmet from "helmet";
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import { Logger } from './shared/utils/logger';
import authRoute from './features/auth/auth-client/auth.client.route';

const app = express();
const PORT = 3001;

const debug = {
    name: "Althaf",
    age: "19"
};

// Middlewares
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api", authRoute);


app.listen(PORT, () => {
    Logger.start("SERVER");
    Logger.info(`Server running on PORT ${PORT}`);
    /*Logger.warn("This is warn log");
    Logger.info("This is info log");
    Logger.error("This is error log");
    Logger.success("This is success log");
    Logger.critical("This is critical log");
    Logger.debug(debug);
    Logger.middleware("This is middleware log");*/
    Logger.end("SERVER");
});

