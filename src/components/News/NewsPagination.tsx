import Style from '@styles/componentsStyles/News/Pagination.module.scss';
import { CgChevronLeft } from 'react-icons/cg';
import { CgChevronRight } from 'react-icons/cg';

export default function NewsPagination() {
    return (
        <div className={Style.pageNavi}>
            <ul>
                <li>
                    <CgChevronLeft />
                </li>
                <li>
                    <p>1</p>
                </li>
                <li>
                    <p>2</p>
                </li>
                <li>
                    <p>3</p>
                </li>
                <li>
                    <p>4</p>
                </li>
                <li>
                    <CgChevronRight />
                </li>
            </ul>
        </div>
    );
}
