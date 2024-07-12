import useSWR, { mutate } from 'swr';

const fetcher = (url: string) => {
    const timestamp = Date.now();
    const urlWithTimestamp = `${url}?t=${timestamp}`;
    return fetch(urlWithTimestamp).then((res) => res.json());
};

export const useAdminTour = () => {
    const { data, error } = useSWR('/api/tours-admin-view', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        tour: data,
        isLoading: !error && !data,
        isError: error,
    };
};