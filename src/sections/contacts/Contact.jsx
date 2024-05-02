import "./contact.css"

import contactData from "../../data/contactData"

const Contact = () => {
  return (
   <section id="contact" >
  <h2>Get In Touch</h2>
  <p>Send me a message via any of the links below!</p>
  <div className="container contact__container" data-aos="fade-up">
  {
    contactData.map(contact=><a key={contact.id} href={contact.link}
    target="_blank" rel="noopener noreferrer" >{contact.icon}</a>)
  }
  </div>
  
   </section>
  )
}

export default Contact
