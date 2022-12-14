import React, { useState } from 'react'
import "./profolio.css"
import Menu from "./Menu"

const Portfolio = () => {
  const [item, setItem] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) =>{
        return curElem.category === categoryItem;
    });

    setItem(updatedItems);
  }

  return (
    <section className='work container section' id='work'>
        <h2 className='section__title'>Portfolio</h2>
        <samp className='section__subtitle'>Works && Proyect</samp>

        <div className='work__filter'>
            <span className='work__item' onClick={() => setItem(Menu)}>Everything</span>
            <span className='work__item' onClick={() => filterItem("Front-End")}>Front-End</span>
            <span className='work__item' onClick={() => filterItem("Back-End")}>Back-End</span>
            <span className='work__item' onClick={() => filterItem("Full-Stack")}>Full-Stack</span>
            <span className='work__item' onClick={() => filterItem("Dev-Ops")}>Dev-Ops</span>
        </div>

        <div className='work__container grid'>
            {item.map((elem) => {
                const {id, img, title, category} = elem;
                return (
                    <div className='work__card' key={id}>
                        <div className='work__preview'>
                            <img  className='work__img' src={img} alt="" />
                            <div className='work__mask'></div>
                        </div>
                        
                        <span className='work__categoty'>{category}</span>
                        <h3 className='work__title'>{title}</h3>
                        <a href="https://github.com/oxyvans?tab=repositories" className='work__button'>
                            <i class="uil uil-link-alt"></i>
                        </a>
                    </div>
                )
            })}
        </div>


    </section>
  )
}

export default Portfolio