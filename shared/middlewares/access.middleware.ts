// access.middleware.ts

import jwt from 'jsonwebtoken';

import { Request, Response, NextFunction } from 'express';
import { Logger } from "../utils/logger";
import { env } from '../../infra/config/env';
import { TAccessTokenPayload } from '../types';
import { SharedAuthRepo } from '../../features/auth/shared-auth/auth.repo';
import { success } from 'zod';

// call shared repository to check user status
const sharedAuthRepo = new SharedAuthRepo;

export const AccessMiddleware = async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
        const operation = "Middleware Access";
        Logger.start(operation);
        Logger.middleware("executing access middleware");
        
        // request jwt access token
        Logger.info("requesting cookie jwt access token");
        const cookie: string = req.cookies.accessToken;
        if (!cookie) {
            Logger.debug(cookie);
            Logger.error("invalid or no access token cookie received");
            Logger.end(operation);
            return res.status(400).json({
                success: false,
                code: "NO_TOKEN",
                message: "Access token required."
            });
        };
        Logger.debug(cookie);
        Logger.success("cookie jwt access token received");

    try {
        // decode jwt access token
        Logger.info("decoding jwt access token");
        const accessToken = jwt.verify(cookie, env.ACCESS_KEY) as TAccessTokenPayload;
        Logger.success("jwt access token decoded");
        Logger.debug(`decoded access token value is ${accessToken}`);

        // destruct user id
        Logger.warn("destruct user id");
        const userId = accessToken.id;
        Logger.debug(`user id is ${userId}`);

        // call user repository to obtain user status
        const userStatus = await sharedAuthRepo.ObtainUserStatus(userId);
        if (!userStatus) {
            Logger.debug(userStatus || "no status for this user");
            Logger.info("query ended");
            Logger.error("failed to obtain user status");
            Logger.end(operation);
            return res.status(500).json({
                success: false,
                message: "Something went wrong"
            });
        };
        Logger.info("query ended");
        Logger.success("success retrieving user status from repository");
        Logger.debug(`user status is ${userStatus}`);

        // check is user still active
        Logger.warn("checking is user active");
        if (!userStatus?.status) {
            Logger.error("user is not active");
            Logger.end(operation);
            return res.status(404).json({
                success: false,
                code: "USER_NOT_FOUND",
                message: "User does not exist."
            });
        };
        Logger.success("user is active");

        // check is user verified
        Logger.info("checking is user verified");
        if (!userStatus.isVerified) {
            Logger.error("user is not verified");
            Logger.end(operation);
            return res.status(403).json({
                success: false,
                code: "FORBIDDEN",
                message: "Forbidden."
            });
        };
        Logger.success("user verified");

        // check is user blacklisted  
        Logger.info("checking is user blacklisted");
        if (userStatus.isBlacklisted) {
            Logger.warn("user blacklisted");
            Logger.error("user not allowed to access");
            Logger.end(operation);
            return res.status(403).json({
                success: false,
                code: "FORBIDDEN",
                message: "You are not allowed to be here."
            });
        };  
        Logger.success("user is not blacklisted"); 
        
        Logger.end(operation);
        next();

    } catch (error: unknown) {
        Logger.error("middleware access token error", error);
        Logger.end(operation);
        return res.status(401).json({
            success: false,
            code: "INVALID_TOKEN",
            message: "Access token invalid or expired."
        });
    };
};