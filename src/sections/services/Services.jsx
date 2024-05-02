import "./services.css";

import Card from "../../components/card/Card"; // Component for rendering individual service cards
import servicesData from "../../data/serviceData"; // Data containing information for services

// Services component function
const Services = () => {
  return (
    <section id="services">
      {/* Title and Description */}
      <h2>My Services</h2>
      <p>I give you the best in all the services below</p>
      
      {/* Container for displaying services */}
      <div className="container services__container" data-aos="fade-up">
        {/* Mapping through service data to display service cards */}
        {servicesData.map(item => (
          <Card key={item.id} className='service light'>
            <div className="service__icon">
              {item.icon}
            </div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

// Exporting the Services component
export default Services;
