import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
    });
}

const auth = getAuth(admin.app());

export const verifyIdToken = async (token: string) => {
    try {
        const decodedToken = await auth.verifyIdToken(token);
        return decodedToken;
    } catch (error) {
        throw new Error('Invalid token');
    }
};
