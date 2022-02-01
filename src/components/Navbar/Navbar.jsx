import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import classes from './Navbar.module.css';





const Navbar = (props) => {
 

      const setActive = ({ isActive }) => isActive ? classes.active : classes.item;

      const linksElements = props.links.map((l) => {

        return (<div key={l.id} className={`${classes.item} ${classes.active}` }>
          <NavLink to={l.path} className={setActive}  id={l.id}>
            {l.name}
          </NavLink>
        </div>)
      });

      return (
        <div className={classes.wrapper}>
          <nav className={classes.nav}>
            {linksElements}
          </nav>
          <Friends friends={props.friends} />
        </div>


      )
  
  
};

export default Navbar;