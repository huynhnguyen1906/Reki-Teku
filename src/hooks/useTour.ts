import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useTour = (id: string) => {
    const { data, error } = useSWR(`/api/get-tour/${id}`, fetcher);

    return {
        tour: data,
        isLoading: !error && !data,
        isError: error,
    };
};
