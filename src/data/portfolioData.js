
import portfolio from "../asset/portfolio.jpg";
import solarCalculator from "../asset/solarCalculator.PNG";
import task from "../asset/task.jpg";
import financeTracker from "../asset/financetracker1.JPG";
import cryptoCap from "../asset/cryptoCap.PNG"


const portfolioData = [

   {
    id: 1,
    category: "Frontend",
    image: cryptoCap,
    title: "CryptoCap (Frontend)",
    description: "CryptoCap is a lightweight crypto tracker built with React, TypeScript, and CSS Modules. It fetches live data from the CoinGecko API, allowing users to search coins, add their USD investments, and monitor portfolio value in real time.",
    demo: "https://coinschecker.netlify.app/",
    githubLink: "https://github.com/steno1/crypto/tree/master"
  },


   {
    id: 2,
    category: "MERN stack",
    image: solarCalculator,
    title: "Solar PV System Sizing Calculator (MERN)",
    description: "A Solar PV Calculator built with the MERN stack, offering load analysis and component sizing for solar panels, batteries, charge controllers, and inverters, complete with user authentication and state management.",
    demo: "https://solar-calculator-1.onrender.com/",
    githubLink: "https://github.com/steno1/solar_calculator"
  },
  

    {
    id: 3,
    category: "Frontend",
    image: portfolio,
    title: "My Portfolio Site (Frontend)",
    description: "A frontend-focused portfolio site built using React, Context API, HTML, and CSS. It includes sections like Header, Home, About, Portfolio, Projects, etc.",
    demo: "https://steno1.github.io/portfolio20/",
    githubLink: "https://github.com/steno1/portfolio20"
  },

  {
    id: 4,
    category: "MERN stack",
    image: task,
    title: "User Task Management Site (MERN)",
    description: "A task management platform developed with React and MERN stack, allowing users to manage daily tasks, records, sorting functionalities, and more.",
    demo: "https://dailytaskapp.onrender.com/landing",
    githubLink: "https://github.com/steno1/taskManagementApp/tree/master"
  },

   
  
  {
    id: 5,
    category: "Next js",
    image:  financeTracker ,
    title: "Finance Tracker (Next js)",
    description: "A modern finance tracking web app built with Next.js, TypeScript, and Tailwind CSS. It allows users to securely log in, manage income and expenses, and view financial summaries through interactive charts. Features API routes, JWT authentication, transaction CRUD operations, and a fully responsive dashboard.",
    demo: "https://smartfinance-tracker.vercel.app/"
  }
];

export default portfolioData;
