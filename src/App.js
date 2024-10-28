import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Frontend Components
import './App.css';  // Your frontend CSS
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
import EventWebsite from './pages/EventWebsite';


// Admin Components
//mport AdminPanel from './AdminPanel/AdminPanel';
import Dashboard from './AdminPanel/Dashboard/Dashboard';
import Layout from './AdminPanel/layout/Layout';
import Kamati from './AdminPanel/kamati/Kamati';
import Wageni from './AdminPanel/wageni/Wageni';
import Payments from './AdminPanel/PaymentHistory/PaymentHistory.js';
import Waalikwa from './AdminPanel/waalikwa/Waalikwa';
import Groups from './AdminPanel/groups/Groups';
import Bajeti from './AdminPanel/bajeti/Bajeti';
import Michango from './AdminPanel/michango/Michango';
import Takwimu from './AdminPanel/takwimu/Takwimu';
import Picha from './AdminPanel/picha/Picha';
import Ecards from './AdminPanel/ecards/Ecards.js';
import WhatsappCard from './AdminPanel/WhatsappCard/WhatsappCard';
import PaymentHistory from './AdminPanel/PaymentHistory/PaymentHistory';
import SmsHistory from './AdminPanel/SmsHistory/SmsHistory';
import Settings from './AdminPanel/settings/Settings.js';
import SmsTopup from './AdminPanel/PaymentHistory/SmsTopup';




function App() {
  return (
    <Router>
      <Routes>
        {/* Router for the EVENT WEBSITE */}
        <Route path="/event-website/:slug" element={<EventWebsite />} />

      
      
        {/* Admin panel routes */}
          <Route path="/admin" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="kamati" element={<Kamati />} />
          <Route path="wageni" element={<Wageni />} />
          <Route path="payments" element={<Payments />} />
          <Route path="waalikwa" element={<Waalikwa />} />
          <Route path="groups" element={<Groups />} />
          <Route path="bajeti" element={<Bajeti />} />
          <Route path="michango" element={<Michango />} />
          <Route path="takwimu" element={<Takwimu />} />
          <Route path="picha" element={<Picha />} />
          <Route path="ecards" element={<Ecards />} />
          <Route path="whatsapp-card" element={<WhatsappCard />} />
          <Route path="payment-history" element={<PaymentHistory />} />
          <Route path="sms-history" element={<SmsHistory />} />
          <Route path="settings" element={<Settings />} />
          <Route path="/admin/sms-topup" element={<SmsTopup />} />
        </Route>

        {/* Router for the main WEBSITE */}
        <Route path="*" element={
          <div className="App">
            <Header />
            <main>
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
              </Routes>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
