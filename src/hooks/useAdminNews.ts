import useSWR, { mutate } from 'swr';

const fetcher = (url: string) => {
    const timestamp = Date.now();
    const urlWithTimestamp = `${url}?t=${timestamp}`;
    return fetch(urlWithTimestamp).then((res) => res.json());
};

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
