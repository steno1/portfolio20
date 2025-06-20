import Card from '../../components/card/Card'; 
import React from 'react'; 


const Project = ({ Project }) => {
  return (
    
    <Card className="portfolio__project" >
      <div className='portfolio__project-image'>
        
        <img src={Project.image} alt='portfolioImage' />
      </div>
  
      <h4>{Project.title}</h4>
      
      <p>{Project.description}</p>
      <div className='portfolio__project-cta'>
        
        <a href={Project.demo} className='btn sm' target='_blank' rel="noopener noreferrer">
          Demo
        </a>
        
        <a href={Project.githubLink} className='btn sm primary' target='_blank' rel="noopener noreferrer">
          Github
        </a>
      </div>
    </Card>
  );
};


export default Project;
