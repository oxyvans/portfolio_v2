import React, { useState }  from 'react';
import "./qualification.css"
import Left from './Left'
import Right from './Right'


const Qualification = () => {
    /* show  */
    const [click, setClick] = useState(1);
    const handleEducation = () => setClick(1);
    const handleExperience = () => setClick(2);

    const study = [
        {
            titulo: "Software Developer",
            lugar: "FING-UDELAR",
            date: "2018-Present"
    
        },
        {
            titulo: "WEB PHP Y MYSQL",
            lugar: "WEB PHP Y MYSQL",
            date: "2020-2020"
        },
        {
            titulo: "Full Stack Developer",
            lugar: "Holberton",
            date: "2022-2022"
        }
    ]
    const experiens = [
        {
            titulo: "Web-Page",
            lugar: "LaYapla",
            date: "2022"
    
        },
        {
            titulo: "Web-Page-2",
            lugar: "LaYapla",
            date: "2022"
    
        },
        {
            titulo: "Web-Page",
            lugar: "DelEsteGym",
            date: "2022"
    
        }
    ]

    const render = (study, experiens)=> {

        let aux = study;
        click === 1 ? (aux = study) : (aux = experiens);

        return (<Left s={aux} />);
    
    };

    const renderr = (study, experiens)=> {

        let aux = study;
        click === 1 ? (aux = study) : (aux = experiens);

        return (<Right s={aux} />);
    
    };

  return (
    <section className='quali section' id='quali'>
    <h2 className='section__title'>Qualification</h2>
    <samp className='section__subtitle'>Education && Experience</samp>

        <div className='quali__container container'>
            <div className='quali__tabs'>
                <div className='quali__button quali__active button--flex' onClick={handleEducation}>
                    <i class="uil uil-diary"></i>Education
                </div>

                <div className='quali__button button--flex'onClick={handleExperience}>
                    <i class="uil uil-bag-alt"></i>Experience
                </div>
            </div>
            {render(study[0], experiens[0])}
            {renderr(study[1], experiens[1])}
            {render(study[2], experiens[2])}
        </div>
    </section>
  )
}

export default Qualification