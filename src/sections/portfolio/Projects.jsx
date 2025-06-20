

import Project from "./Project";


const Projects = ({ project }) => {
  return (
    <div className="portfolio__projects" data-aos="fade-up">
      
      {project.map(project => (
        
        <Project key={project.id} Project={project} />
      ))}
    </div>
  );
};


export default Projects;
