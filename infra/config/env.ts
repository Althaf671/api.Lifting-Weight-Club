/**
    Dengan file ini maka setiap env akan
    divalidasi oleh zod untuk menghindari 
    kemungkinan typo env dan error runtime
*/

import z from 'zod';
import * as dotenv from 'dotenv'; 

dotenv.config();

// Schema env
const envSchema = z.object({
    //NEXTAUTH_URL: z.string(),
    NODE_ENV: z.enum(["development", "production"]),
    //PORT: z.string().transform(Number),
    ACCESS_KEY: z.string().min(64),
    REFRESH_KEY: z.string().min(64),
    SUPER_KEY: z.string().min(64),
    DATABASE_URL: z.string(),
});

// validate env
const _env = envSchema.safeParse(process.env)

if (!_env.success) {
    console.log("This is an invalid env format:", _env.error.format())
    throw new Error("Server detect wrong environment variable")
};

// export validated env
export const env = _env.data;