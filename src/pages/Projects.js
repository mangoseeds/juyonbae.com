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
                  <div className="section-title"><a target="_blank" rel="noopener noreferrer" href="https://github.com/mangoseeds/juyonbae.com">Video Log (in progress)</a>
                  </div>
                  <div className="section-detail">
                    Video-journaling Android application.
                  </div>        
              </div>
              <div className="section">
                  <div className="section-title"><a target="_blank" rel="noopener noreferrer" href="https://github.com/mangoseeds/juyonbae.com">My Website</a>
                  </div>
                  <div className="section-detail">
                    My website (the page you are on right now!) built using Netlify and Github. Started with html and css file and transitioned it to react. 
                  </div>        
              </div>
              <div className="section">
                  <div className="section-title"><a target="_blank" rel="noopener noreferrer" href="https://github.com/LiSiruiRay/AIAgent">Trip Genie</a>
                  </div>
                  <div className="section-detail">
                    HackPrinceton 2023: AI travel agent that helps in planning and booking your trip. Contributed on frontend and visual representation of the website. 
                  </div>        
              </div>
              <div className="section">
                  <div className="section-title"><a target="_blank" rel="noopener noreferrer" href="https://github.com/mangoseeds/christmas-personality-test">Christmas MBTI test website (in progress)</a>
                  </div>
                  <div className="section-detail">
                    Visually simple and appeasing MBTI test website with a Christmas theme.
                  </div>        
              </div>
              <div className="section">
                  <div className="section-title"><a target="_blank" rel="noopener noreferrer" href="https://github.com/mangoseeds/RacingCarGame">Racing Car Game using Python</a>
                  </div>
                  <div className="section-detail">
                    A racing game with visuals and music using PyGame.
                  </div>        
              </div>

              <div className="section">
                  <div className="section-title"><a target="_blank" rel="noopener noreferrer" href="https://github.com/mangoseeds/machine-learning">Machine Learning</a>
                  </div>
                  <div className="section-detail">
                    Learned and implemented various machine learning models to classification and regression dataset.{"\n"}Utilized sklearn for machine learning models and graphviz, matplotlib for data visualization.
                  </div>        
              </div>

              <div className="section">
                  <div className="section-title">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/mangoseeds/data-analysis">Data Analysis</a>
                  </div>
                  <div className="section-detail">
                    Learned the process of data analysis.{"\n"} Utilized libraries such as numpy and pandas.
                  </div>        
              </div>
          </div>               
      </div>        
    </motion.section>
  );
};

export default Projects;