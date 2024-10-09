import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/Contact.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted');
    // Reset form after submission
  };

  return (
    <>
    <Container className="contact-container">
      <br></br>
      <section id="faq" className="faq section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="row d-flex align-items-stretch">
            <div className="col-lg-6 faq-item" data-aos="fade-up">
              <h4>What is an online wedding planning system?</h4>
              <p>
              An online wedding planning system is a digital tool that helps you organize and manage every aspect of your wedding, from guest lists to budget tracking.
              </p>
            </div>
            <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay="100">
              <h4>How does it work</h4>
              <p>
              Simply create an account, input your wedding details, and start using the various features to plan your special day.
              </p>
            </div>
            <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay="100">
              <h4>Is it user-friendly?</h4>
              <p>
              Yes, our system is designed to be intuitive and easy to use, even for those who aren't tech-savvy.
              </p>
            </div>
            <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay="100">
              <h4>Can I create digital invitations?</h4>
              <p>
              Absolutely! Our system allows you to design and send beautiful digital invitations to your guests              </p>
            </div>
            <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay="100">
              <h4>How does the guest list feature work?</h4>
              <p>
              You can easily add guests, track RSVPs, and manage seating arrangements.              </p>
            </div>
            <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay="100">
              <h4>Is there a feature for finding vendors?</h4>
              <p>
              We offer a directory of trusted wedding vendors to help you find the perfect professionals for your day.              </p>
            </div>
            {/* Add more FAQ items here */}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact Us</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 d-flex" data-aos="fade-up">
              <div className="info-box">
                <i className="bi bi-geo-alt"></i>
                <h3>Our Address</h3>
                <p>New Safari Hotel BC, Arusha, Tanzania </p>
              </div>
            </div>
            <div className="col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="info-box">
                <i className="bi bi-envelope"></i>
                <h3>Email Us</h3>
                <p><a href="mailto:info@harusionline.com">info@harusionline.com</a><br /><a href="mailto:contact@harusionline.com">contact@harusionline.com</a></p>
              </div>
            </div>
            <div className="col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="info-box">
                <i className="bi bi-telephone"></i>
                <h3>Call Us</h3>
                <p><a href="tel:+255747636516">+255 747 636 516</a><br /><a href="tel:+255754987654">+255 754 987 654</a></p>
              </div>
            </div>
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row">
                  <div className="col-lg-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-lg-6 form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </Container>
    </>
  );
};

export default Contact;