import React from 'react';

const getPagesArray = (totalPages) => {
  let result = [];
  for (let i = 1; i <= totalPages; i++) {
    result.push(i);
  }
  return result;
};

const Pagination = ({totalPages, page, changePage})=>{
  let pagesArray = getPagesArray(totalPages);
  return(
    <div className= "page__wrapper">
    {pagesArray.map(p =>
   <span 
   onClick={() => changePage(p)}
   key={p} 
   className={page === p ? 'page page__current' : 'page'}>
     {p}
     </span>
 )}
 
    </div>
 
  );
};

export default Pagination;