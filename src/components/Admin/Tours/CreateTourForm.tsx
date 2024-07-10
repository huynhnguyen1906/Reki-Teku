'use client';
import { useState } from 'react';
import CreateToursDesForm from './DesForm';
import { Destination } from '@/types/AdminCreateTour';
import Style from '@styles/componentsStyles/Admin/CreateTourForm.module.scss';

export default function CreateTourForm() {
    const [schedule, setSchedule] = useState<{ day: number; destinations: Destination[] }[]>([
        { day: 1, destinations: [{ destination: '', description: '', image: '' }] },
    ]);

    const [tourInfo, setTourInfo] = useState({
        location: '',
        name: '',
        priceAndDays: '',
        description: '',
        meetingPoint: '',
    });

    const handleTourInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const handleSubmit = () => {
        console.log('Tour Info:', tourInfo);
        console.log('Schedule:', schedule);
    };

    return (
        <div className={Style.CreateTourForm}>
            <h2>ツアーの基本情報</h2>
            <div>
                <label>ツアーの場所：</label>
                <input type="text" name="location" value={tourInfo.location} onChange={handleTourInfoChange} />
            </div>
            <div>
                <label>ツアーの名前：</label>
                <input type="text" name="name" value={tourInfo.name} onChange={handleTourInfoChange} />
            </div>
            <div>
                <label>ツアーの値段と日数：</label>
                <input type="text" name="priceAndDays" value={tourInfo.priceAndDays} onChange={handleTourInfoChange} />
            </div>
            <div>
                <label>ツアーの説明：</label>
                <input type="text" name="description" value={tourInfo.description} onChange={handleTourInfoChange} />
            </div>
            <div>
                <label>ツアーの集合場所：</label>
                <input type="text" name="meetingPoint" value={tourInfo.meetingPoint} onChange={handleTourInfoChange} />
            </div>

            <h2>スケジュール作成</h2>
            {schedule.map((day, dayIndex) => (
                <CreateToursDesForm
                    key={dayIndex}
                    day={day.day}
                    destinations={day.destinations}
                    onDestinationsChange={(newDestinations) => handleDestinationsChange(dayIndex, newDestinations)}
                />
            ))}
            <button onClick={addDay}>日数追加</button>
            <button onClick={handleSubmit}>送信</button>
        </div>
    );
}
