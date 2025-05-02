import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminApp from './AdminApp';
import UserApp from './UserApp';
import InternetModal from './models/InternetModal';

function App() {
  return (
    <>
      <Router>
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
