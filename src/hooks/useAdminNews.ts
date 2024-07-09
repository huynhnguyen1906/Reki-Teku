import useSWR, { mutate } from 'swr';

const fetcher = (url: string) =>
    fetch(url, {
        cache: 'no-store',
        next: {
            revalidate: 10,
        },
    }).then((res) => res.json());

export const useAdminNews = () => {
    const { data, error } = useSWR('/api/news-admin-view', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        refreshInterval: 0,
    });

    return {
        news: data,
        isLoading: !error && !data,
        isError: error,
        refetch: () => mutate('/api/news-admin-view'),
    };
};
