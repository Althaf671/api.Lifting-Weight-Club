// auth.client.service.ts

import { TAccessTokenPayload, TRefreshTokenPayload } from "../../../shared/types";
import { TUserServiceResponse } from "../../../shared/types/user";
import { generateAccessToken, generateRefreshToken } from "../../../shared/utils/jwt.utils";
import { Logger } from "../../../shared/utils/logger";
import { passwordVerify } from "../../../shared/utils/password";
import { TLoginDto, TRegisterDto } from "../shared-auth/auth.dto";
import { AuthClientRepo } from "./auth.client.repo";
import { v4 as uuid } from 'uuid';

export class AuthClientService {
    constructor (private readonly repository: AuthClientRepo) {};

    //========== Register Service ==========//
    async RegisterService(payload: TRegisterDto) {
        Logger.info("executing service");

        // 
    };


    //========== Login Service ==========//
    async LoginService(loginData: TLoginDto): Promise<TUserServiceResponse> {
        Logger.warn("executing service");
        Logger.debug(`service retrieving: ${loginData}`);

        // destruct login data
        const { email, password } = loginData;

        // run repository to get user data
        const { userLoginData } = await this.repository.FindUserByEmail(email);
        if (!userLoginData) {
            Logger.debug(userLoginData);
            Logger.error("user login data does not contain required fields");
            throw new Error;
        };
        Logger.debug(userLoginData);
        Logger.success("repository meet every required data");

        // compare password
        Logger.info("comparing password");
        const isMatched = passwordVerify(password, userLoginData.password);
        if (!isMatched) {
            Logger.debug(isMatched);
            Logger.error("password does not matched");
            throw new Error("Password does not matched");
        };
        Logger.debug(isMatched);
        Logger.success("password does match");

        // check is user verified
        Logger.info("checking is user verified");
        if (!userLoginData.isVerified) {
            Logger.debug(userLoginData.isVerified);
            Logger.error("user is not verified");
            throw new Error("User is not verified");
        };
        Logger.debug(userLoginData.isVerified);
        Logger.success("user is verified");

        // check is user blacklisted
        Logger.info("checking is user blacklisted");
        if (userLoginData.isBlacklisted) {
            Logger.debug(userLoginData.isBlacklisted);
            Logger.error("user blacklisted");
            throw new Error("You are not eligible to enter this site");
        };
        Logger.debug(userLoginData.isBlacklisted);
        Logger.success("user is not blacklisted");

        // create access token
        Logger.info("generating access token");
        const accessTokenPayload: TAccessTokenPayload = {
            id: userLoginData.id,
            name: userLoginData.name,
            email: userLoginData.email,
            status: userLoginData.status,
            isVerified: userLoginData.isVerified,
            isBlacklisted: userLoginData.isBlacklisted
        }; 
        const accessToken = generateAccessToken(accessTokenPayload);
        if (!accessToken) {
            Logger.debug(accessToken);
            Logger.error("failed to generate access token");
            throw new Error("Something went wrong with our oven...");
        };
        Logger.debug(`access token is: ${accessToken}`);
        Logger.success("access token generated");

        // create refresh token
        Logger.info("generating refresh token");
        const refreshTokenPayload: TRefreshTokenPayload = {
            id: userLoginData.id,
            jti: uuid(),
            accountId: userLoginData.account?.id ?? ""
        };
        const refreshToken = generateRefreshToken(refreshTokenPayload);
        if (!refreshToken) {
            Logger.debug(refreshToken);
            Logger.error("failed to generate access token");
            throw new Error("Something went wrong with our oven...");
        };

        // store refresh token

        Logger.warn("login service executed");
        return { userLoginData, accessToken, refreshToken };
    };

};
