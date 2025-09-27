// auth.client.service.ts

import { Logger } from "../../../shared/utils/logger";
import { TLoginDto, TRegisterDto } from "./auth.client.dto";

export class AuthClientService {

    //========== Register Service ==========//
    async RegisterService(payload: TRegisterDto) {
        Logger.info("executing service");
    };


    //========== Login Service ==========//
    async LoginService(payload: TLoginDto) {
        Logger.info("executing service");
    };

};