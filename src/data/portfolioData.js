import ecommerce from "../asset/eCommerce.jpg"
import portfolio from "../asset/portfolio.jpg"
import solarCalculator from "../asset/solarCalculator.PNG"
import task from "../asset/task.jpg"

const portfolioData = [
    {
      id: 1,
      category: "MERN stack",
      image: solarCalculator,
      title: "Solar PV System Sizing Calculator (MERN)",
      description: "A Solar PV Calculator built with the MERN stack, offering load analysis and component sizing for solar panels, batteries, charge controllers, and inverters, complete with user authentication and state management",
      demo: "https://solar-calculator-1.onrender.com/",
      githubLink: "https://github.com/steno1/solar_calculator"
    },
    {
      id: 2,
      category: "MERN stack",
      image:task,
      title: "User Task Management Site (MERN)",
      description: "A task management platform developed with React and MERN stack, allowing users to manage daily tasks, records, sorting functionalities, and more.",
      demo: "https://dailytaskapp.onrender.com/landing",
      githubLink: "https://github.com/steno1/taskManagementApp/tree/master"
    },
    {
      id: 3,
      category: "MERN stack",
      image: ecommerce,
      title: "eCommerce Platform (MERN)",
      description: "An eCommerce platform built with React, Redux, and integrated PayPal. Includes features like rating and comment sections, search functionalities, and more.",
      demo: "https://stenosupermarket1.onrender.com/",
      githubLink: "https://github.com/steno1/eCommerceRedone"
    },
    {
      id: 4,
      category: "Frontend",
      image: portfolio,
      title: "My Portfolio Site (Frontend)",
      description: "A frontend-focused portfolio site built using React, Context API, HTML, and CSS. It includes sections like Header, Home, About, Portfolio, Projects, etc",
      demo: "https://steno1.github.io/lastPortfolio/",
      githubLink: "https://github.com/steno1/lastPortfolio/tree/master"
    },
  ];
  
  export default portfolioData;
  