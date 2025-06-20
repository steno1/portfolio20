import "./portfolio.css";

import Projects from "./Projects"; 
import ProjectsCategories from "./ProjectsCategories"; 
import portfolioData from "../../data/portfolioData"; 
import { useState } from "react"; 


const Portfolio = () => {
  
  const [projects, setProjects] = useState(portfolioData);

  
  const categories = portfolioData.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)]; 

  
  const filterProjectsHandler = (category) => {
    if (category === "all") {
      
      setProjects(portfolioData);
    } else {
      
      const filteredProjects = portfolioData.filter(
        (project) => project.category === category
      );
      setProjects(filteredProjects);
    }
  };

  return (
    <section id="portfolio">
      
      <h2>My Projects</h2>
      <p>Explore some of my recent projects below. Use the buttons to toggle the different categories</p>
      
      
      <div className="container portfolio__container">
        
        <ProjectsCategories
          categories={uniqueCategories}
          onFilterProject={filterProjectsHandler}
        />
        
        
        <Projects project={projects} />
      </div>
    </section>
  );
};


export default Portfolio;
