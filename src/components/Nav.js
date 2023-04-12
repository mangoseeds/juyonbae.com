import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// menu variants
const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className='text-primary xl:hidden'>
      {/* nav open button */}
      <button className="siteHeader_menuBtn" type="button" onClick={() => setOpenMenu(true)}>
          <div className="shape">
              <div className="line line-top"></div>
              <div className="line line-center"></div>
              <div className="line line-bottom"></div>
          </div>
      </button>
      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'
      >
        {/* icon */}
        <div
          onClick={() => setOpenMenu(false)}
          className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'
        >
          <IoMdClose />
        </div>
        {/* menu list */}
        <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary  font-bold text-3xl'>
          <li>
            <Link to='/about'>about</Link>
          </li>
          <li>
            <Link to='/projects'>projects</Link>
          </li>
          <li>
            <Link to='/experience'>experience</Link>
          </li>
          <li>
            <Link to='/contact'>contact</Link>
          </li>
        </ul>
        <p class="siteNavi_cr">
            <span>©</span><span>2023</span><span>Juyon Bae</span>
        </p>
      </motion.div>
    </nav>
  );
};

export default Nav;