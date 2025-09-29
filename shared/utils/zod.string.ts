// zod.string.ts

import z from "zod";
import { sanitizeAndSafeString } from "./sanitize";

export const zSafeString = (max: number, min: number) => 
    z.string().transform((val) => sanitizeAndSafeString(val, max, min));