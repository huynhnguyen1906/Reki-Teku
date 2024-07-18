import { auth } from '@/lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { setCookie, destroyCookie } from 'nookies';

const allowedEmail = process.env.NEXT_PUBLIC_ALLOWED_EMAIL;

export const handleAdminLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        if (user.email !== allowedEmail) {
            throw new Error('Unauthorized email');
        }

        const token = await user.getIdToken();

        setCookie(null, 'auth_token', token, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        });

        return true;
    } catch (error) {
        console.error('Error during login:', error);
        destroyCookie(null, 'auth_token');
        return false;
    }
};
