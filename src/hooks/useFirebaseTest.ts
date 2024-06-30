import useSWR from 'swr';
import { TestDocument } from '@/types/TestDocument';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface FirebaseTestData {
    message: string;
    documents: TestDocument[];
}

export const useFirebaseTest = () => {
    const { data, error } = useSWR<FirebaseTestData>('/api/test-firebase', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
};
