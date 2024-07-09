import Style from '@styles/componentsStyles/Pagination.module.scss';
import { CgChevronLeft } from "react-icons/cg";
import { CgChevronRight } from "react-icons/cg";

export default function Pagination() {
    return(
        <div className={Style.pageNavi}>
            <ul>
                <li><CgChevronLeft /></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><CgChevronRight /></li>
            </ul>
        </div>
    );
}
