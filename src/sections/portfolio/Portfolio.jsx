import "./portfolio.css";

import Projects from "./Projects"; // Component for displaying projects
import ProjectsCategories from "./ProjectsCategories"; // Component for project categories
import portfolioData from "../../data/portfolioData"; // Data containing information about portfolio projects
import { useState } from "react"; // Importing useState hook from React

// Portfolio component function
const Portfolio = () => {
  // State to manage projects displayed in the portfolio
  const [projects, setProjects] = useState(portfolioData);

  // Extracting unique categories from portfolioData
  const categories = portfolioData.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)]; // Using Set to get unique categories

  // Function to filter projects based on category
  const filterProjectsHandler = (category) => {
    if (category === "all") {
      // If 'all' category selected, display all projects
      setProjects(portfolioData);
    } else {
      // Filter projects based on the selected category
      const filteredProjects = portfolioData.filter(
        (project) => project.category === category
      );
      setProjects(filteredProjects);
    }
  };

  return (
    <section id="portfolio">
      {/* Title and Description */}
      <h2>My Projects</h2>
      <p>Explore some of my recent projects below. Use the buttons to toggle the different categories</p>
      
      {/* Container for displaying projects and categories */}
      <div className="container portfolio__container">
        {/* Component for project categories */}
        <ProjectsCategories
          categories={uniqueCategories}
          onFilterProject={filterProjectsHandler}
        />
        
        {/* Component for displaying projects */}
        <Projects project={projects} />
      </div>
    </section>
  );
};

// Exporting the Portfolio component
export default Portfolio;
