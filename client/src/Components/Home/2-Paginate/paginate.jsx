import React from 'react';
import { useState } from 'react';
import Card from '../../Card/DogCard'
import './Paginate.css'
// Tiene el paginado de las Cards

export function Paginate({ dog, title, dataLimit, pageLimit }) {
    const [pages] = useState(Math.round(dog.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit
        return dog.slice(startIndex, endIndex)
    };        

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
      };
    
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
      }

    function goToNextPage() {
        setCurrentPage((pages) => pages + 1)
    }

    function goToPreviousPage() {
        setCurrentPage((pages) => pages - 1)
    }

    return (
        <div>
       <div className="containerPagination">
        <h1>{title}</h1>
        <div className={`button ${dog.length === 0 ? 'noExistence' : ''}`}>
            <button className={`${currentPage === 1 ? 'disabled' : ''}`}  onClick={goToPreviousPage}> Previous </button>    
            <button className={`${currentPage === 7 ? 'disabled' : ''}`} onClick={goToNextPage}> Next </button>
        </div> 
        <div className="pagination">
          {getPaginatedData().map((can, id) => ( 
              <Card 
              key={id} 
              dog={can} 
              dataLimit={15}
              />
          ))}
        </div>
        <div className={`${dog.length === 0 ? 'noExistence' : 'buttonsPages'}`}>
        {getPaginationGroup().map((item, index) => (
            <button key={index} onClick={changePage} className={`paginationItem ${currentPage === item ? 'active' : null}`}
            > <span>{item}</span> </button>
      ))}
      </div>
    </div>
  </div>
  )
      
  
}

  export default Paginate;