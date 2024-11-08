import { Container, Button } from 'react-bootstrap';
import '../styles/About.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AboutModel } from '../../models/AboutModel';
import { AboutHeader } from '../../components/AboutHeader';
import { AboutSection } from '../../components/AboutSection';

const About = () => {
  const sections = AboutModel.sections;
  const headerContent = AboutModel.headerContent;

  const getImagePath = (imageName) => {
    return require(`../images/Test_images/${imageName}`);
  };

  return (
    <Container className="my-5">
      <section className="py-5">
        <div className="container">
          <AboutHeader content={headerContent} />
          
          <div className="row gy-4">
            {sections.map(section => (
              <AboutSection 
                key={section.id}
                title={section.title}
                description={section.description}
                link={section.link}
                image={getImagePath(section.image)}
              />
            ))}
          </div>

          <div className="d-flex justify-content-center justify-content-md-start mt-4">
            <button
              className="btn btn-outline-primary px-4 py-2 rounded-pill fw-bold custom-button"
              style={{
                color: '#24366b',
                borderColor: '#24366b',
                transition: 'all 0.3s ease'
              }}
              onClick={() => window.location.href = '/login'}
            >
              Jisajili sasa
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;