import axios from 'axios';
import { toast } from 'react-toastify';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { convertToWebP } from '@/utils/changeTypeImg';
import { TourInfo, Schedule } from '@/types/AdminCreateTour';
import { mutate } from 'swr';

export const handleSaveTour = async (
    tourInfo: TourInfo,
    schedule: Schedule[],
    setLoading: (loading: boolean) => void,
    router: any,
) => {
    const isTourInfoValid = Object.values(tourInfo).every((value) => value.trim() !== '');
    if (!isTourInfoValid) {
        alert('ツアーの情報を入力してください。');
        return;
    }

    const isScheduleValid = schedule.every((day) =>
        day.destinations.every((destination) => Object.values(destination).every((value) => value.trim() !== '')),
    );
    if (!isScheduleValid) {
        alert('スケジュールの情報を入力してください。');
        return;
    }

    try {
        setLoading(true);

        const updatedSchedule = await Promise.all(
            schedule.map(async (day) => {
                const updatedDestinations = await Promise.all(
                    day.destinations.map(async (destination) => {
                        if (destination.image.startsWith('data:')) {
                            const webpDataUrl = await convertToWebP(destination.image);
                            const storageRef = ref(storage, `images/${Date.now()}.webp`);
                            const snapshot = await uploadString(storageRef, webpDataUrl, 'data_url');
                            const downloadURL = await getDownloadURL(snapshot.ref);
                            return {
                                ...destination,
                                image: downloadURL,
                            };
                        }
                        return destination;
                    }),
                );
                return {
                    ...day,
                    destinations: updatedDestinations,
                };
            }),
        );

        const response = await axios.post('/api/create-tour', {
            tour_info: tourInfo,
            schedule: updatedSchedule,
        });

        if (response.status === 200) {
            toast.success('ツアーが正常に作成されました');
            await mutate('/api/tours-admin-view', undefined, true);
            router.push('/admin/tours');
        } else {
            toast.error('ツアーの作成に失敗しました');
        }
    } catch (error) {
        console.error('Error creating tour:', error);
        toast.error('ツアーの作成中にエラーが発生しました');
    } finally {
        setLoading(false);
    }
};
