// sanitize.ts

import sanitizeHtml from "sanitize-html";
import { makeSafeString, SafeString } from "../types/safe.string";

export function sanitizeAndSafeString(input: unknown, max: number, min: number): SafeString {
    const cleaned = sanitizeHtml(String(input), {
        allowedTags: [],
        allowedAttributes: {},
        textFilter: (text) => text
    });

    return makeSafeString(cleaned, max, min);
};