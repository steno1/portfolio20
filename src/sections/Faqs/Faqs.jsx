import "./faqs.css"; // CSS file for styling FAQ section
import 'aos/dist/aos.css'; // CSS file for AOS animations

import Aos from "aos"; // AOS library for scroll animations
import FAQ from "./FAQ"; // Importing the FAQ component
import faqData from "../../data/faqData"; // Data containing FAQ items
import { useEffect } from "react"; // Importing useEffect hook from React

// Faqs component function
const Faqs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }); // Initializing AOS with a duration of 2000ms for animations
  });

  return (
    <section id="faqs">
      {/* Title and Description */}
      <h2>Frequently Asked Questions</h2>
      <p>Explore common questions I receive. Click to reveal the answers. If you have further queries, feel free to reach out to me through the contact section!</p>
      
      {/* Container for displaying FAQ items */}
      <div className="container faqs__container" data-aos="fade-in">
        {/* Mapping through faqData to render FAQ components */}
        {faqData.map(faq => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
