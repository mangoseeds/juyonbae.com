import React, { useContext } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';
import '../styles/header.css';

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (

    <header className="siteHeader">
        <h1 className="siteHeader_title">
            <Link
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            to={'/home'}>Juyon Bae</Link>
        </h1>
        {/* <button class="siteHeader_menuBtn" type="button" aria-label="Menu">
            <div class="shape">
                <div class="line line-top"></div>
                <div class="line line-center"></div>
                <div class="line line-bottom"></div>
            </div>
        </button> */}
        <Nav />
    </header>

        
  )

}