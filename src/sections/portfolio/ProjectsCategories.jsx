import CategoryButton from "./CategoryButton"; 
import { useState } from "react"; 


const ProjectsCategories = ({ categories, onFilterProject }) => {
  
  const [activeCategory, setActiveCategory] = useState("all");

  
  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat); 
    onFilterProject(activeCat); 
  };

  return (
    <div className="portfolio__categories">
      
      {categories.map((category, index) => (
        <CategoryButton
          key={index}
          category={category}
          
          className={`btn cat__btn ${activeCategory === category ? "primary" : "white"}`}
        
          onChangeCategory={() => changeCategoryHandler(category)}
        />
      ))}
    </div>
  );
};

export default ProjectsCategories;
