import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useTermsAndConditions = () => {
    const { data, error } = useSWR('/api/text-content/save-terms', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: true,
    });

    return {
        content: data,
        isLoading: !error && !data,
        isError: error,
    };
};
