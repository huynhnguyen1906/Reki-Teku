import Style from '@styles/componentsStyles/News/NewsCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import { IoMdTime } from 'react-icons/io';

export default function NewsCard() {
    return (
        <div className={Style.newsWrap}>
            <Link href="/news">
                <div className={Style.newsContent}>
                    <p className={Style.thumb}>
                        <Image src="/images/blog_osaka/picture_02.webp" alt="今津元寇防塁" width={367} height={204} />
                    </p>
                    <div className={Style.item}>
                        <div className={Style.data}>
                            <IoMdTime size={15} />
                            <p>2024/01/01</p>
                        </div>
                        <p className={Style.tourTag}>ツアー追加</p>
                    </div>
                    <h3 className={Style.newsTtl}>古代〜平安　博多の歴史</h3>
                    <p className={Style.newsText}>
                        福岡は、古来より海外との接点を持ち続けてきた日本で唯一の地です。このツアーでは、福岡に点在する各時代を代表する史跡を巡りながら、...
                    </p>
                </div>
            </Link>
        </div>
    );
}
