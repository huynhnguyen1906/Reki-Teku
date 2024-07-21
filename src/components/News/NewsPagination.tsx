import Style from '@styles/componentsStyles/News/Pagination.module.scss';
import { CgChevronLeft } from 'react-icons/cg';
import { CgChevronRight } from 'react-icons/cg';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function NewsPagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className={Style.pageNavi}>
            <ul>
                <li onClick={() => handlePageChange(currentPage - 1)}>
                    <CgChevronLeft />
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index} onClick={() => handlePageChange(index + 1)}>
                        <p className={currentPage === index + 1 ? Style.active : ''}>{index + 1}</p>
                    </li>
                ))}
                <li onClick={() => handlePageChange(currentPage + 1)}>
                    <CgChevronRight />
                </li>
            </ul>
        </div>
    );
}
