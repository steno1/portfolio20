import "./about.css";
import Card from "../../components/card/Card";
import { IoMdDownload } from "react-icons/io";
import aboutData from "../../data/aboutData";
import cv from "../../asset/RESUME.pdf";
import myPics from "../../asset/Too.png";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={myPics} alt="My Portrait" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
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
          <p>
            I'm Onu Princeley Toochukwu, a full-stack web developer. I bring my skills and passion to create digital solutions that resonate with clients and users alike.
          </p>
          <p>
            Let's collaborate and transform your ideas into a digital reality. Whether it's a website, web application, or any digital project, let's discuss your goals and craft a solution that meets your needs.
          </p>
          <a href={cv} download className="btn primary">
            Download CV <IoMdDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
