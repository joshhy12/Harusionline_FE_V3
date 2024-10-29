import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import ECardService from '../../api/api_Ecard';
import { FaPaperPlane, FaGift, FaEnvelopeOpenText, FaWhatsapp } from 'react-icons/fa';
import './admin_ecards.css';

const AdminEcards = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEcards = async () => {
      const data = await ECardService.fetchECards();
      setItems(data);
      setLoading(false);
    };
    fetchEcards();
  }, []);

  const filteredItems = items.filter(item => {
    const matchesCategory = filter === 'all' || item.card_category === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2
  };

  return (
    <Container>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center" style={{ color: '#24366b' }}> Ecards Panel  </h2>

          <p className="text-muted">
          </p>

          <div className="dashboard row mt-4">


            <div className="dashboard col text-center">
              <Link to="" className="text-decoration-none">
                <div className="dashboard bg-dash p-4 rounded-lg">
                  <div className="dashText">
                    <FaEnvelopeOpenText className="mb-2" size={24} />
                    <div>Buy Ecards</div>
                  </div>
                </div>
              </Link>
            </div>



            <div className="dashboard col text-center">
              <Link to="/admin/GeneratedWhatsAppCard" className="text-decoration-none">
                <div className="dashboard bg-dash p-4 rounded-lg">
                  <div className="dashText">
                    <FaPaperPlane className="mb-2" size={24} />
                    <div>Genereted WhatApp Card</div>
                  </div>
                </div>
              </Link>
            </div>



            <div className="dashboard col text-center">
              <Link to="/admin/whatsapp-card" className="text-decoration-none">
                <div className="dashboard bg-dash p-4 rounded-lg">
                  <div className="dashText">
                    <FaWhatsapp className="mb-2" size={24} />
                    <div>WhatApp Message</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="dashboard col text-center">
              <Link to="#" className="text-decoration-none">
                <div className="dashboard bg-dash p-4 rounded-lg">
                  <div className="dashText">
                    <FaGift className="mb-2" size={24} />
                    <div>Discount </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div><br></br>


      <Row className="mb-4">
        <Col xs={12} md={8} className="d-flex flex-wrap gap-2 mb-3 mb-md-0">
          <Button
            onClick={() => setFilter('all')}
            variant="outline-primary"
            className={`rounded-pill ${filter === 'all' ? 'active' : ''}`}
          >
            All
          </Button>
          <Button
            onClick={() => setFilter('Invitation')}
            variant="outline-primary"
            className={`rounded-pill ${filter === 'Invitation' ? 'active' : ''}`}
          >
            Invitation
          </Button>
          <Button
            onClick={() => setFilter('Contribution')}
            variant="outline-primary"
            className={`rounded-pill ${filter === 'Contribution' ? 'active' : ''}`}
          >
            Contribution
          </Button>
          <Button
            onClick={() => setFilter('Wedding')}
            variant="outline-primary"
            className={`rounded-pill ${filter === 'Wedding' ? 'active' : ''}`}
          >
            Wedding
          </Button>
          <Button
            onClick={() => setFilter('sendoff')}
            variant="outline-primary"
            className={`rounded-pill ${filter === 'sendoff' ? 'active' : ''}`}
          >
            Send-off
          </Button>
        </Col>
        <Col xs={12} md={4}>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search by name & Color "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-pill"
            />
          </Form>
        </Col>
      </Row>


      {loading ? (
        <h2 className="text-center">Loading cards...</h2>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {filteredItems.map(item => (
            <div key={item.id} className="card-wrapper">
              <Link
                to={`/admin/ecards/${item.id}`}
                state={{ card: item }}
              >
                <img src={item.wallpaper} alt={item.name} className="card-img" />
              </Link>

            </div>
          ))}
        </Masonry>
      )}
    </Container>
  );
};

export default AdminEcards;