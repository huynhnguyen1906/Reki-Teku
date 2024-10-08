import useSWR, { mutate } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useAdminNews = () => {
    const { data, error } = useSWR('/api/news-admin-view', fetcher, {
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
