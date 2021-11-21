import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Forum from './components/Forum/Forum';
import Friends from './components/Friends/Friends';
import Groups from './components/Groups/Groups';
import Header from './components/Header/Header';
import Media from './components/Media/Media';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import MainPage from './components/MainPage/MainPage';
import Posts from './components/Posts/Posts';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/Friends/FriendsContainer';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <MainPage />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile />}/>
          <Route path='/dialogs' render={() => <DialogsContainer />}/>
          <Route path='/posts' render={() => <Posts />} />
          <Route path='/friends' render={() => <FriendsContainer />} />
          <Route path='/groups' render={() => <Groups />} />
          <Route path='/forum' render={() => <Forum /> } />
          <Route path='/media' render={() => <Media />} />
        </div>
      </div>
     </BrowserRouter>
  );
}

export default App;
