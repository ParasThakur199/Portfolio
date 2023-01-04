import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa';

export const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/paras-jamwal-311136247/" target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/ParasThakur199" target="_blank"><FaGithub></FaGithub></a>
         
    </div>
  )
}
