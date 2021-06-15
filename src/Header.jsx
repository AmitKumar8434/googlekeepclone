import React from 'react';
import logo from './images/logo.png'
const Header=()=> {
  return (
      <>
          <div className='header'>
              <img src={logo} alt='logo' />
              <h1 className='header_text'>Keep</h1>
         </div>
    </>
  );
}

export default Header;