import Style from '@styles/componentsStyles/Tours/ToursCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function ToursCard() {
    return (
        <div className={Style.toursWrap}>
            <Link href="#">
                <div className={Style.toursContent}>
                    <p className={Style.thumb}>
                        <Image src="/images/tours/day1_2.png" alt="今津元寇防塁" width={367} height={204} />
                    </p>
                    <h3 className={Style.toursTtl}>室町〜江戸　博多の歴史</h3>
                    <p className={Style.toursText}>
                        ホームに降り立つと、真っ赤な生地に黒い「六文銭」があしらわれた幕が頭上を覆っていた。昨年11月半ばの南海高野線九度山駅
                        （和歌山県九.....
                    </p>
                </div>
            </Link>
        </div>
    );
}
