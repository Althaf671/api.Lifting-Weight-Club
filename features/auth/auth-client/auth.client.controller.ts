// auth.client.controller.ts

import { Request, Response } from 'express';
import { Logger } from '../../../shared/utils/logger';
import { LoginDto, RegisterDto, TLoginDto } from '../shared-auth/auth.dto';
import { TStandarErrorApiResponse, TStandarSuccessApiResponse } from '../../../shared/types';
import { AuthClientService } from './auth.client.service';


export class AuthClientController {
    constructor (private readonly service: AuthClientService) {};

    //========== Register Controller ==========//
    async RegisterController(req: Request, res: Response) {
        const operation = "Register";
        Logger.start(operation);

        Logger.warn("validating register payload");
        const payload = RegisterDto.safeParse(req.body);
        if (!payload.success) {
            Logger.error("invalid payload");
            Logger.debug(payload.error);
            Logger.end(operation);
            res.status(400).json({ message: "Invalid payload" });
            return;
        };
        Logger.debug(payload);
        Logger.success("payload valid");

        try {

            /*const successResponse: TStandarSuccessApiResponse = {
                
            };*/
            
            Logger.success("success to run controller");
            Logger.end(operation);
            res.status(201).json();
            return;
        } catch (error) {

            /*const errorResponse: TStandarErrorApiResponse = {

            };*/

            Logger.error("failed to run register controller");
            Logger.end(operation);
            res.status(500).json();
            return;
        };
    };

    //========== Login Controller ==========//
    async LoginController(req: Request, res: Response): Promise<void> {
        const operation = "Login";
        Logger.start(operation);

        // validate incoming payload
        Logger.warn("validating login payload");
        const payload = LoginDto.safeParse(req.body);
        if (!payload.success) {
            Logger.error("invalid payload");
            Logger.debug(payload.error);
            Logger.end(operation);
            res.status(400).json({ message: "Invalid payload" });
            return;
        };
        Logger.debug(payload);
        Logger.success("payload valid");

        // destruct payload
        const loginData = payload.data;

        try {

            const result = await this.service.LoginService(loginData);

            /*const successResponse: TStandarSuccessApiResponse = {
                
            };*/
            
            Logger.success("success to run login controller");
            Logger.end(operation);
            res.status(200).json();
            return;
        } catch (error) {

            /*const errorResponse: TStandarErrorApiResponse = {

            };*/

            Logger.error("failed to run login controller");
            Logger.end(operation);
            res.status(500).json();
            return;
        };
    };

};