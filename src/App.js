import { Route, Routes } from 'react-router';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import NewsContainer from './components/News/NewsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';




const App = () => {
  return (
    //  <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavbarContainer  />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer  />} />
            <Route path="/news" element={<NewsContainer  />} />
            <Route path="/music" element={<Music />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    //  </BrowserRouter>
  );
}



export default App;
