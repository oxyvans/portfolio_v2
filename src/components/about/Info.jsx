import React from 'react'

const Info = () => {
  return (
    <div className='about__skill grid'>

        <div className='skills__data'>
            <div className='skills__title'>
                <h3 className='skills__name'>Front end</h3>
                <samp className='skills__number'>70%</samp>
            </div>
            <div className='skills__bar'>
                <samp className='skills__percentage percentage'></samp>
            </div>
        </div>

        <div className='skills__data'>
            <div className='skills__title'>
                <h3 className='skills__name'>Back end</h3>
                <samp className='skills__number'>80%</samp>
            </div>
            <div className='skills__bar'>
                <samp className='skills__percentage percentage1'></samp>
            </div>
        </div>

        <div className='skills__data'>
            <div className='skills__title'>
                <h3 className='skills__name'>Software Developer</h3>
                <samp className='skills__number'>90%</samp>
            </div>
            <div className='skills__bar'>
                <samp className='skills__percentage percentage2'></samp>
            </div>
        </div>

    </div>
  )
}

export default Info