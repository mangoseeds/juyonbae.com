import React, { useContext } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';
import '../styles/header.css';

const Header = () => {
  // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className="siteHeader">
        <h1 className="siteHeader_title">
            <Link
            // onMouseEnter={mouseEnterHandler}
            // onMouseLeave={mouseLeaveHandler}
            to={'/'}>Juyon Bae</Link>
        </h1>
        {/* <Nav /> */}
    </header>
  );
};

export default Header;