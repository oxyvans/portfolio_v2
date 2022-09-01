import React, { useState }  from 'react';
import "./qualification.css"
import Education from './Education'
import Experience from './Experience'


const Qualification = () => {
    /* show menu */
    const [click, setClick] = useState(1);
    const handleEducation = () => setClick(1);
    const handleExperience = () => setClick(2);

    const render = () => {
        return (
            click === 1 ? (<Education />) : (<Experience/>)
        )
    };
  return (
    <section className='quali section' id='quali'>
    <h2 className='section__title'>Qualification</h2>
    <samp className='section__subtitle'>Education && Experience</samp>

        <div className='quali__container container'>
            <div className='quali__tabs'>
                <div className='quali__button quali__active button--flex' onClick={handleEducation}>
                    <i class="uil uil-diary"  ></i>Education
                </div>

                <div className='quali__button button--flex'onClick={handleExperience}>
                    <i class="uil uil-bag-alt"></i>Experience
                </div>
            </div>
            {render()}
        </div>
    </section>
  )
}

export default Qualification