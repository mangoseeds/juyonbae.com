import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';
import '../styles/experience.css';

const Experience = () => {
  // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className='experience-section'
    >
        <div class="experience">
            <h2>Experience</h2>
            <h3>Dacon School Computer Vision Program</h3>
            <ul>
                <li>Learned the fundamentals of computer vision, including NumPy, PyPlot, Keras libraries.</li>
                <li>Created an image classification learning model that detects numbers in images. Applied techniques such as batch normalization, pooling, and cross‑validation. The final model showed 93% accuracy.</li>
                <li>Awarded the best tutee certificate for outstanding accomplishments and participation in the class.</li>
            </ul>
        </div>
    </motion.section>
  );
};

export default Experience;