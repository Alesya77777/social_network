import { NavLink } from 'react-router-dom';
import StoreContext from '../../StoreContext';
import Navbar from './Navbar';
import classes from './Navbar.module.css';





const NavbarContainer = () => {
  return (<StoreContext.Consumer>
    {(store) => {
      const state = store.getState();
      // const setActive = ({ isActive }) => isActive ? classes.active : classes.item;

      // const linksElements = state.sitebar.links.map((l, index) => {

      //   return (<div className={`${classes.item} ${classes.active}`}>
      //     <NavLink to={l.path} className={setActive} key={index} id={l.id}>
      //       {l.name}
      //     </NavLink>
      //   </div>)
      // });

      return (
        <Navbar friends={state.sitebar.friends} links={state.sitebar.links} />

      )
    }}
  </StoreContext.Consumer>
  )
};

export default NavbarContainer;