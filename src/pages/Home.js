import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';
import '../styles/home.css';

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (    
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5, duration: 2 }}
      className='section'
    >
        <main>
            <div className="top">
                <h1>Juyon Bae</h1>
            </div>
            <div className="main-page-item-container">
                <Link to={'/about'} className="main-page-item">about</Link>
                <Link to={'/projects'} className="main-page-item">projects</Link>
                <Link to={'/experience'}  className="main-page-item">experience</Link>
                <Link to={'/contact'} className="main-page-item">contact</Link>
            </div>
        </main>

    </motion.section>
    
  );
};

export default Home;