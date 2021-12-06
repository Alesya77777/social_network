import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import NewsContainer from './components/News/NewsContainer';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';




const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sitebar} />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile store={props.store} />} />
            <Route path="/dialogs" element={<DialogsContainer store={props.store} />} />
            <Route path="/news" element={<NewsContainer store={props.store} />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
