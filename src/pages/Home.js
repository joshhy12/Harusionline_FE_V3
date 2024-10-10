import React from 'react';
import { useRef } from 'react';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import logo from '../images/logo.png';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/Home.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Home() {

  const events = [
    {
      id: 1,
      title: "Wedding of Lillian and John",
      description: "A beautiful garden wedding ceremony",
      image: image1,
      year: "2023"
    },
    {
      id: 2,
      title: "Emily's 30th Birthday Bash",
      description: "Celebrating three decades of awesomeness",
      image: image2,
      year: "2023"
    },
    {
      id: 3,
      title: "Annual Charity Gala",
      description: "Raising funds for children's education",
      image: image1,
      year: "2023"
    },
    {
      id: 4,
      title: "Tech Conference 2023",
      description: "Exploring the latest in AI and machine learning",
      image: image2,
      year: "2023"
    },
    {
      id: 5,
      title: "Summer Music Festival",
      description: "Three days of non-stop music and fun",
      image: image1,
      year: "2023"
    },
    {
      id: 6,
      title: "Corporate Team Building Retreat",
      description: "Strengthening bonds and boosting morale",
      image: image2,
      year: "2023"
    },
    {
      id: 7,
      title: "Art Exhibition Opening Night",
      description: "Showcasing local artists' latest works",
      image: image1,
      year: "2023"
    },
    {
      id: 8,
      title: "Food and Wine Tasting Event",
      description: "Indulge in gourmet delights and fine wines",
      image: image2,
      year: "2023"
    }
  ];


  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };




  return (
    <Container className="my-5">
      {/* Carousel Section */}




      <Row className="align-items-start">
        <Col xs={12} md={6} className="text-center text-md-start mt-5">

          <h1 className="main-title">Panga & Ratibu Shughuli yako, BURE!</h1>
          <p className="description">
            Harusi online ni mfumo unaorahisisha kupangilia & kuratibu shughuli yako bure kupitia huduma kama kutuma taarifa, kupanga bajeti, kupokea na kurekodi taarifa za fedha, kukutanisha na watoa huduma, mialiko ya kidijitali na huduma nyingine nyingi.. Vilevile tunawakutanisha wanakamati wa shughuli na watoa huduma kama ukumbi, chakula nk.
          </p>
          <div className="d-flex justify-content-center justify-content-md-start mt-4">
            <Button variant="primary" className="me-3">Sajili Shughuli</Button>
            <Button variant="outline-primary">Watoa Huduma</Button>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center position-relative">
          <img src={require('../images/homie1.png')} alt="Bride and Groom" className="bride-image w-100" />
          <div className="position-absolute top-0 start-0 p-3">
            <a href="https://apps.apple.com/us/app/harusi-online/id1629222934" target="_blank" rel="noopener noreferrer">
              <img src={require('../images/apple.png')} alt="Get it on the App Store" className="store-badge" style={{ width: '150px', height: 'auto' }} />
            </a>
          </div>
          <div className="position-absolute bottom-0 end-0 p-3">
            <a href="https://play.google.com/store/apps/details?id=harusi.online.mobile&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
              <img src={require('../images/android.png')} alt="Get it on Google Play" className="store-badge" style={{ width: '150px', height: 'auto' }} />
            </a>
          </div>
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
              <Button variant="outline-primary">Learn More</Button>
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
              <Button variant="outline-primary">Learn More</Button>
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
              <Button variant="outline-primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 className="text-center">Services</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon"><i className="bi bi-envelope-paper-heart"></i></div>
              <h4 className="title">Kadi za Kidigitali</h4>
              <p className="description"> Badala ya kuchapa kadi za mwaliko, tumia mfumo wetu kuunda kadi za kidigitali nzuri na zenye mvuto. Kadi hizi zinaweza kubinafsishwa kwa urahisi na kushirikiwa kwa njia ya kiungo au kupitia mitandao ya kijamii. </p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bi bi-gift"></i></div>
              <h4 className="title">Kukumbushia Michango</h4>
              <p className="description"> Fuatilia kwa urahisi michango ya wageni wako. Mfumo wetu utakutumia taarifa za kila mchango na kukukumbusha kuwashukuru wageni. Ukiwa na kipengele hiki, utapanga bajeti yako kwa urahisi.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="bi bi-envelope"></i></div>
              <h4 className="title">Mialiko ya SMS na Email</h4>
              <p className="description">Fikia wageni wako wote kwa haraka na urahisi kwa kutuma mialiko ya harusi yako kupitia SMS na email. Unaweza kuambatisha kadi yako ya kidigitali moja kwa moja kwenye ujumbe.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="bi bi-people"></i></div>
              <h4 className="title">Kamati</h4>
              <p className="description"> Unda kamati ya harusi na uwape kila mmoja majukumu mahususi. Mfumo wetu utakusaidia kusimamia kazi zote za kamati na kuhakikisha kuwa kila kitu kinakwenda vizuri.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i className="bi bi-cash-coin"></i></div>
              <h4 className="title">Ripoti za Fedha</h4>
              <p className="description">Pata muhtasari kamili wa fedha zako zote za harusi. Ripoti zetu zitakusaidia kufuatilia gharama zako na kuhakikisha kuwa unabakia kwenye bajeti.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
              <div className="icon"><i className="bi bi-globe"></i></div>
              <h4 className="title">Tovuti ya Bure</h4>
              <p className="description">Tunakupa tovuti yako ya harusi bila malipo ili uweze kushiriki maelezo yote muhimu kuhusu harusi yako na wageni wako. Tovuti hii itakuwa na muonekano mzuri na itakuwa rahisi kutumia kwenye simu.</p>
            </div>
          </div>
        </div>
      </section>




      {/* Events Section */}
      <Row>
        <Col md={12}>
          <h2 className="text-center mb-4">Events Za Leo</h2>
          <div className="events-container position-relative">
            <button className="btn btn-primary scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
            <div className="events-scroll" ref={scrollContainerRef}>
              {events.map((event) => (
                <div className="event-card" key={event.id}>
                  <div className="card shadow-sm">
                    <a href="#!" aria-label={event.title}>
                      <img src={event.image} alt={event.title} className="bd-placeholder-img card-img-top" width="100%" height="225" />
                    </a>
                    <div className="card-body">
                      <h5 className="card-title">{event.title}</h5>
                      {/* <p className="card-text">{event.description}</p> */}
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-primary">View</button>
                        </div>
                        <small className="text-muted">{event.year}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
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
                            <button type="button" className="btn btn-sm btn-outline-primary">View</button>
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