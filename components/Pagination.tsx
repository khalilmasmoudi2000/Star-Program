import React from 'react';
import styles from '@/app/index';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div>
            {currentPage > 1 && <button className={styles.paginationButton} onClick={() => onPageChange(currentPage - 1)}>Previous</button>}
            {currentPage < totalPages && <button onClick={() => onPageChange(currentPage + 1)}>Next</button>}
        </div>
    );
};

export default Pagination;
