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

const App = (props) => {
  return (
  <div className='app-wrapper'>
    <BrowserRouter>
      <div>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/friends' component={Friends} />
          <Route path='/groups' component={Groups} />
          <Route path='/forum' component={Forum} />
          <Route path='/media' component={Media} />
        </div>
        </div>
     </BrowserRouter>
  </div>
  );
}

export default App;
