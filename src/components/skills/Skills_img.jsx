import React from 'react';
import SkillImg1 from '../../assets/html.png';
import SkillImg5 from '../../assets/js.png';
import SkillImg2 from '../../assets/css3.png';
import SkillImg4 from '../../assets/python.png';
import SkillImg3 from '../../assets/react.png';

const Skills_img = () => {

    const skills = [
        {
          image: SkillImg1,
        },
        {
          image: SkillImg2,
        },
        {
          image: SkillImg3,
        },
        {
          image: SkillImg4,
        },
        {
          image: SkillImg5,
        }
    ];

  return (
      <div className='s__container container grid section'>
          {skills.map((skill) => {
            return (
              <div className='s__imgs'>
                <img className='s__img' src={skill.image} alt='' />
              </div>
            );
          })}
      </div>
  );
};

export default Skills_img;