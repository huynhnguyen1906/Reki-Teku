import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useCompanyProfile = () => {
    const { data, error } = useSWR('/api/text-content/save-company-profile', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: true,
    });

    return {
        profile: data,
        isLoading: !error && !data,
        isError: error,
    };
};
