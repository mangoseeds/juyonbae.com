import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CursorContext } from './context/CursorContext';
import AnimRoutes from './components/AnimRoutes';

function App() {

  // const { cursorVariants, cursorBG } = useContext(CursorContext);

  return (
    <div className="App">
      <Router>
        <AnimRoutes />
      </Router>

      {/* <motion.div 
          variants={cursorVariants}
          animate={cursorBG}
          className='w-[20px] h-[20px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full'
      /> */}
    </div>
  );
}

export default App;