// auth.client.dto.ts

import { z } from "zod";
import { sanitizeAndSafeString } from "../../../shared/utils/sanitize";
import { zSafeString } from "../../../shared/utils/zod.string";
import { MAX_NAME, MIN_NAME } from "../../../shared/types/safe.string";



//========== client & admin login dto =========//
export const LoginDto = z.object({
    name: zSafeString(MAX_NAME, MIN_NAME),
    password: z.string().min(8, { error: "8 charater minimum" })
    .refine(val => /[A-Z]/.test(val), { message: "Must be atleast 1 uppercase"}) 
    .refine(val => /[a-z]/.test(val), { message: "Must be atleast 1 lowercase"}) 
    .refine(val => /[0-9]/.test(val), { message: "Must be atleast 1 number"}) 
    .refine(val => /[^A-Za-z0-9]/.test(val), { message: "Must be atleast a symbol"}) 
}).strict();

export type TLoginDto = z.infer<typeof LoginDto>;


//========== client register dto =========//
export const RegisterDto = z.object({
    name: zSafeString(MAX_NAME, MIN_NAME),
    email: z.email({ error: "Invalid credentials" }),
    password: z.string().min(8, { error: "8 charater minimum" })
    .refine(val => /[A-Z]/.test(val), { message: "Must be atleast 1 uppercase"}) 
    .refine(val => /[a-z]/.test(val), { message: "Must be atleast 1 lowercase"})
    .refine(val => /[0-9]/.test(val), { message: "Must be atleast 1 number"}) 
    .refine(val => /[^A-Za-z0-9]/.test(val), { message: "Must be atleast a symbol"})
}).strict();

export type TRegisterDto = z.infer<typeof RegisterDto>;
