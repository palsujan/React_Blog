import React from 'react'

const Pagination = ({postPerPage, totalpost, currentPage, paginate }) => {
    const pageNumbers = [];

    //calculate total pages

    for(let i = 1; i<=Math.ceil(totalpost/postPerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <div>
        <nav>
            <ul className='pagination'>
                {
                    pageNumbers.map((number)=>(
                        <li key={number} className={`page-item ${currentPage === number ? 'actve': ''}`}>
                            <button onClick={()=>paginate(number)} className='page-link'>
                                {number}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </div>
  )
}

export default Pagination;