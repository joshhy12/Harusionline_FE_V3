import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/admin/layout/Layout';

// Admin Components
import Dashboard from './AdminPanel/Dashboard/Dashboard';
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
import AdminCardDetails from './AdminPanel/ecards/AdminCardDetails'
import GeneretedWhatAppCard from './AdminPanel/ecards/GeneretedWhatAppCard';
import WhatsappCard from './AdminPanel/WhatsappCard/WhatsappCard';
import PaymentHistory from './AdminPanel/PaymentHistory/PaymentHistory';
import SmsHistory from './AdminPanel/SmsHistory/SmsHistory';
import Settings from './AdminPanel/settings/Settings.js';
import SmsTopup from './AdminPanel/PaymentHistory/SmsTopup';
import WebsiteTemplates from './AdminPanel/websiteTemplates/WebsiteTemplates';
import WatoaHudumaRoutes from './components/WatoaHuduma_admin_panel/WatoaHudumaRoutes';

function AdminApp() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<div className="admin-layout"><div className="main-content"><Dashboard /></div></div>} />
        <Route path="dashboard" element={<div className="admin-layout"><div className="main-content"><Dashboard /></div></div>} />
        <Route path="kamati" element={<div className="admin-layout"><div className="main-content"><Kamati /></div></div>} />
        <Route path="wageni" element={<div className="admin-layout"><div className="main-content"><Wageni /></div></div>} />
        <Route path="payments" element={<div className="admin-layout"><div className="main-content"><Payments /></div></div>} />
        <Route path="waalikwa" element={<div className="admin-layout"><div className="main-content"><Waalikwa /></div></div>} />
        <Route path="groups" element={<div className="admin-layout"><div className="main-content"><Groups /></div></div>} />
        <Route path="bajeti" element={<div className="admin-layout"><div className="main-content"><Bajeti /></div></div>} />
        <Route path="michango" element={<div className="admin-layout"><div className="main-content"><Michango /></div></div>} />
        <Route path="takwimu" element={<div className="admin-layout"><div className="main-content"><Takwimu /></div></div>} />
        <Route path="picha" element={<div className="admin-layout"><div className="main-content"><Picha /></div></div>} />
        <Route path="ecards" element={<div className="admin-layout"><div className="main-content"><Ecards /></div></div>} />
        <Route path="ecards/:id" element={<div className="admin-layout"><div className="main-content"><AdminCardDetails /></div></div>} />
        <Route path="GeneratedWhatsAppCard" element={<div className="admin-layout"><div className="main-content"><GeneretedWhatAppCard /></div></div>} />
        <Route path="whatsapp-card" element={<div className="admin-layout"><div className="main-content"><WhatsappCard /></div></div>} />
        <Route path="payment-history" element={<div className="admin-layout"><div className="main-content"><PaymentHistory /></div></div>} />
        <Route path="sms-history" element={<div className="admin-layout"><div className="main-content"><SmsHistory /></div></div>} />
        <Route path="settings" element={<div className="admin-layout"><div className="main-content"><Settings /></div></div>} />
        <Route path="sms-topup" element={<div className="admin-layout"><div className="main-content"><SmsTopup /></div></div>} />
        <Route path="websiteTemplates" element={<div className="admin-layout"><div className="main-content"><WebsiteTemplates /></div></div>} />
      </Route>

      <Route path="service-provider/*" element={<WatoaHudumaRoutes />} />
    </Routes>
  );
}

export default AdminApp;