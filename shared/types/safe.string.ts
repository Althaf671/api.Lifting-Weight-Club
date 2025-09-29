// safe.string.ts
// TO-DO make a safeInt, safeFloat later

// variabel
export const MAX_NAME = 20;
export const MAX_DESCRIPTION = 250;
export const MIN_NAME = 8;
export const MIN_DESCRIPTION = 20;

export type SafeString = string & { readonly __brand: unique symbol };

export function makeSafeString(input: unknown, max: number, min: number): SafeString {
    if (input == null) throw new Error("Value required");
    const s = String(input).trim();
    const cleaned = s.replace(/[\x00-\x1F\x7F]/g, "");
    if (cleaned.length === 0) throw new Error("Empty string not allowed");
    if (cleaned.length > max) throw new Error(`Max length ${max} exceeded`);
    if (cleaned.length < min) throw new Error(`Min length ${min} required`);
    if (!/^[\p{L}\p{N} .,_-]+$/u.test(cleaned)) throw new Error("Invalid characters");
    return cleaned as SafeString;
};



