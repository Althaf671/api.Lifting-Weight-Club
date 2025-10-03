// user.d.ts

export type TUserServiceResponse = {
    userLoginData: TUserLoginData;
    accessToken: string;
    refreshToken: string;
};

export type TUserLoginData = {
    id: string;
    name: string;
    email: string;
    status: string;
    isVerified: boolean;
    isBlacklisted: boolean;
    picture: string | null;
    account: {
        provider: string;
        providerId: string;
    } | null
};