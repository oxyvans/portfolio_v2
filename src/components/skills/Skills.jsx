import React from 'react'
import "./skills.css"
import Front from './Front'
import Back from './Back'

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className='section__title'>Skills</h2>
        <samp className='section__subtitle'>Level</samp>

            <div className="skills__container- container grid">
                <Front />
                <Back />
            </div>
    </section>
  )
}

export default Skills