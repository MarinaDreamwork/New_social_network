import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div>
        <a href='#'>
          <img src='https://image.similarpng.com/very-thumbnail/2020/07/realistic-Soundcloud-logo-social-network--vector-PNG.png' />
        </a>
        </div>
      </div>
    </header>
  )
}

export default Header;