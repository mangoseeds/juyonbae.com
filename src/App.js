import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CursorContext } from './context/CursorContext';

// import './App.css';
import AnimRoutes from './components/AnimRoutes';
import Home from './pages/Home';

function App() {

  const { cursorVariants, cursorBG } = useContext(CursorContext);

  return (
    <div className="App">
      <Router>
        {/* <Home /> */}
        <AnimRoutes />
      </Router>

      <motion.div 
          variants={cursorVariants}
          animate={cursorBG}
          className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full'
      />
    </div>
  );
}

export default App;
