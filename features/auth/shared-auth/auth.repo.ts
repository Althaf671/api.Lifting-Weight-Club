// auth.repo.ts

import { db } from "../../../infra/config/db";
import { Logger } from "../../../shared/utils/logger";

export class SharedAuthRepo {

    //========== Obtain User Status =========//
    async ObtainUserStatus(userId: string) {
        Logger.info("obtaining user status");
        Logger.debug(`data received from middleware: ${userId}`);

        return await db.user.findFirst({
            where: { id: userId },
            select: {
                isVerified: true,
                isBlacklisted: true,
                status: true
            }
        });
    };

    //========== Store Refresh Token =========//
    async StoreRefreshToken(payload: string) {

    }
};