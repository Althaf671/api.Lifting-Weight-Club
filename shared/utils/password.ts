// password.ts

import argon2 from "argon2";
import { Logger } from "./logger";

export async function passwordHash(password: string): Promise<string> {
    Logger.info("argon is hashing password");
    return await argon2.hash(password, {
        type: argon2.argon2id,
        timeCost: 3,
        memoryCost: 2 ** 16,
        parallelism: 4
    })
};

export async function passwordVerify(
    hashed: string,
    plain: string
): Promise<boolean> {
    Logger.info("argon is verifying password");
    try {
        return await argon2.verify(hashed, plain);
    } catch (error) {
       return false; 
    }
};