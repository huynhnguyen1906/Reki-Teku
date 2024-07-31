import useSWR, { mutate } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useAdminTour = () => {
    const { data, error } = useSWR('/api/tours-admin-view', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: true,
    });

    return {
        tour: data,
        isLoading: !error && !data,
        isError: error,
    };
};
