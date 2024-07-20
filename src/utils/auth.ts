import { NextRequest } from 'next/server';
import { parse } from 'cookie';
import { verifyIdToken } from '@/lib/firebaseAdmin';

export const getTokenFromRequest = (req: NextRequest) => {
    const cookie = req.headers.get('cookie');
    const cookies = parse(cookie || '');
    return cookies.auth_token;
};

export const authenticateRequest = async (req: NextRequest) => {
    const token = getTokenFromRequest(req);
    if (!token) {
        throw new Error('Unauthorized');
    }
    await verifyIdToken(token);
};
