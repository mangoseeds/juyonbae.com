import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';
import '../styles/contact.css';

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  
  return (    
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ delay: 0.5, duration: 2 }}
      className='section'
    >
        <div className='main'>
            <div className="title">
                <h1>contact</h1>
            </div>
            <div className="info-area">
                    <div className="item">email: juyonbae@gmail.com</div>
                    <div className="item"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/juyon-bae/">LinkedIn</a></div>                    
                    <div className="item"><a target="_blank" rel="noopener noreferrer" href="https://github.com/mangoseeds">GitHub</a></div>
            </div>
        </div>

    </motion.section>
    
  );
};

export default Contact;