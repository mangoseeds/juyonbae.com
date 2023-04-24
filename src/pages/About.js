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
        <div className="subpage">
            <div className="subpage-top">
                <div className="title">about</div>

            </div>
            <div className="subpage-bottom"> 
                <div className="section">
                    <div className="section-title">
                        {/* <p>I'm Juyon. Currently pursuing a computer science bachelor's degree.</p> */}
                        <p>Coming up with a creative idea and making it come true excites me.</p>
                        <p>A keen eye to detail and planning has helped in my journey to achieving ideas. I especially enjoy working on a project that brings convenience to people's day-to-day life making small yet impactful change.</p>
                    </div>
                    <div className="section-title">
                        <p>Art and music is a big part of my life as well! It keeps me inspired for more creativity.</p>
                        <p>(Fun Fact: all photos on this website is taken by me on film)</p>
                    </div>
                </div>
                <div className="section">
                    <div className="section-title">
                        <p>-skills-</p>
                    </div>
                    <div className="section-detail">
                        <p><strong>Programming:</strong> Python, Java, C, SQL, Linux, Latex</p>
                        <p><strong>Languages:</strong> Fluent English and Korean. Basic Japanese and French.</p>    
                    </div>        
                </div>
                <div class="section">
                    <div className="section-title">
                        <p>-education-</p>
                    </div>
                    <div className="section-detail">
                        <p>Ewha Womens University, currently enrolled in Computer Science and Engineering degree</p> 
                        <ul>
                            <li><em>CS Courses:</em> Data Structures, Computer Algorithms, Operating Systems, Database, Computer Architecture, Information Communications</li>
                            <li><em>Math Courses:</em> Calculus, Probability and Statistics, Discrete Mathematics, Linear Algebra</li>
                            <li><em>Dean’s List in 2020 Spring, 2020 Fall</em></li>
                        </ul>
                        <p>Hunter College, Visiting Student</p>
                        <ul>
                            <li><em>CS Courses:</em> Logic and Computers, Algorithms (Graduate Level)</li>
                        </ul>
                    </div>  
                </div>

                <div class="section">
                    <div className="section-title">
                        <p>-leadership-</p>
                    </div>
                    <div className="section-detail">
                        <p>Core Member at <em>Google Developer Student Club, Hunter College</em></p>
                        <p>President of <em>Ewha Womens University <a className="egg" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=hwtp11xrGG0&ab_channel=ewhauniv">Hip Hop Club</a></em></p>
                        <p>Treasurer of <em>Ewha Womens University Hip Hop Club</em></p>
                        <p>Treasurer of <em>University Hip Hop Club Association</em></p>
                    </div>  
                </div>  

                <div class="section">
                    <div className="section-title">
                        <p>-experience-</p>
                    </div>
                    <div className="section-detail">
                        <p>Dacon School Computer Vision Program</p>  
                        <ul>
                            <li>Learned the fundamentals of computer vision, including NumPy, PyPlot, Keras libraries.</li>
                            <li>Created an image classification learning model with 93% accuracy that detects numbers in images. Applied techniques such as batch normalization, pooling, and cross‑validation.</li>
                            <li>Awarded <em>the best tutee certificate</em> for outstanding accomplishments and participation in the class.</li>
                        </ul>   
                       <p></p>
                        <p>After‑School Computer Science Class Teacher</p>  
                        <ul>
                            <li>Prepared lessons for students grades K-5.</li>
                            <li>Simplified complex topics such as computer science, machine learning, electrical engineering, and robotics, into digestible lessons for younger students.</li>
                            <li>Delivered hands-on teaching to improve comprehension and provide in-depth answers</li>
                        </ul>   
                    </div>  
                </div>
                  
            </div>               
        </div>
    </motion.section>
  );
};

export default About;