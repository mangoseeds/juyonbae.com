import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';
import Header from '../components/Header';
import '../styles.css';

const Contact = () => {
  // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  
  return (    
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className='contact-section'
    >
        {/* <Header /> */}
        <div className='subpage'>
            <div className="subpage-top">
                <div className="title">contact</div>
            </div>
            <div className="subpage-bottom">
              <div className="small-item">juyonbae@gmail.com</div>
              <div className="small-item"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/juyon-bae/">LinkedIn</a></div>                    
              <div className="small-item"><a target="_blank" rel="noopener noreferrer" href="https://github.com/mangoseeds">GitHub</a></div>
            </div>
        </div>

    </motion.section>
    
  );
};

export default Contact;