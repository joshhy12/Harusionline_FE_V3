import React, { useState, useEffect } from 'react';
import { Dropdown, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaCog, FaSignOutAlt, FaBars, FaUserCircle, FaWhatsapp } from 'react-icons/fa';
import './style/TopNav.css';

const TopNav = ({ toggleSidebar }) => {
  const notificationCount = 7; // You can make this dynamic based on your needs
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);

  // Simulating fetching events from an API
  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const fetchEvents = async () => {
      // Simulating API call delay
      setTimeout(() => {
        const eventData = [
          { id: 1, name: "Fortunatus & Dorah", date: "2023-12-15" },
          { id: 2, name: "JoshuaLucas Weds AnnahLucas", date: "2023-11-20" },
          { id: 3, name: "Michael & Anna", date: "2024-01-05" },
          { id: 4, name: "Harusi ya Enock Mtonyole Weds Sarafina Chaula", date: "2024-02-10" }
        ];
        setEvents(eventData);
        
        // Get selected event from localStorage or set the first one as default
        const savedEventId = localStorage.getItem('selectedEventId');
        if (savedEventId) {
          const savedEvent = eventData.find(event => event.id === parseInt(savedEventId));
          if (savedEvent) {
            setSelectedEvent(savedEvent);
          } else {
            setSelectedEvent(eventData[0]);
            localStorage.setItem('selectedEventId', eventData[0].id.toString());
          }
        } else {
          setSelectedEvent(eventData[0]);
          localStorage.setItem('selectedEventId', eventData[0].id.toString());
        }
      }, 500);
    };

    fetchEvents();
  }, []);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    localStorage.setItem('selectedEventId', event.id.toString());
    
    // You might want to trigger other actions when event changes
    // For example, fetch data specific to this event
    console.log(`Switched to event: ${event.name}`);
  };

  return (
    <nav className="top-nav">
      <div className="left-section">
  <button onClick={toggleSidebar} className="toggle-btn">
    <FaBars />
  </button>
  
  {selectedEvent && (
    <Dropdown className="mt-2 w-100">
      <Dropdown.Toggle
        variant="transparent"
        id="dropdown-basic"
        className="w-100 d-flex align-items-center text-truncate"
        style={{ color: '#4a85ff', maxWidth: '200px' }}
      >
        <div className="flex-shrink-0 me-2">
          <FaUserCircle style={{ fontSize: '20px', minWidth: '20px' }} />
        </div>
        <span className="text-truncate">{selectedEvent.name}</span>
      </Dropdown.Toggle>
      
      <Dropdown.Menu className="w-100">
        {events.map(event => (
          <Dropdown.Item
            key={event.id}
            className="text-truncate"
            active={selectedEvent.id === event.id}
            onClick={() => handleEventSelect(event)}
          >
            {event.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )}
</div>

      <div className="d-flex align-items-center">
        <Link to="/admin/whatsapp-card" className="text-decoration-none">
          <div className="position-relative me-3">
            <FaWhatsapp style={{ fontSize: '27px', color: '#25D366' }} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {notificationCount}
            </span>
          </div>
        </Link>


        <Dropdown align="end" className="admin-dropdown">
  <Dropdown.Toggle 
    variant="primary" 
    id="dropdown-basic" 
    className="admin-toggle"
    style={{ backgroundColor: '#4169e1', borderColor: '#ffff' }}
  >
    <i className="bi bi-person-circle" style={{ fontSize: '24px', color: '#4169e1' }}></i>
  </Dropdown.Toggle>

  <Dropdown.Menu className="admin-menu">
    <Dropdown.Item href="/admin/Account_setting">
      <FaUser className="menu-icon" /> Profile
    </Dropdown.Item>

    <Dropdown.Item href="/admin/settings">
      <FaCog className="menu-icon" /> Settings
    </Dropdown.Item>
    <Dropdown.Divider />

    <Dropdown.Item
      onClick={() => setShowLogoutModal(true)}
      style={{ padding: '8px 15px', color: '#dc3545' }}
      className="logout-item"
    >
      <FaSignOutAlt className="menu-icon" /> Logout
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


        <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Logout</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to logout from the system?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                setShowLogoutModal(false);
                window.location.href = '/Home';
              }}
            >
              Logout
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    </nav>
  );
};

export default TopNav;
