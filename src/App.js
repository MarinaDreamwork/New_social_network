import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Forum from './components/Forum/Forum';
import Groups from './components/Groups/Groups';
import Header from './components/Header/Header';
import Media from './components/Media/Media';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import Posts from './components/Posts/Posts';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <MainPage />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={()=> <ProfileContainer/>}/>
          <Route path='/dialogs' render={() => <DialogsContainer />}/>
          <Route path='/posts' render={() => <Posts />} />
          <Route path='/friends' render={() => <FriendsContainer />} />
          <Route path='/groups' render={() => <Groups />} />
          <Route path='/forum' render={() => <Forum /> } />
          <Route path='/media' render={() => <Media />} />
          <Route path='/users' render={() => <UsersContainer />} />
        </div>
      </div>
     </BrowserRouter>
  );
}

export default App;
