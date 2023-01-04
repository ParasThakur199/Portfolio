import "./about.css";
import ME from '../../assets/p11.png';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'
export const About = () => {
  return (
   <section id="about">
      <h5>Get TO Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
         </div>
         <div className="about__content">
         
              <p>Hello 👋 I am a Java Backend Developer, passionate about working on exciting projects
                 that test what I've learnt, whilst being exposed to the power and potential 
                of the ever-evolving technologies around us. I'm always looking for better, and more importantly, 
                accessible ways to solve the common problems we are faced with day-to-day.</p>
               <a href="#contact" className="btn btn-primary">Let's Talk</a>

         </div>
      </div>
   </section>
  )
};
