// Importing the Project component

import Project from "./Project";

// Projects component function
const Projects = ({ project }) => {
  return (
    <div className="portfolio__projects" data-aos="fade-up">
      {/* Mapping through the project data to render individual projects */}
      {project.map(project => (
        // Rendering the Project component for each project
        <Project key={project.id} Project={project} />
      ))}
    </div>
  );
};

// Exporting the Projects component
export default Projects;
