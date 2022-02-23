import React, { useState } from 'react';
import classes from './Paginator.module.css';

type PropsType = {
  totalItemsCount: number,
  pageSize: number,
  currentPage: number,
  onPageChanged: (pageNumber:number) => void,
  portionSize: number,
}

const Paginator: React.FC<PropsType> = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 25 }) => {

  const pageCount = Math.ceil(totalItemsCount / pageSize);
  let pages: Array<number> = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pageCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={classes.nagination}>
      {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }} >PREV</button>}
      {
        pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map((p) => {
            return <button className={currentPage === p && classes.selectedPage} type="button"
              onClick={(e) => onPageChanged(p)} >{p}</button>
          })
      }
      {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }} >NEXT</button>}

    </div>
  )

};
export default Paginator;