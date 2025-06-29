import "./services.css";

import Card from "../../components/card/Card"; 
import servicesData from "../../data/serviceData"; 


const Services = () => {
  return (
    <section id="services">
    
    
      <h2>My Services</h2>
      <p>I give you the best in all the services below</p>
      
      
      <div className="container services__container" data-aos="fade-up">
       
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


export default Services;
