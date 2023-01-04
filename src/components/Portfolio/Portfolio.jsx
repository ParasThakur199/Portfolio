import "./portfolio.css";
import IMG1 from "../../assets/Best.jpg";
import IMG2 from "../../assets/freshly.jpg";


var data=[
  {
    id:1,
    name:"Travelocity",
    title:'Travelo_City: Helps you to make your journey smooth.',
    github:'https://github.com/ParasThakur199/creepy-skin-4061',
    demo:'https://coruscating-frangipane-928f79.netlify.app/'
  },

  {
    id:2,
    name:"Car_Rental",
    title:"Car_Rental : Book your car not in day's but within hours.",
    github:"https://github.com/ParasThakur199/righteous-glove-4452.git",
    demo:"https://papaya-zuccutto-5a5056.netlify.app/"
  }
 
]

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
         data.map(({id,image,name,title,github,demo})=>{
           return (
            <article key={id} className="portfolio__item">
            <div className="Portfolio__item-image">
              {/* <img src={image} alt="image" /> */}
            </div>
            <h2 style={{textAlign:"center"}} >{name}</h2>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className="btn github" target="_blank">
              Github
            </a>
            <a href={demo} className="btn btn-primary github" target="_blank">
              Live Demo
            </a>
            </div>
          </article>
           )

         })
       }
      </div>
    </section>
  );
};