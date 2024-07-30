'use client';
import MainLayout from '@/components/MainLayout';
import Style from '@styles/appStyles/ToursView.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useIndexTour } from '@/hooks/useIndexTour';
import { splitText } from '@/utils/splitText';

export default function Tours() {
    const { tour } = useIndexTour();

    return (
        <MainLayout>
            <div className={Style.container}>
                <h2>ツアー一覧</h2>
                <div className={Style.itemBox}>
                    {tour &&
                        tour.map((item: any) => (
                            <div key={item.id} className={Style.tourItem}>
                                <Link href={`/tours/${item.id}`} scroll={true}>
                                    <div className={Style.toursContent}>
                                        <p className={Style.thumb}>
                                            <Image
                                                src={item.first_destination_image}
                                                alt={item.tour_info.name}
                                                width={367}
                                                height={204}
                                                priority
                                            />
                                        </p>
                                        <h3 className={Style.toursTtl}>{item.tour_info.name}</h3>
                                        <p className={Style.toursText}>{splitText(item.tour_info.description, 100)}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </MainLayout>
    );
}
