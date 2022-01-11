
import { connect } from 'react-redux';
import { compose } from 'redux';
import Navbar from './Navbar';



const mapStateToProps = (state) => {
  return (
    {links: state.sitebar.links,
      friends: state.sitebar.friends,
    }
  )
};


export default compose(
  connect(mapStateToProps)
)(Navbar);