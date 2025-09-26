// auth.client.controller.ts

import { Request, Response } from 'express';
import { Logger } from '../../../shared/utils/logger';
import { LoginDto, RegisterDto } from './auth.client.dto';
import { TStandarErrorApiResponse, TStandarSuccessApiResponse } from '../../../shared/types';

export class AuthClientController {

    //========== Register Controller ==========//
    async RegisterController(req: Request, res: Response): Promise<void> {
        Logger.start("Register Controller");
        Logger.timeStart();

        Logger.warn("validating register payload");
        const payload = RegisterDto.safeParse(req.body);
        if (!payload.success) {
            Logger.error("invalid payload");
            Logger.timeEnd();
            res.status(400).json({ message: "Invalid payload" });
            return;
        }
        Logger.debug(payload);
        Logger.success("payload valid");

        try {

            const successResponse: TStandarSuccessApiResponse = {
                
            };
            
            Logger.success("success to run controller");
            Logger.timeEnd();
            Logger.end();
            res.status(201).json(successResponse);
            return;
        } catch (error) {

            const errorResponse: TStandarErrorApiResponse = {

            };

            Logger.error("failed to run register controller");
            Logger.timeEnd();
            Logger.end();
            res.status(500).json(errorResponse);
            return;
        };
    };

    //========== Login Controller ==========//
    async LoginController(req: Request, res: Response): Promise<void> {
        Logger.start("Login Controller");
        Logger.timeStart();

        Logger.warn("validating login payload");
        const payload = LoginDto.safeParse(req.body);
        if (!payload.success) {
            Logger.error("invalid payload");
            Logger.timeEnd();
            res.status(400).json({ message: "Invalid payload" });
            return;
        };
        Logger.debug(payload);
        Logger.success("payload valid");

        try {

            const successResponse: TStandarSuccessApiResponse = {

            };
            
            Logger.success("success to run login controller");
            Logger.timeEnd();
            Logger.end();
            res.status(200).json(successResponse);
            return;
        } catch (error) {

            const errorResponse: TStandarErrorApiResponse = {

            };
            
            Logger.error("failed to run login controller");
            Logger.timeEnd();
            Logger.end();
            res.status(500).json();
            return;
        };
    };

};