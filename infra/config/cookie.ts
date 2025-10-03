// Cookies configuration
import { Response, CookieOptions } from "express";
import { env } from "./env";



//========== Access Token for client ==========//
export function setTokenCookie(res: Response, token: string) {
    const cookieOptions: CookieOptions = {
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 30,
        path: "/",
        domain: env.NODE_ENV === "production" ? "kashleyessential.com" : undefined
    }; 
    res.cookie("accessToken", token, cookieOptions);
};

// clear access token 
export function clearTokenCookies(res: Response) {
    const clearOptions: CookieOptions = {
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        domain: env.NODE_ENV === "production" ? "kashleyessential.com" : undefined
    };
    res.clearCookie("accessToken", clearOptions);
};




//=========== Super Token for employee =========//
export function setSuperTokenCookies(res: Response, token: string) {
    const cookieOptions: CookieOptions = {
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 15,
        path: "/",
        domain: env.NODE_ENV === "production" ? "kashleyessential.com" : undefined        
    };
    res.cookie("superToken", token, cookieOptions);
};

// clear super token
export function clearSuperTokenCookies(res: Response) {
    const clearOptions: CookieOptions = {
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        domain: env.NODE_ENV === "production" ? "kashleyessential.com" : undefined
    };
    res.clearCookie("superToken", clearOptions);
};




//========== Refresh Token ==========//
export function setRefreshTokenCookie(res: Response, token: string) {
    const cookieOptions: CookieOptions = {
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24, 
        path: "/",
        domain: env.NODE_ENV === "production" ? "kashleyessential.com" : undefined
    };
    res.cookie("refreshToken", cookieOptions);
};

// clear refresh token saat logout
export function clearRefreshTokenCookies(res: Response) {
    const clearOptions: CookieOptions = {
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        domain: env.NODE_ENV === "production" ? "kashleyessential.com" : undefined
    };
    res.clearCookie("refreshToken", clearOptions);
};




//========== XSRF Token ==========//




//========== Pending email Token ==========//




//========== Event Tracking Token ==========//
export function setEventTrackingCookies(res: Response, token: string) {
    const cookieOptions: CookieOptions = {
        httpOnly: false,
        secure: env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24, 
        path: "/",
        domain: env.NODE_ENV === "production" ? "kashleyessential.com" : undefined        
    };
    res.cookie("click", token, cookieOptions);
};




//========== Pageviews Token ==========//
export function setPageviewsCookies(res: Response, token: string) {
    const cookieOptions: CookieOptions = {
        httpOnly: false,
        secure: env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 4, 
        path: "/",
        domain: env.NODE_ENV === "production" ? "kashleyessential.com" : undefined        
    };
    res.cookie("views", token, cookieOptions);
};



//========== Visitor tracking Token ==========//
export function setVisitorTrackingCookies(res: Response, token: string) {
    const cookieOptions: CookieOptions = {
        httpOnly: false,
        secure: env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24, 
        path: "/",
        domain: env.NODE_ENV === "production" ? "kashleyessential.com" : undefined        
    };
    res.cookie("visitor", token, cookieOptions);
};










