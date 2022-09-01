import React from 'react';
import "./about.css";
import Cv from "../../assets/Profile.pdf"
import Info from './Info';

const About = () => {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <samp className='section__subtitle'>I Introduce Myself</samp>

      <div className='about__container container grid'>

        <div className='about__bars'><Info /></div>

        <div className='about__data'>
          
          <p className="about__description">
            Responsible, proactive and enthusiastic. I have good skills Interpersonal skills and great analytical skills. I am a person with easy learning.
          </p>
          <a Download="" href={Cv} className="button">Download CV</a>
        </div>
      </div>
    </section>
  )
}

export default About