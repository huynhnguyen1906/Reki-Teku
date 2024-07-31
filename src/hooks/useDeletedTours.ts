import useSWR, { mutate } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useDeletedTours = () => {
    const { data, error } = useSWR('/api/deleted-tours-view', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: true,
    });

    return {
        deletedTour: data,
        isLoading: !error && !data,
        isError: error,
    };
};
