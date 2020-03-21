import React from 'react';

import logo from '../assets/images/logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Facebook" width={150} />

      <div className="my-profile">
        <span>Meu perfil</span>
        <i className="material-icons">account_circle</i>
      </div>
    </header>
  );
};

export default Header;