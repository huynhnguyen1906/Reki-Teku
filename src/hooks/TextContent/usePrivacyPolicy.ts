import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const usePrivacyPolicy = () => {
    const { data, error } = useSWR('/api/text-content/save-privacy', fetcher, {
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
