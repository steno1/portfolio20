import CategoryButton from "./CategoryButton"; // Importing the CategoryButton component
import { useState } from "react"; // Importing useState hook from React

// ProjectsCategories component function
const ProjectsCategories = ({ categories, onFilterProject }) => {
  // State to manage the active category
  const [activeCategory, setActiveCategory] = useState("all");

  // Function to handle category change
  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat); // Updating the active category state
    onFilterProject(activeCat); // Passing the selected category to the parent component
  };

  return (
    <div className="portfolio__categories">
      {/* Mapping through categories to render CategoryButton components */}
      {categories.map((category, index) => (
        <CategoryButton
          key={index}
          category={category}
          // Applying classes based on activeCategory state
          className={`btn cat__btn ${activeCategory === category ? "primary" : "white"}`}
          // Handling category change on button click
          onChangeCategory={() => changeCategoryHandler(category)}
        />
      ))}
    </div>
  );
};

export default ProjectsCategories;
