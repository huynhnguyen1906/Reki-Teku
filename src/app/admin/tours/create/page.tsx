'use client';
import { useState } from 'react';
import AdminLayout from '@/app/admin/AdminLayout';
import CreateToursDesForm, { Destination } from '@/components/Admin/Tours/CreateToursDesForm';

export default function CreateTour() {
    const [schedule, setSchedule] = useState([{ day: 1, destinations: [] as Destination[] }]);
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
        setSchedule([...schedule, { day: schedule.length + 1, destinations: [] }]);
    };

    const handleDestinationChange = (dayIndex: number, destinations: Destination[]) => {
        const newSchedule = [...schedule];
        newSchedule[dayIndex].destinations = destinations;
        setSchedule(newSchedule);
    };

    const handleSubmit = () => {
        console.log('Tour Info:', tourInfo);
        console.log('Schedule:', schedule);
    };

    return (
        <AdminLayout>
            <div>
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
                    <input
                        type="text"
                        name="priceAndDays"
                        value={tourInfo.priceAndDays}
                        onChange={handleTourInfoChange}
                    />
                </div>
                <div>
                    <label>ツアーの説明：</label>
                    <input
                        type="text"
                        name="description"
                        value={tourInfo.description}
                        onChange={handleTourInfoChange}
                    />
                </div>
                <div>
                    <label>ツアーの集合場所：</label>
                    <input
                        type="text"
                        name="meetingPoint"
                        value={tourInfo.meetingPoint}
                        onChange={handleTourInfoChange}
                    />
                </div>

                <h2>スケジュール作成</h2>
                {schedule.map((day, dayIndex) => (
                    <CreateToursDesForm
                        key={dayIndex}
                        day={day.day}
                        destinations={day.destinations}
                        onDestinationsChange={(destinations) => handleDestinationChange(dayIndex, destinations)}
                    />
                ))}
                <button onClick={addDay}>日数追加</button>
                <button onClick={handleSubmit}>送信</button>
            </div>
        </AdminLayout>
    );
}
