import Style from '@styles/componentsStyles/Tours/Schedule.module.scss';
import ScheduleItem from '@/components/Tours/ScheduleItem';

export default function Schedule() {
    return (
        <div className={Style.borderline}>
            <div className={Style.circle}>
                <div className={Style.borderBox}>
                    <div></div>
                </div>
                <div className={Style.schedWrap}>
                    <ScheduleItem />
                    <ScheduleItem />
                    <ScheduleItem />
                    <ScheduleItem />
                    <ScheduleItem />
                    <ScheduleItem />
                    <ScheduleItem />
                    <ScheduleItem />
                </div>
            </div>
            <div className={Style.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.9521069290504!2d135.49878525336803!3d34.70638790330126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e69449e0775d%3A0x3a2a073efc2ceb7c!2zRUND44Kz44Oz44OU44Ol44O844K_5bCC6ZaA5a2m5qChMuWPt-mkqA!5e0!3m2!1svi!2sjp!4v1721538695511!5m2!1svi!2sjp"
                    width="800"
                    height="600"
                    style={{ border: '0' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
