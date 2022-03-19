import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, compose, createStore } from 'redux';
import { initialize } from 'redux-form';
import './App.css';
import Preloader from './components/Common/Preloader/Preloader';

import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import NewsContainer from './components/News/NewsContainer';
import { withRouter } from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import { initializeApp } from './Redux/appReducer';
import store from './Redux/reduxStore';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


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
          <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
              <Route path="/profile" element={<ProfileContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/news" element={<NewsContainer />} />
              <Route path="/music" element={<Music />} />
              <Route path="/users" element={<UsersContainer pageTitle={"Самурай"} />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
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
  return (<BrowserRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </BrowserRouter>)
};

export default SamuraiJSApp;