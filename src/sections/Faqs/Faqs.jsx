import "./faqs.css";
import 'aos/dist/aos.css';

import Aos from "aos";
import FAQ from "./FAQ";
import faqData from "../../data/faqData";
import { useEffect } from "react";

const Faqs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>Explore common questions I receive. Click to reveal the answers. If you have further queries, feel free to reach out to me through the contact section!</p>
      <div className="container faqs__container" data-aos="fade-in">
        {faqData.map(faq => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
