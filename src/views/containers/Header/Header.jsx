import React from 'react';

import {HeaderLogo, HeaderCart} from './../../components/Header';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <HeaderLogo/>
        <HeaderCart cost={520} count={3}/>
      </div>
    </header>
  );
}

export default Header;