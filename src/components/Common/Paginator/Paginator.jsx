import React from 'react';
import classes from './Paginator.module.css';


const Paginator = (props) => {

  const pageCount = Math.ceil(props.totalUsersCount / props.sizePage);
  let page = [];
  for (let i = 1; i <= pageCount; i++) {
    page.push(i);
  }

  return (
    <div className={classes.nagination}>
      {
        page.map((p) => (<button className={props.currentPage === p && classes.selectedPage} type="button"
          onClick={() => props.onPageChanged(p)} key={p.id} >{p}</button>))
      }
    </div>
  )

};
export default Paginator;