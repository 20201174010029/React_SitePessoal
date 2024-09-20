import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    return () => window.removeEventListener('resize', showButton);
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href='#home' className='navbar-logo' onClick={closeMobileMenu}>
            JD
            <i className="fa-solid fa-user"></i>
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href='#home' className='nav-links' onClick={closeMobileMenu} id="nav-home">
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='#sobre' className='nav-links' onClick={closeMobileMenu} id="nav-sobre">
                Sobre mim
              </a>
            </li>
            <li className='nav-item'>
              <a href='#curiosidades' className='nav-links' onClick={closeMobileMenu} id="nav-curiosidades">
                curiosidades
              </a>
            </li>
            <li className='nav-item'>
              <a href='#projetos' className='nav-links' onClick={closeMobileMenu} id="nav-projetos">
                Projetos realizados
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
