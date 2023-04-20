import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';
import '../styles.css';

const Home = () => {
  // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (    
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className='home-section'
    >
        <div className='mainpage'>
            <div className='mainpage-top'>
                <h1>Juyon Bae</h1>
            </div>
            <div className="mainpage-bottom">
                <Link to={'/about'} className="big-item">about</Link>
                <Link to={'/projects'} className="big-item">projects</Link>
                <Link to={'/contact'} className="big-item">contact</Link>
            </div>
        </div>

    </motion.section>
  );
};

export default Home;