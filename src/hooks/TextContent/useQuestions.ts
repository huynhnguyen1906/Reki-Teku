import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useQuestions = () => {
    const { data, error } = useSWR('/api/text-content/questions', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: true,
    });

    return {
        questions: data?.questions,
        isLoading: !error && !data,
        isError: error,
    };
};
