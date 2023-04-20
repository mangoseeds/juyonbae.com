import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';
import '../styles.css';

const About = () => {
//   const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className='about-section'
    >
        <main>
            <div classname="title">
                <h1>about</h1>
            </div>
            <div class="about-info-area"> 
                <div class="section">
                    <h2>Introduction</h2>
                    <p>I am a student at Ewha Womens University majoring in computer science and engineering with strong interest in data science and data analytics.</p>
                    <p>I also love art and music! All the photos on this website is taken by me on my film camera.</p>
                </div>
                <div class="section">
                    <h2>Skills</h2>
                    <p><span class="main">Programming:</span> Python, Java, C, SQL, Linux, Latex</p>
                    <p><span class="main">Languages:</span> Fluent English and Korean. Basic Japanese and French. </p>            
                </div>
                <div class="section">
                    <h2>Education</h2>
                    <p><span class="main">Ewha Womens University, Seoul, South Korea</span>
                    <span class="small">BS in Computer Science and Engineering</span>
                    <ul>
                        <li>CS Courses: Data Structures, Computer Algorithms, Operating Systems, Database, Computer Architecture, Information Communications</li>
                        <li>Math Courses: Calculus, Probability and Statistics, Discrete Mathematics, Linear Algebra</li>
                        <li><strong>Dean’s List</strong> in 2020 Spring, 2020 Fall</li>
                    </ul>
                    </p>
                    <p><span class="main">Hunter College, New York City, United States</span>
                        <span class="small">Visiting Student</span>
                        <ul>
                            <li>CS Courses: CS Courses: Logic and Computers, Algorithms (Graduate Level)</li>
                        </ul>
                    </p>
                </div>
                <div class="section">
                    <h2>Leadership</h2>
                    <p> <span class="main">Google Developer Student Club at Hunter College</span>
                    <ul><li>Core Member</li></ul></p>
                    <p><span class="main">Ewha Womens University Hip Hop Club</span>
                        <ul><li>President</li>
                        <li>Treasurer</li></ul></p>
                    <p><span class="main">University Hip Hop Club Association</span>
                        <ul><li>Treasurer</li></ul></p>
                </div>
            </div>       
            <h2>Experience</h2>
            <h3>Dacon School Computer Vision Program</h3>
            <ul>
                <li>Learned the fundamentals of computer vision, including NumPy, PyPlot, Keras libraries.</li>
                <li>Created an image classification learning model that detects numbers in images. Applied techniques such as batch normalization, pooling, and cross‑validation. The final model showed 93% accuracy.</li>
                <li>Awarded the best tutee certificate for outstanding accomplishments and participation in the class.</li>
            </ul>         
        </main>
    </motion.section>
  );
};

export default About;