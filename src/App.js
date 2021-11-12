import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Forum from './components/Forum/Forum';
import Friends from './components/Friends/Friends';
import Groups from './components/Groups/Groups';
import Header from './components/Header/Header';
import Media from './components/Media/Media';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import MainPage from './components/MainPage/MainPage';
import Posts from './components/Posts/Posts';


const App = (props) => {
 debugger;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <MainPage />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile />} />
          <Route path='/dialogs' render={() => <Dialogs 
          store={props.store.getState().dialogsPage} 
          dispatch={props.dispatch}/>} /> 
          <Route path='/posts' render={() => <Posts 
          store={props.store.getState()}
          dispatch={props.dispatch}/>} />
          <Route path='/friends' render={() => <Friends store={props.store.getState().friendsPage}/>} />
          <Route path='/groups' render={() => <Groups />} />
          <Route path='/forum' render={() => <Forum /> } />
          <Route path='/media' render={() => <Media />} />
        </div>
      </div>
     </BrowserRouter>
  );
}

export default App;
