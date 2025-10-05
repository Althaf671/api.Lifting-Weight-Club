// route.client.route.ts

import { Router } from "express";
import { AccessMiddleware } from "../../../shared/middlewares/access.middleware";
import { controller } from "./container";

const router = Router();
const api = "/client-auth";

router.post(
    api + '/login',
    controller.LoginController.bind(controller),
);

export default router;