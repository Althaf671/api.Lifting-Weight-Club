// auth.d.ts

export type TAccessTokenPayload = {
    id: string;
    name: string;
    email: string;
    status: boolean;
    isVerified: boolean;
    isBlacklisted: boolean;
};

export type TRefreshTokenPayload = {
    id: string;
    jti: string;
    accountId: string;
}

export type TStoredRefreshTokenPayload = {
    
}