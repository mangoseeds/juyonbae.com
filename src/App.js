import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';

import './App.css';

import AnimRoutes from './components/AnimRoutes';
import Home from './pages/Home';
import { CursorContext } from './context/CursorContext';

function App() {

  const { cursorVariants, cursorBG } = useContext(CursorContext);

  return (
    <div className="App">
      <Router>
        <Home />
        <AnimRoutes />
      </Router>

      <motion.div 
          className='cursor'
          variants={cursorVariants}
          animate={cursorBG}
      />


    </div>

  );
}

export default App;
