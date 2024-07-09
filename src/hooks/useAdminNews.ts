import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAdminNews = () => {
    const [news, setNews] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('/api/news-admin-view');
                setNews(response.data);
                setIsLoading(false);
            } catch (error: any) {
                setIsError(error);
                setIsLoading(false);
            }
        };

        fetchNews();
    }, []);

    return {
        news,
        isLoading,
        isError,
    };
};
