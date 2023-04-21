import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';
import '../styles.css';

const Projects = () => {
  // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className='projects-section'
    >
      <div className="subpage">
          <div className="subpage-top">
              <div className="title">projects</div>
          </div>

          <div className="subpage-bottom"> 
              <div className="section">
                  <div className="section-title">
                      <p>Data</p>
                  </div>
                  <div className="section-detail">
                      <p><strong>Programming:</strong> Python, Java, C, SQL, Linux, Latex</p>
                      <p><strong>Languages:</strong> Fluent English and Korean. Basic Japanese and French. </p>    
                  </div>        
              </div>
              <div class="section">
                  <div className="section-title">
                      <p>education</p>
                  </div>
                  <div className="section-detail">
                      <p>Ewha Womens University, Computer Science and Engineering</p> 
                      <ul>
                          <li>CS Courses: Data Structures, Computer Algorithms, Operating Systems, Database, Computer Architecture, Information Communications</li>
                          <li>Math Courses: Calculus, Probability and Statistics, Discrete Mathematics, Linear Algebra</li>
                          <li><strong>Dean’s List</strong> in 2020 Spring, 2020 Fall</li>
                      </ul>
                      <p>Hunter College, Visiting Student</p>
                      <ul>
                          <li>CS Courses: CS Courses: Logic and Computers, Algorithms (Graduate Level)</li>
                      </ul>
                  </div>  
              </div>

              <div class="section">
                  <div className="section-title">
                      <p>experience</p>
                  </div>
                  <div className="section-detail">
                      <p>Dacon School Computer Vision Program</p>  
                      <ul>
                          <li>Learned the fundamentals of computer vision, including NumPy, PyPlot, Keras libraries.</li>
                          <li>Created an image classification learning model that detects numbers in images. Applied techniques such as batch normalization, pooling, and cross‑validation. The final model showed 93% accuracy.</li>
                          <li>Awarded the best tutee certificate for outstanding accomplishments and participation in the class.</li>
                      </ul>    
                  </div>  
              </div>   
          </div>               
      </div>        
    </motion.section>
  );
};

export default Projects;