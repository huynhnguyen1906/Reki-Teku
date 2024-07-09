import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useAdminNews = () => {
    const { data, error } = useSWR('/api/news-admin-view', fetcher, {
        revalidateIfStale: true,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        refreshInterval: 30000,
        dedupingInterval: 0,
    });

    return {
        news: data,
        isLoading: !error && !data,
        isError: error,
    };
};
