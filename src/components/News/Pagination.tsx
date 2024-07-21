'use client';
import Style from '@styles/componentsStyles/News/Pagination.module.scss';
import { CgChevronLeft } from 'react-icons/cg';
import { CgChevronRight } from 'react-icons/cg';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const handleClick = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className={Style.pageNavi}>
            <ul>
                <li onClick={() => handleClick(currentPage - 1)} className={currentPage === 1 ? Style.disabled : ''}>
                    <CgChevronLeft />
                </li>
                {[...Array(totalPages)].map((_, i) => (
                    <li
                        key={i}
                        onClick={() => handleClick(i + 1)}
                        className={currentPage === i + 1 ? Style.active : ''}
                    >
                        <p>{i + 1}</p>
                    </li>
                ))}
                <li
                    onClick={() => handleClick(currentPage + 1)}
                    className={currentPage === totalPages ? Style.disabled : ''}
                >
                    <CgChevronRight />
                </li>
            </ul>
        </div>
    );
}
