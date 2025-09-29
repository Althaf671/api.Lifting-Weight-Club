// server.ts

import express from 'express';
import { Logger } from './shared/utils/logger';

const app = express();
const PORT = 3001;

const debug = {
    name: "Althaf",
    age: "19"
};

app.listen(PORT, () => {
    Logger.start("SERVER");
    Logger.info(`Server running on PORT ${PORT}`);
    Logger.warn("This is warn log");
    Logger.info("This is info log");
    Logger.error("This is error log");
    Logger.success("This is success log");
    Logger.critical("This is critical log");
    Logger.debug(debug);
    Logger.middleware("This is middleware log");
    Logger.end("SERVER");
});

