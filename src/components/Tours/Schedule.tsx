import Style from '@styles/componentsStyles/Tours/Schedule.module.scss';
import ScheduleItem from '@/components/Tours/ScheduleItem';

export default function Schedule({ schedule, tourMap }: { schedule: any; tourMap: any }) {
    console.log(schedule);

    return schedule ? (
        <div className={Style.borderline}>
            <div className={Style.circle}>
                <div className={Style.borderBox}>
                    <div></div>
                </div>
                <div className={Style.schedWrap}>
                    {schedule.map((day: any) =>
                        day.destinations.map((destination: any, index: number) => (
                            <ScheduleItem
                                key={index}
                                day={day.day}
                                destination={destination.destination}
                                description={destination.description}
                                image={destination.image}
                            />
                        )),
                    )}
                </div>
            </div>
            <div className={Style.map} dangerouslySetInnerHTML={{ __html: tourMap }}></div>
        </div>
    ) : (
        ''
    );
}
