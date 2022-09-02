import React from 'react'

const Left = ({s}) => {
  return (
    <div className='quali__section'>

      <div className='quali__content'>

        <div className='quali__data'>
          <div>
              <h3 className='quali__title'>{s.titulo}</h3>
              <span className='quali__subtitle'>{s.lugar}</span>
              <div className='quali__calender'>
                <i class="uil uil-calender">{s.date}</i>
              </div>
          </div>
          <div>
            <span className='quali__rounder'></span>
            <span className='quali__line'></span>
          </div>
        </div>
      
      </div>

    </div>
  )
}

export default Left