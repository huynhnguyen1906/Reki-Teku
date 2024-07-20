import { useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { setCookie, destroyCookie } from 'nookies';

const useAuthRefresh = () => {
    useEffect(() => {
        const unsubscribe = auth.onIdTokenChanged(async (user) => {
            if (user) {
                try {
                    const token = await user.getIdToken();
                    setCookie(null, 'auth_token', token, {
                        maxAge: 7 * 24 * 60 * 60,
                        path: '/',
                    });
                } catch (error) {
                    console.error('Error getting token:', error);
                    destroyCookie(null, 'auth_token');
                }
            } else {
                destroyCookie(null, 'auth_token');
            }
        });

        return () => unsubscribe();
    }, []);
};

export default useAuthRefresh;
