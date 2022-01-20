import React from 'react';
import { connect, Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, compose, createStore } from 'redux';
import { initialize } from 'redux-form';
import './App.css';
import Preloader from './components/Common/Preloader/Preloader';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import NewsContainer from './components/News/NewsContainer';
import ProfileContainer, { withRouter } from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './Redux/appReducer';
import store from './Redux/reduxStore';




class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (

      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/news" element={<NewsContainer />} />
            <Route path="/music" element={<Music />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => (
  { initialized: state.app.initialized }
);


const AppContainer = compose(
  connect(mapStateToProps, { initializeApp: initializeApp }),
  withRouter,
)(App);


const SamuraiJSApp = (props) => {
  debugger;
  return (<BrowserRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </BrowserRouter>)
};

export default SamuraiJSApp;