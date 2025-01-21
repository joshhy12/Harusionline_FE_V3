import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InternetModal from './models/InternetModal';
import styles from './styles/Header.module.css';
//import MainLayout from './layouts/MainLayout';

// Frontend Components
import './App.css';  // Your frontend CSS
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/aboutUs/About.js';
import Contact from './pages/aboutUs/Contact.js';
import E_card from './pages/ecards/E_card.js';
import CardDetails from './pages/ecards/CardDetails.js';
import Gharama from './pages/aboutUs/Gharama.js';
import TermsAndConditions from './pages/aboutUs/TermsAndConditions.js';
import WatoaHuduma from './pages/WatoaHuduma/WatoaHuduma.js';
import Events from './pages/Events/Events.js';
import EventDetails from './pages/Events/EventDetails.js';
import WatoaHudumaDetails from './pages/WatoaHuduma/WatoaHudumaDetails.js';
import LoginSignup from './pages/LoginSignup/LoginSignup.js';
import EventWebsite from './pages/Events/EventWebsite.js';

import MaintenancePage from './components/errors/MaintenancePage';
import Error404 from './components/errors/Error404';

function UserApp() {
  return (
    <Routes>
     {/* Router for the main WEBSITE */}
     <Route path="*" element={
            <div className="App">
              <Header />
              <main className={styles.mainContent}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/e_card" element={<E_card />} />
                  <Route path="/card-details/:id" element={<CardDetails />} />
                  <Route path="/gharama" element={<Gharama />} />
                  <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
                  <Route path="/WatoaHuduma" element={<WatoaHuduma />} />
                  <Route path="/watoa-huduma-details/:id" element={<WatoaHudumaDetails />} />
                  <Route path="/Events" element={<Events />} />
                  <Route path="/event/:id" element={<EventDetails />} />
                  <Route path="/login" element={<LoginSignup />} />

                  {/* 404 route should always be last */}
                  <Route path="*" element={<Error404 />} />
                  <Route path="/maintenance" element={<MaintenancePage />} />

                </Routes>
              </main>
              <Footer />
            </div>
          } />
    </Routes>
  );
}

export default UserApp;
