
import { connect } from 'react-redux';
import Navbar from './Navbar';



const mapStateToProps = (state) => {
  return (
    {links: state.sitebar.links,
      friends: state.sitebar.friends,
    }
  )
};


const NavbarContainer = connect(mapStateToProps)(Navbar);



export default NavbarContainer;