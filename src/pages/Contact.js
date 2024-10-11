import React from 'react';
import { Container } from 'react-bootstrap';
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
    <h4>Je, mfumo wa kupanga harusi mtandaoni ni nini?</h4>
    <p>
      Mfumo wa kupanga harusi mtandaoni ni chombo cha kidijitali kinachokusaidia kupanga na kusimamia kila kipengele cha harusi yako, kuanzia orodha ya wageni hadi kufuatilia bajeti.
    </p>
  </div>
  <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay="100">
    <h4>Unavyofanya kazi?</h4>
    <p>
      Ni rahisi, unda akaunti, ingiza maelezo ya harusi yako, na anza kutumia vipengele mbalimbali kupanga siku yako maalum.
    </p>
  </div>
  <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay="100">
    <h4>Je, ni rahisi kutumia?</h4>
    <p>
      Ndiyo, mfumo wetu umetengenezwa kuwa wa urahisi kutumia hata kwa wale ambao si wajuzi wa teknolojia.
    </p>
  </div>
  <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay="100">
    <h4>Je, naweza kutengeneza mwaliko wa kidijitali?</h4>
    <p>
      Bila shaka! Mfumo wetu unakuwezesha kubuni na kutuma mialiko ya kidijitali nzuri kwa wageni wako.
    </p>
  </div>
  <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay="100">
    <h4>Je, kipengele cha orodha ya wageni kinafanyaje kazi?</h4>
    <p>
      Unaweza kuongeza wageni kwa urahisi, kufuatilia majibu ya mialiko (RSVPs), na kupanga mipangilio ya viti.
    </p>
  </div>
  <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay="100">
    <h4>Je, kuna kipengele cha kupata watoa huduma?</h4>
    <p>
      Tunatoa orodha ya watoa huduma wa harusi waliothibitishwa ili kukusaidia kupata wataalamu bora kwa siku yako.
    </p>
  </div>
  {/* Ongeza maswali ya ziada ya FAQ hapa */}
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
      <br></br>
      <br></br>
      </Container>
    </>
  );
};

export default Contact;