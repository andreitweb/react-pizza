import React from 'react';

import {HeaderLogo, HeaderCart} from './../../components/Header';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <HeaderLogo/>
        <HeaderCart/>
      </div>
    </header>
  );
}

export default Header;