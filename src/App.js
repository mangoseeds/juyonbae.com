import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

import Contact from './Contact';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  // console.log(mousePosition);

  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, []);


  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10
    },
    button: {
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
      height: 70,
      width: 70,
      backgroundColor: 'rgba(40,40,40,0.5)',
      mixBlendMode: "diff"
    }
  }

  const buttonEnter = () => setCursorVariant("button");
  const buttonLeave = () => setCursorVariant("default");

  

  return (
    <div className="App">
      <body>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
          >
            <div className="top">
                <h1>Juyon Bae</h1>
            </div>
            <div className="main-page-item-container">
                    <button onMouseEnter={buttonEnter} onMouseLeave={buttonLeave} className="main-page-item">about</button>
                    <button onMouseEnter={buttonEnter} onMouseLeave={buttonLeave} className="main-page-item">projects</button>
                    <button onMouseEnter={buttonEnter} onMouseLeave={buttonLeave} className="main-page-item">experience</button>
                    <button onMouseEnter={buttonEnter} onMouseLeave={buttonLeave} className="main-page-item">contact</button>
            </div>
        </motion.main>
        <motion.div 
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />
      </body>
    </div>

  );
}

export default App;
