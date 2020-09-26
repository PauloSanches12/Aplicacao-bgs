import './styles.css';
import React from 'react';

interface Props {
    totalPages?: number;
    goToPage: Function;
    activePage: number;
}

const Pagination: React.FC<Props> = ({ totalPages = 0, goToPage, activePage }) => {
    const paginationItems = Array.from(Array(totalPages).keys());

    return (
        <div className="pagination-container">
            {paginationItems.map(item => {
                return (
                    <button key={item} className={`pagination-item ${activePage === item ? 'active' : 'inative'}`} 
                    onClick={() => goToPage(item)}>
                        {item + 1}
                    </button>
                )
            })}

        </div>
    )
}

export default Pagination;