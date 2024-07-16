import "./about.css";

import Card from "../../components/card/Card"; // Component for rendering individual cards
import { IoMdDownload } from "react-icons/io"; // Icon component for download button
import aboutData from "../../data/aboutData"; // Data containing information for cards
import cv from "../../asset/RESUME.pdf"; // Link to the CV (resume) file
import myPics from "../../asset/Too.png"; // Image of the developer

// About component function
const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            {/* Developer's portrait */}
            <img src={myPics} alt="My Portrait" />
          </div>
        </div>
        <div className="about__right">
          {/* Heading */}
          <h2>About Me</h2>
          
          {/* Rendering cards with information */}
          <div className=" about__cards">
            {aboutData.map(item => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">
                  {item.icon}
                </span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          
          {/* Description paragraphs */}
          <p>
            I'm Onu Princeley Toochukwu, a full-stack web developer. I bring my skills and passion to create digital solutions that resonate with clients and users alike.
          </p>
          <p>
            Let's collaborate and transform your ideas into a digital reality. Whether it's a website, web application, or any digital project, let's discuss your goals and craft a solution that meets your needs.
          </p>
          
          {/* Download CV button */}
          <a href={cv} download className="btn primary">
            Download CV <IoMdDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

// Exporting the About component
export default About;
