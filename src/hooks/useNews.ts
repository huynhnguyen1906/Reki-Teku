import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useNews = (id: string) => {
    const { data, error } = useSWR(`/api/get-news/${id}`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: true,
    });

    return {
        news: data,
        isLoading: !error && !data,
        isError: error,
    };
};
