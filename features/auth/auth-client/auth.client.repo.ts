// auth.client.repository.ts

import { db } from "../../../infra/config/db";
import { Logger } from "../../../shared/utils/logger";

export class AuthClientRepo {

    //========== Find user by email =========//
    async FindUserByEmail(email: string) {
        Logger.info("executing find user by email query");
        Logger.debug(`data received from service: ${email}`);

        const userLoginData = await db.user.findUnique({
            where: { email },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
                status: true,
                isVerified: true,
                isBlacklisted: true,
                picture: true,
                account: {
                    select: {
                        id: true,
                        provider: true,
                        providerId: true
                    }
                }
            },
        })
        if (!userLoginData) {
            Logger.info("query ended");
            throw new Error;
        };
        Logger.debug(userLoginData);
        Logger.info("query ended");

        return { userLoginData };
    };

    //========== Find user by email =========//
    
}