import { CPagination, CPaginationItem } from '@coreui/react'
import React from 'react'

const Pagination = ({itemsPerPage,totalItems,changePage, currentPage}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <CPagination aria-label="Page navigation example">
            <CPaginationItem aria-label="Previous" onClick={() => changePage(currentPage-1)} disabled={currentPage === 1}>
              <span aria-hidden="true">&laquo;</span>
            </CPaginationItem>
            {pageNumbers.map(number => (
                <CPaginationItem key={number} onClick={() => changePage(number)} active={number === currentPage} style={{cursor: 'pointer'}}>
                    {number}
                </CPaginationItem>
            ))}
            <CPaginationItem aria-label="Next" onClick={() => changePage(currentPage+1)} disabled={currentPage === Math.ceil(totalItems/itemsPerPage)}> 
                <span aria-hidden="true">&raquo;</span>
            </CPaginationItem>
        </CPagination>
    )
}

export default Pagination