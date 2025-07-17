import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminApp from './AdminApp';
import UserApp from './UserApp';
import InternetModal from './models/InternetModal';
import ScrollToTop from './components/errors/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop /> {/* Add this inside Router but above Routes */}
        <Routes>
          <Route path="/admin/*" element={<AdminApp />} />
          <Route path="/*" element={<UserApp />} />
        </Routes>
      </Router>
      <InternetModal />
    </>
  );
}

export default App;