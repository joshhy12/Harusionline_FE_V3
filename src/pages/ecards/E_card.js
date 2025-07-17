import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import ECardService from '../../api/api_Ecard';
import '../styles/e-card.css';
import SpinnerLoader from '../../components/Buttons/SpinnerLoader';

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
          <Col xs={12} md={8} className="mb-3 mb-md-0">
            <div className="filter-buttons-container d-flex flex-wrap justify-content-center justify-content-md-start align-items-center">
              <Button
                variant="outline-primary"
                onClick={() => this.handleFilterChange('all')}
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                size="sm"
              >
                All
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => this.handleFilterChange('Invitation')}
                className={`filter-btn ${filter === 'Invitation' ? 'active' : ''}`}
                size="sm"
              >
                Invitation
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => this.handleFilterChange('Contribution')}
                className={`filter-btn ${filter === 'Contribution' ? 'active' : ''}`}
                size="sm"
              >
                Contribution
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => this.handleFilterChange('Wedding')}
                className={`filter-btn ${filter === 'Wedding' ? 'active' : ''}`}
                size="sm"
              >
                Wedding
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => this.handleFilterChange('sendoff')}
                className={`filter-btn ${filter === 'sendoff' ? 'active' : ''}`}
                size="sm"
              >
                SendOff
              </Button>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Form className="search-form">
              <div className="search-input-container">
                <Form.Control
                  type="text"
                  placeholder="Search by Name, Color or Event type"
                  value={searchTerm}
                  onChange={this.handleSearchChange}
                  className="search-input"
                  size="sm"
                />
                <Link to="/gharama" className="gharama-link">
                  <Button variant="outline-primary" className="gharama-btn" size="sm">
                    Gharama
                  </Button>
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
        {loading ? (
          <SpinnerLoader />
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
