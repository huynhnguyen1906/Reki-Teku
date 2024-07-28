import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useAboutText = () => {
    const { data, error } = useSWR('/api/text-content/get-about-text', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: true,
    });

    return {
        text: data,
        isLoading: !error && !data,
        isError: error,
    };
};
