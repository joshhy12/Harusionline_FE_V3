import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import E_card from './pages/E_card';
import CardDetails from './pages/CardDetails';
import Gharama from './pages/Gharama';
import TermsAndConditions from './pages/TermsAndConditions';
import WatoaHuduma from './pages/WatoaHuduma';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import WatoaHudumaDetails from './pages/WatoaHudumaDetails';
import LoginSignup from './pages/LoginSignup';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
       
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/e_card" element={<E_card/>} />
            <Route path="/card-details/:id" element={<CardDetails />} />
            <Route path="/gharama" element={<Gharama />} />
            <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
            <Route path="/WatoaHuduma" element={<WatoaHuduma />} />
            <Route path="/watoa-huduma-details/:id" element={<WatoaHudumaDetails />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/event/:id" element={<EventDetails />} />


            <Route path="/login" element={<LoginSignup />} />

          
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}
export default App;
