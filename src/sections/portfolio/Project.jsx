import Card from '../../components/card/Card'; // Component for individual project card
import React from 'react'; // Importing React

// Project component function
const Project = ({ Project }) => {
  return (
    // Rendering individual project card
    <Card className="portfolio__project" >
      <div className='portfolio__project-image'>
        {/* Displaying project image */}
        <img src={Project.image} alt='portfolioImage' />
      </div>
      {/* Project title */}
      <h4>{Project.title}</h4>
      {/* Project description */}
      <p>{Project.description}</p>
      <div className='portfolio__project-cta'>
        {/* Button for project demo */}
        <a href={Project.demo} className='btn sm' target='_blank' rel="noopener noreferrer">
          Demo
        </a>
        {/* Button for project GitHub link */}
        <a href={Project.githubLink} className='btn sm primary' target='_blank' rel="noopener noreferrer">
          Github
        </a>
      </div>
    </Card>
  );
};

// Exporting the Project component
export default Project;
