import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';
import '../styles/contact.css';

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (    
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5, duration: 2 }}
      className='section'
    >
        <body>
        <header class="siteHeader" id="SiteHeader">
            <h1 class="siteHeader_title">
                <a href="https://juyonbae.com">Juyon Bae</a>
            </h1>
            <button class="siteHeader_menuBtn" type="button" aria-label="Menu">
                <div class="shape">
                    <div class="line line-top"></div>
                    <div class="line line-center"></div>
                    <div class="line line-bottom"></div>
                </div>
            </button>
        </header>

        <nav class="siteNavi" id="SiteNavi" style="display: none; opacity: 0;">
            <div class="siteNavi_bg"></div>
            <button class="siteNavi_close" type="button">
                <div class="shape"></div>
            </button><div class="siteNavi_content">
                <ol class="siteNavi_pages">
                    <li class="siteNavi_pageItem-1">
                        <a href="https://juyonbae.com/about">
                            <div class="inner">
                                <div class="text">about</div>
                            </div>
                        </a>
                    </li>
                    <li class="siteNavi_pageItem-2">
                        <a href="https://juyonbae.com/projects">
                            <div class="inner">
                                <div class="text">projects</div>
                            </div>
                        </a>
                    </li>
                    <li class="siteNavi_pageItem-3">
                        <a href="https://juyonbae.com/experience">
                            <div class="inner">
                                <div class="text">experience</div>
                            </div>
                        </a>
                    </li>
                    <li class="siteNavi_pageItem-4">
                        <a href="https://juyonbae.com/contact">
                            <div class="inner">
                                <div class="text">contact</div>
                            </div>
                        </a>
                    </li>
                </ol>
                <p class="siteNavi_cr">
                    <span>©</span><span>2023</span><span>Juyon Bae</span>
                </p>
            </div>
        </nav>

        <main>
            <div class="title">
                <h1>contact</h1>
            </div>
            <div class="info-area">
                    <div class="item">email: juyonbae@gmail.com</div>
                    <div class="item"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/juyon-bae/">LinkedIn</a></div>                    
                    <div class="item"><a target="_blank" rel="noopener noreferrer" href="https://github.com/mangoseeds">GitHub</a></div>
            </div>

        </main>

    </body>

    </motion.section>
    
  );
};

export default Contact;