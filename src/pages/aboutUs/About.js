import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AboutModel } from '../../models/AboutModel';
import '../styles/About.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const About = () => {
  const { headerContent, sections } = AboutModel;

  const getImageSrc = (imageName) => {
    try {
      return require(`../images/Test_images/${imageName}`);
    } catch (error) {
      console.warn(`Image not found: ${imageName}`);
      return 'https://via.placeholder.com/300x200?text=Image+Not+Found'; // Placeholder image
    }
  };

  return (
    <Container className="my-5">
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center text-center mb-4 mb-md-5">
            <div className="col-xl-9 col-xxl-8">
              <span className="text-muted">About Us</span>
              <h2 className="display-5 fw-bold">{headerContent.title}</h2>
              <p className="lead">{headerContent.description}</p>
            </div>
          </div>

          <div className="row gy-4">
            {sections.map(section => (
              <div key={section.id} className="col-md-4">
                <div className="shadow p-4">
                  <img 
                    src={getImageSrc(section.image)} 
                    alt={section.title} 
                    className="img-fluid rounded mb-4" 
                  />
                  <h2 className="fw-semibold text-primary mt-1">
                    <Link to={section.link} className="text-primary text-decoration-none">
                      {section.title}
                    </Link>
                  </h2>
                  <p className="mt-3">{section.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center justify-content-md-start mt-4">
            <Link to="/login">
              <Button
                variant="outline-primary"
                className="px-4 py-2 rounded-pill fw-bold custom-button"
                style={{
                  color: '#24366b',
                  borderColor: '#24366b',
                  transition: 'all 0.3s ease'
                }}
              >
                Jisajili sasa
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
