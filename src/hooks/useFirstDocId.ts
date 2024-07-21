import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useFirstDocId = () => {
    const { data, error } = useSWR('/api/get-first-doc-id', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        firstDocIds: data,
        isLoading: !error && !data,
        isError: error,
    };
};
