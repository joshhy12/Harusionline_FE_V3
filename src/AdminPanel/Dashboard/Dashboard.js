import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { FaPaperPlane,  FaEnvelope, FaEnvelopeOpenText, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [showIntroModal, setShowIntroModal] = useState(true);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const introSlides = [
    {
      title: "Welcome to Your Wedding Dashboard",
      description: "Your central hub for managing all aspects of your wedding planning",
      icon: "🎉"
    },
    {
      title: "Track Your Budget",
      description: "Monitor all financial aspects including pledges and contributions",
      icon: "💰"
    },
    {
      title: "Manage Guest List",
      description: "Send invitations and track RSVPs effortlessly",
      icon: "👥"
    },
    {
      title: "Send Updates",
      description: "Keep your guests informed with automated notifications",
      icon: "✉️"
    }
  ];

  const today = new Date();

  return (
    <>
     <Modal 
  show={showIntroModal} 
  onHide={() => setShowIntroModal(false)}
  centered
  size="md"
  className="intro-modal"
>

        <Modal.Header closeButton>
          <Modal.Title>Quick Tour</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={3000}
            indicators={true}
            controls={true}
          >
            {introSlides.map((slide, idx) => (
             <Carousel.Item key={idx}>
             <div className="slide-content">
               <div className="slide-icon">
                 {slide.icon}
               </div>
               <h3 className="slide-title">{slide.title}</h3>
               <p className="slide-description">{slide.description}</p>
             </div>
           </Carousel.Item>
           
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowIntroModal(false)}>
            Get Started
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="dashboard container mt-4">
        {/* Heading section */}
        <h2 className="dashboard-heading">Dashboard</h2>

        {/* Top section */}
        <div className="dashboard row bg-dash p-4 rounded-lg">
          <div className="dashboard col text-center">
            <div className="text-dark">Ahadi</div>
            <div className="dashText" style={{ fontSize: '1.5rem' }}>TZS 201,000</div>
            <div className="text-dark mt-2"><u>Walioahidi</u></div>
            <div className="dashText font-weight-bold" style={{ fontSize: '1.5rem' }}>3</div>
          </div>

          <div className="dashboard col text-center">
            <div className="text-dark">Michango</div>
            <div className="dashText" style={{ fontSize: '1.5rem' }}>TZS 0.00</div>
            <div className="text-dark mt-2"><u>Waliotoa</u></div>
            <div className="dashText font-weight-bold" style={{ fontSize: '1.5rem' }}>0</div>
          </div>

          <div className="dashboard col text-center">
            <div className="text-dark">Bajeti</div>
            <div className="dashText" style={{ fontSize: '1.5rem' }}>TZS 0.00</div>
            <br />
            <div className="dashText mt-2">Pledges PDF</div>
          </div>

          <div className="dashboard col text-center">
            <div className="text-dark">Matumizi</div>
            <div className="dashText" style={{ fontSize: '1.5rem' }}>TZS 0.00</div>
            <br />
            <div className="dashText mt-2">Pledges Excel</div>
          </div>
        </div>

        <div className="dashboard row mt-4">
          <div className="dashboard col text-center">
            <Link to="" className="text-decoration-none">
              <div className="dashboard bg-dash p-4 rounded-lg">
                <div className="dashText">
                  <FaPaperPlane className="mb-2" size={24} />
                  <div>Kumbushia Michango</div>
                </div>
              </div>
            </Link>
          </div>

          <div className="dashboard col text-center">
            <Link to="/admin/ecards" className="text-decoration-none">
              <div className="dashboard bg-dash p-4 rounded-lg">
                <div className="dashText">
                  <FaEnvelopeOpenText className="mb-2" size={24} />
                  <div>E-cards</div>
                </div>
              </div>
            </Link>
          </div>

          <div className="dashboard col text-center">
            <Link to="/admin/wageni" className="text-decoration-none">
              <div className="dashboard bg-dash p-4 rounded-lg">
                <div className="dashText">
                  <FaPaperPlane className="mb-2" size={24} />
                  <div>Tuma Taarifa</div>
                </div>
              </div>
            </Link>
          </div>

          <div className="dashboard col text-center">
            <Link to="" className="text-decoration-none">
              <div className="dashboard bg-dash p-4 rounded-lg">
                <div className="dashText">
                  <FaEnvelope className="mb-2" size={24} />
                  <div>Tuma Mialiko</div>
                </div>
              </div>
            </Link>
          </div>

          <div className="dashboard col text-center">
            <Link to="" className="text-decoration-none">
              <div className="dashboard bg-dash p-4 rounded-lg">
                <div className="dashText">
                  <FaUsers className="mb-2" size={24} />
                  <div>Import Contacts</div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-md-8">
            <div className="bg-dash p-4 rounded-lg">
              <h1 className="dashboard-heading">Statistics</h1>
              <div style={{ height: '300px' }}>
                {/* Add your preferred chart library component here */}
                {/* Example using recharts:
                <BarChart width={600} height={300} data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart> */}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-dash p-4 rounded-lg">
              <h1 className="dashboard-heading">Calendar</h1>
              <div className="text-center p-4">
                <div className="calendar-today">
                  <div className="month">{today.toLocaleDateString('en-US', { month: 'long' })}</div>
                  <div className="day">{today.getDate()}</div>
                  <div className="year">{today.getFullYear()}</div>
                  <div className="weekday">{today.toLocaleDateString('en-US', { weekday: 'long' })}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;