'use client';
import { useState } from 'react';
import AdminLayout from '@/app/admin/AdminLayout';

export default function CreateTour() {
    const [schedule, setSchedule] = useState([
        { day: 1, destinations: [{ destination: '', description: '', image: '' }] },
    ]);

    const addDay = () => {
        setSchedule([
            ...schedule,
            { day: schedule.length + 1, destinations: [{ destination: '', description: '', image: '' }] },
        ]);
    };

    const addDestination = (dayIndex: number) => {
        const newSchedule = [...schedule];
        newSchedule[dayIndex].destinations.push({ destination: '', description: '', image: '' });
        setSchedule(newSchedule);
    };

    return (
        <AdminLayout>
            <div>
                <h2>ツアーの基本情報</h2>
                <div>
                    <label>ツアーの場所：</label>
                    <input type="text" />
                </div>
                <div>
                    <label>ツアーの名前：</label>
                    <input type="text" />
                </div>
                <div>
                    <label>ツアーの値段と日数：</label>
                    <input type="text" />
                </div>
                <div>
                    <label>ツアーの説明：</label>
                    <input type="text" />
                </div>
                <div>
                    <label>ツアーの集合場所：</label>
                    <input type="text" />
                </div>

                <h2>スケジュール作成</h2>
                {schedule.map((day, dayIndex) => (
                    <div key={dayIndex}>
                        <h3>{day.day}日目</h3>
                        {day.destinations.map((dest, destIndex) => (
                            <div key={destIndex}>
                                <label>目的地：</label>
                                <input type="text" />
                                <label>紹介文書：</label>
                                <input type="text" />
                                <button>写真追加</button>
                            </div>
                        ))}
                        <button onClick={() => addDestination(dayIndex)}>目的地追加</button>
                    </div>
                ))}
                <button onClick={addDay}>日数追加</button>
            </div>
        </AdminLayout>
    );
}
