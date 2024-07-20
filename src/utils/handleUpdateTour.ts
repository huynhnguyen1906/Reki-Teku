import axios from 'axios';
import { toast } from 'react-toastify';
import { ref, uploadString, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { convertToWebP } from '@/utils/changeTypeImg';
import { TourInfo, Schedule } from '@/types/AdminCreateTour';

export const handleUpdateTour = async (
    id: string,
    tourInfo: TourInfo,
    schedule: Schedule[],
    oldImageUrls: string[],
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

        const newImageUrls: string[] = [];
        const updatedSchedule = await Promise.all(
            schedule.map(async (day) => {
                const updatedDestinations = await Promise.all(
                    day.destinations.map(async (destination) => {
                        const url = destination.image;
                        newImageUrls.push(url);

                        if (url.startsWith('https://firebasestorage.googleapis.com')) {
                            return destination;
                        } else if (url.startsWith('data:image')) {
                            const webpDataUrl = await convertToWebP(url);
                            const storageRef = ref(storage, `images/${Date.now()}.webp`);
                            const snapshot = await uploadString(storageRef, webpDataUrl, 'data_url');
                            const downloadURL = await getDownloadURL(snapshot.ref);
                            return {
                                ...destination,
                                image: downloadURL,
                            };
                        } else {
                            const oldRef = ref(storage, url);
                            await deleteObject(oldRef).catch((error) => {
                                console.error('Error deleting old image:', error);
                            });

                            const webpDataUrl = await convertToWebP(url);
                            const storageRef = ref(storage, `images/${Date.now()}.webp`);
                            const snapshot = await uploadString(storageRef, webpDataUrl, 'data_url');
                            const downloadURL = await getDownloadURL(snapshot.ref);
                            return {
                                ...destination,
                                image: downloadURL,
                            };
                        }
                    }),
                );
                return {
                    ...day,
                    destinations: updatedDestinations,
                };
            }),
        );

        const imagesToDelete = oldImageUrls.filter((url) => !newImageUrls.includes(url));
        await Promise.all(
            imagesToDelete.map(async (url) => {
                if (url.startsWith('https://firebasestorage.googleapis.com')) {
                    const oldRef = ref(storage, url);
                    await deleteObject(oldRef).catch((error) => {
                        console.error('Error deleting old image:', error);
                    });
                }
            }),
        );

        const response = await axios.post('/api/update-tour', {
            id,
            tour_info: tourInfo,
            schedule: updatedSchedule,
        });

        if (response.status === 200) {
            toast.success('ツアーが更新されました');
            router.push('/admin/tours');
        } else {
            toast.error('ツアーの更新に失敗しました');
        }
    } catch (error) {
        console.error('Error updating tour:', error);
        toast.error('ツアーの更新中にエラーが発生しました');
    } finally {
        setLoading(false);
    }
};
