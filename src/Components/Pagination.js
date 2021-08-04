import React from 'react';
import '../App.css';
import './Pagination.css';

const Pagination = ({ pages, setCurrentPage }) => {
    return (
        <>
            <div>
                {Array.from(Array(pages), (item, index) => {
                return (
                    <button
                        className="paginationButton"
                        value={index}
                        onClick={(e) => setCurrentPage(Number(e.target.value))}>
                        {index + 1} </button>
                ) 
                })}
            </div>
        </>    
    )
}

export default Pagination;