import useSWR, { mutate } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useIndexNews = () => {
    const { data, error } = useSWR('/api/get-news-index', fetcher, {
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
