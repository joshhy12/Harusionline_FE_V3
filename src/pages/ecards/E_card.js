import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import ECardService from '../../api/api_Ecard';
import '../styles/e-card.css';

class E_card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filter: 'all',
      searchTerm: '',
      loading: true
    };
  }

  componentDidMount() {
    this.getECards();
  }

  getECards = async () => {
    const data = await ECardService.fetchECards();
    this.setState({ items: data, loading: false });
  };
  

  handleFilterChange = (category) => {
    this.setState({ filter: category });
  };

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { items, filter, searchTerm, loading } = this.state;

    const filteredItems = items.filter(item => {
      const matchesCategory = filter === 'all' || item.card_category === filter;
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.event_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.card_category.toLowerCase().includes(searchTerm.toLowerCase());
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
        <br />
        <h2 className="text-center mb-4 stylish-heading">Digital Card</h2>
        
        <Row className="mb-4">
          <Col md={8} className="d-flex align-items-center">
            <Button variant="outline-primary" onClick={() => this.handleFilterChange('all')} className={`m-1 rounded-pill ${filter === 'all' ? 'active' : ''}`}>All</Button>
            <Button variant="outline-primary" onClick={() => this.handleFilterChange('Invitation')} className={`m-1 rounded-pill ${filter === 'Invitation' ? 'active' : ''}`}>Invitation</Button>
            <Button variant="outline-primary" onClick={() => this.handleFilterChange('Contribution')} className={`m-1 rounded-pill ${filter === 'Contribution' ? 'active' : ''}`}>Contribution</Button>
            <Button variant="outline-primary" onClick={() => this.handleFilterChange('Wedding')} className={`m-1 rounded-pill ${filter === 'Wedding' ? 'active' : ''}`}>Wedding</Button>
            <Button variant="outline-primary" onClick={() => this.handleFilterChange('sendoff')} className={`m-1 rounded-pill ${filter === 'sendoff' ? 'active' : ''}`}>sendOff</Button>
          </Col>
          <Col md={4}>
            <Form className="d-flex justify-content-end">
              <Form.Control
                type="text"
                placeholder="Search by Name , Color or Event type"
                value={searchTerm}
                onChange={this.handleSearchChange}
                className="me-2"
              />
              <Button variant="outline-primary" className="rounded-pill">Search</Button>
            </Form>
          </Col>
        </Row>

        {loading ? (
          <h2 className="text-center">Loading cards...</h2>
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {filteredItems.map(item => (
              <div key={item.id} className="card-wrapper">
                <Link to={`/card-details/${item.id}`} state={{ card: item }}>
                  <img src={item.wallpaper} alt={item.name} className="card-img" />
                </Link>
              </div>
            ))}
          </Masonry>
        )}
      </Container>
    );
  }
}

export default E_card;
