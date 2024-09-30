import React from 'react';
import image1 from '../images/1.jpg'; // Assuming you have an image named 1.jpg
import image2 from '../images/2.jpg';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container className="my-5">
      {/* Carousel Section */}
      <Row className="justify-content-center mb-5">
        <Col xs={12}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image2}
                alt="First slide"
                style={{ objectFit: 'cover', height: '80vh' }}
              />
              <Carousel.Caption>
                <h1 className="display-4 mb-4">HARUSI ONLINE</h1>
                <p className="lead mb-5">Panga & Ratibu Shughuli yako, BURE!.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
                style={{ objectFit: 'cover', height: '80vh' }}
              />
              <Carousel.Caption>
                <h1 className="display-4 mb-4">TUMA KADI ZA KIDIGITALI </h1>
                <p className="lead mb-5">kupitia huduma kama kutuma taarifa, kupanga bajeti, kupokea na kurekodi taarifa za fedha, kukukutanisha na watoa huduma na huduma nyingine nyingi..</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image2}
                alt="Third slide"
                style={{ objectFit: 'cover', height: '80vh' }}
              />
              <Carousel.Caption>
                <h1 className="display-4 mb-4">KUMBUSHIA MICHANGO</h1>
                <p className="lead mb-5">Harusi online ni mfumo unaorahisisha kupangilia & kuratibu shughuli yako bure.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>





      {/* Features Section */}
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Jisajili</Card.Title>
              <Card.Text>
              Anza kwa kujisajili BURE! Mratibu wa shughuli au mtoa huduma.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Weka Taarifa Zako</Card.Title>
              <Card.Text>
              Pakia orodha ya wadau wako, weka taarifa za shughuli yako.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Kuwa Online</Card.Title>
              <Card.Text>
              Pata tovuti maalum kwaajili ya biashara/shughuli yako baada ya uhakiki.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Events Section */}
      <Row>
        <Col md={12}>
          <h2 className="text-center mb-4">Events Za Leo</h2>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                {/* Repeat the card structure */}
                {[...Array(4)].map((_, idx) => (
                  <div className="col" key={idx}>
                    <div className="card shadow-sm">
                      <a href="#!" aria-label="Event image">
                        <img src={image1} alt="Album content" className="bd-placeholder-img card-img-top" width="100%" height="225" />
                      </a>
                      <div className="card-body">
                        <h5 className="card-title">Image Title</h5>
                        <p className="card-text">This is a detailed description of the image.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          </div>
                          <small className="text-muted">2024</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Watoa Huduma Section */}
      <Row>
        <Col md={12}>
          <h2 className="text-center mb-4">Watoa Huduma</h2>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                {/* Repeat the card structure */}
                {[...Array(4)].map((_, idx) => (
                  <div className="col" key={idx}>
                    <div className="card shadow-sm">
                      <img src={image1} alt="Album content" className="bd-placeholder-img card-img-top" width="100%" height="225" />
                      <div className="card-body">
                        <h5 className="card-title">Image Title</h5>
                        <p className="card-text">This is a detailed description of the image.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
