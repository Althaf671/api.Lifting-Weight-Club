// Jwt generator
import jwt from 'jsonwebtoken';

import { env } from '../../infra/config/env';
import { TAccessTokenPayload, TRefreshTokenPayload } from '../types';

// Access token
export function generateAccessToken(payload: TAccessTokenPayload) {
    return jwt.sign(payload, env.ACCESS_KEY, {
        expiresIn: "30min",
        issuer: "http://localhost:3001",
        audience: "http://localhost:3000"
    });
};

// Super token
/*export function generateSuperToken(payload: TSuperTokenPayload) {
    return jwt.sign(payload, env.SUPER_KEY, {
        expiresIn: "15min",
        issuer: "http://localhost:3001",
        audience: "http://localhost:3000"
    });
};*/

// Refresh token
export function generateRefreshToken(payload: TRefreshTokenPayload) {
    return jwt.sign(payload, env.REFRESH_KEY, {
        expiresIn: "1440min",
        issuer: "http://localhost:3001",
        audience: "http://localhost:3000"
    });
};