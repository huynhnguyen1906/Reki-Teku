'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CreateToursDesForm from './DesForm';
import { Destination } from '@/types/AdminCreateTour';
import { handleUpdateTour } from '@/utils/handleUpdateTour';
import Button from 'react-bootstrap/esm/Button';
import Spinner from 'react-bootstrap/Spinner';
import { FaRegPlusSquare, FaTrashAlt } from 'react-icons/fa';
import Style from '@styles/componentsStyles/Admin/CreateTourForm.module.scss';
import SpinnerStyle from '@styles/componentsStyles/Admin/Editor.module.scss';

interface EditTourFormProps {
    initialData: any;
    documentId: string;
}

export default function EditTourForm({ initialData, documentId }: EditTourFormProps) {
    const [schedule, setSchedule] = useState<{ day: number; destinations: Destination[] }[]>(
        initialData.schedule || [],
    );
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const [tourInfo, setTourInfo] = useState({
        location: initialData.tour_info.location || '',
        name: initialData.tour_info.name || '',
        price: initialData.tour_info.price || '',
        days: initialData.tour_info.days || '',
        description: initialData.tour_info.description || '',
        meetingPoint: initialData.tour_info.meetingPoint || '',
        applyPoint: initialData.tour_info.applyPoint || '',
    });

    const [oldImageUrls, setOldImageUrls] = useState<string[]>([]);

    useEffect(() => {
        const urls = initialData.schedule.flatMap((day: any) => day.destinations.map((dest: any) => dest.image));
        setOldImageUrls(urls);
    }, [initialData]);

    const handleTourInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTourInfo({
            ...tourInfo,
            [name]: value,
        });
    };

    const addDay = () => {
        setSchedule([
            ...schedule,
            { day: schedule.length + 1, destinations: [{ destination: '', description: '', image: '' }] },
        ]);
    };

    const handleDestinationsChange = (dayIndex: number, newDestinations: Destination[]) => {
        const newSchedule = [...schedule];
        newSchedule[dayIndex].destinations = newDestinations;
        setSchedule(newSchedule);
    };

    const handleDeleteDay = (dayIndex: number) => {
        const newSchedule = schedule.filter((_, index) => index !== dayIndex);
        setSchedule(newSchedule);
    };

    const handleSubmit = () => {
        handleUpdateTour(documentId, tourInfo, schedule, oldImageUrls, setLoading, router);
    };

    return (
        <div className={Style.CreateTourForm}>
            <div className={Style.TourInfoForm}>
                <h2>ツアーの基本情報</h2>
                <div className={Style.inputItem}>
                    <label>ツアーの場所：</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="ツアーの場所を入力..."
                        value={tourInfo.location}
                        onChange={handleTourInfoChange}
                    />
                </div>
                <div className={Style.inputItem}>
                    <label>ツアーの名前：</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="ツアーの名前を入力..."
                        value={tourInfo.name}
                        onChange={handleTourInfoChange}
                    />
                </div>
                <div className={Style.inputItem}>
                    <label>ツアーの値段：</label>
                    <input
                        type="text"
                        name="price"
                        placeholder="ツアーの値段を入力..."
                        value={tourInfo.price}
                        onChange={handleTourInfoChange}
                    />
                </div>
                <div className={Style.inputItem}>
                    <label>ツアーの日数：</label>
                    <input
                        type="text"
                        name="days"
                        placeholder="ツアーの日数を入力..."
                        value={tourInfo.days}
                        onChange={handleTourInfoChange}
                    />
                </div>
                <div className={Style.inputItem}>
                    <label>ツアーの説明：</label>
                    <textarea
                        name="description"
                        placeholder="ツアーの説明を入力..."
                        value={tourInfo.description}
                        onChange={handleTourInfoChange}
                    />
                </div>
                <div className={Style.inputItem}>
                    <label>ツアーの集合場所：</label>
                    <input
                        type="text"
                        name="meetingPoint"
                        placeholder="ツアーの集合場所を入力..."
                        value={tourInfo.meetingPoint}
                        onChange={handleTourInfoChange}
                    />
                </div>
                <div className={Style.inputItem}>
                    <label>ツアーのおすすめポイント：</label>
                    <textarea
                        name="applyPoint"
                        placeholder="ツアーのおすすめポイントを入力..."
                        value={tourInfo.applyPoint}
                        onChange={handleTourInfoChange}
                    />
                </div>
            </div>
            <div className={Style.TourInfoForm}>
                <h2>スケジュール作成</h2>
                {schedule.map((day, dayIndex) => (
                    <div key={dayIndex} className={Style.dayContainer}>
                        <CreateToursDesForm
                            day={day.day}
                            destinations={day.destinations}
                            onDestinationsChange={(newDestinations) =>
                                handleDestinationsChange(dayIndex, newDestinations)
                            }
                        />
                        <Button variant="danger" onClick={() => handleDeleteDay(dayIndex)}>
                            <FaTrashAlt /> この日を削除
                        </Button>
                    </div>
                ))}
                <Button variant="info" onClick={addDay} className={Style.addDayBtn}>
                    <FaRegPlusSquare />
                    日数追加
                </Button>
            </div>
            <Button variant="success" onClick={handleSubmit} className={Style.submitBtn}>
                更新
            </Button>
            {loading && (
                <div className={SpinnerStyle.spinnerContainer}>
                    <Spinner animation="border" variant="light" className={SpinnerStyle.spinner} />
                </div>
            )}
        </div>
    );
}
