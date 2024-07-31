import useSWR, { mutate } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useDeletedNews = () => {
    const { data, error } = useSWR('/api/deleted-news-view', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: true,
    });

    return {
        deletedNews: data,
        isLoading: !error && !data,
        isError: error,
    };
};
