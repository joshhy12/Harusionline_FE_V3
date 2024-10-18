import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUserPlus, FaHandshake, FaEnvelopeOpenText } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fetchEvents } from '../api/api_events';
import { getWatoaHuduma } from '../api/api_WatoaHuduma';
import '../styles/Home.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import homepanelImage from '../images/homepanel.svg';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [watoaHuduma, setWatoaHuduma] = useState([]);
  const eventsScrollContainerRef = useRef(null);
  const watoaHudumaScrollContainerRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      const eventData = await fetchEvents();
      const watoaHudumaData = await getWatoaHuduma();
      if (eventData) setEvents(eventData);
      if (watoaHudumaData) setWatoaHuduma(watoaHudumaData);
    };
    loadData();
  }, []);

  const scroll = (direction, ref) => {
    const container = ref.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Container className="my-5">
      {/* Home panel Section */}
      <Row className="align-items-start">
        <Col xs={12} md={6} className="text-center text-md-start mt-5">
          <h1 className="main-title">Panga & Ratibu Shughuli yako, BURE!</h1>
          <p className="description">
            Harusi online ni mfumo unaorahisisha kupangilia & kuratibu shughuli yako bure kupitia huduma kama kutuma taarifa, kupanga bajeti, kupokea na kurekodi taarifa za fedha, kukutanisha na watoa huduma, mialiko ya kidijitali na huduma nyingine nyingi.. Vilevile tunawakutanisha wanakamati wa shughuli na watoa huduma kama ukumbi, chakula nk.
          </p>
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
        </Col>
        <Col xs={12} md={6} className="text-center position-relative">
          <img src={homepanelImage} alt="Bride and Groom" className="bride-image w-100" />
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
      <Row className="my-5 g-4">
        {[
          { icon: FaUserPlus, title: "Jisajili", text: "Anza kwa kujisajili BURE! Mratibu wa shughuli au mtoa huduma.", link: "/login" },
          { icon: FaHandshake, title: "Watoa Huduma ", text: "Tizama Watoa Huduma Wetu,ili kuweza Kujipatia Mziki,Mapambo,Usafiri,Chakula.", link: "/WatoaHuduma" },
          { icon: FaEnvelopeOpenText, title: "Kadi za Kidigitali", text: "Tuma mialiko ya harusi yako kwa njia ya kidigitali, na uhifadhi pesa na karatasi.", link: "/e_card" }
        ].map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="d-flex">
            <Card className="mb-4 shadow-sm hover-card w-100">
              <Card.Body className="d-flex flex-column">
                <div className="text-center mb-3">
                  <item.icon size={40} color="#4a85ff" />
                </div>
                <Card.Title className="text-center fs-5">{item.title}</Card.Title>
                <Card.Text className="text-center flex-grow-1 small">{item.text}</Card.Text>
                <Button
                  as={Link}
                  to={item.link}
                  variant="outline-primary"
                  size="sm"
                  className="mt-3 rounded-pill mx-auto d-block"
                  style={{ width: 'fit-content' }}
                >
                  Click Here
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 className="text-center">Services</h2>
          </div>
          <div className="row">
            {[
              { icon: "bi-envelope-paper-heart", title: "Kadi za Kidigitali", description: "Badala ya kuchapa kadi za mwaliko, unaweza kutengeneza kadi nzuri za kidigitali kwa kutumia simu yako. Kadi hizi zinaweza kutumwa kwa urahisi kwa njia ya Whatsapp na SMS na kisha kutumwa kwa wageni wako kwa kubofya tu." },
              { icon: "bi-gift", title: "Kukumbushia Michango", description: "Fuatilia kwa urahisi michango ya wageni wako. Mfumo wetu utakutumia taarifa za kila mchango na kukukumbusha kuwashukuru wageni. Ukiwa na kipengele hiki, utapanga bajeti yako kwa urahisi." },
              { icon: "bi-envelope", title: "Mialiko ya SMS na Email", description: "Fikia wageni wako wote kwa haraka na urahisi kwa kutuma mialiko ya harusi yako kupitia SMS na email. Unaweza kuambatisha kadi yako ya kidigitali moja kwa moja kwenye ujumbe." },
              { icon: "bi-people", title: "Kamati", description: "Unda kamati ya harusi na uwape kila mmoja majukumu mahususi. Mfumo wetu utakusaidia kusimamia kazi zote za kamati na kuhakikisha kuwa kila kitu kinakwenda vizuri." },
              { icon: "bi-cash-coin", title: "Ripoti za Fedha", description: "Pata muhtasari kamili wa fedha zako zote za harusi. Ripoti zetu zitakusaidia kufuatilia gharama zako na kuhakikisha kuwa unabakia kwenye bajeti." },
              { icon: "bi-globe", title: "Tovuti ya Bure", description: "Tunakupa tovuti yako ya harusi bila malipo ili uweze kushiriki maelezo yote muhimu kuhusu harusi yako na wageni wako. Tovuti hii itakuwa na muonekano mzuri na itakuwa rahisi kutumia kwenye simu." }
            ].map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="icon"><i className={`bi ${service.icon}`}></i></div>
                <h4 className="title">{service.title}</h4>
                <p className="description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <Row>
        <Col md={12}>
          <div className="events-container position-relative">
            <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="section-header-left">Events Za Leo</h2>
              <Button as={Link} to="/events" variant="outline-primary" className="see-all-button rounded-pill">
                All Events
              </Button>
            </div>
            <button className="btn btn-primary scroll-btn left" onClick={() => scroll('left', eventsScrollContainerRef)}>&lt;</button>
            <div className="events-scroll" ref={eventsScrollContainerRef}>
              {events.map((event) => (
                <div className="event-card" key={event.id}>
                  <div className="card shadow-sm">
                    <a href="#!" aria-label={event.event_title}>
                      <img src={event.wallpaper[0]?.md_photo} alt={event.event_title} className="bd-placeholder-img card-img-top" width="100%" height="225" />
                    </a>
                    <div className="card-body">
                      <h5 className="card-title">{event.event_title}</h5>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-primary">View</button>
                        </div>
                        <small className="text-muted">{new Date(event.event_date).toLocaleDateString()}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary scroll-btn right" onClick={() => scroll('right', eventsScrollContainerRef)}>&gt;</button>
          </div>
        </Col>
      </Row>

      {/* Watoa Huduma Section */}
      <Row>
        <Col md={12}>
          <div className="events-container position-relative">
            <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="section-header-left">Watoa Huduma</h2>
              <Button as={Link} to="/WatoaHuduma" variant="outline-primary" className="see-all-button rounded-pill">
                Watoa Huduma Wote
              </Button>
            </div>
            <button className="btn btn-primary scroll-btn left" onClick={() => scroll('left', watoaHudumaScrollContainerRef)}>&lt;</button>
            <div className="events-scroll" ref={watoaHudumaScrollContainerRef}>
              {watoaHuduma.map((provider) => (
                <div className="event-card" key={provider.id}>
                  <div className="card shadow-sm">
                    <a href="#!" aria-label={provider.name}>
                      <img src={provider.wallpaper?.md_photo} alt={provider.name} className="bd-placeholder-img card-img-top" width="100%" height="225" />
                    </a>
                    <div className="card-body">
                      <h5 className="card-title">{provider.name}</h5>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-primary">View</button>
                        </div>
                        <small className="text-muted">{provider.location}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary scroll-btn right" onClick={() => scroll('right', watoaHudumaScrollContainerRef)}>&gt;</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;