import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/10B31/production/_117310486_15.jpg" alt="" />
      <div className={classes.auth}>
        {props.auth 
        ? <div>{props.login} - <button onClick={props.logouts} >Logout</button></div> 
        : <NavLink to={'/login'}> Login </NavLink>}
    

      </div>
    </header>
  )
};

export default Header;