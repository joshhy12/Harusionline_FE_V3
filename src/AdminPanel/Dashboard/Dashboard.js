import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaBell, FaEnvelope, FaIdCard, FaUsers } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  return (

    <div className="dashboard container mt-4">
      {/* Heading section */}
      <h2 className="dashboard-heading">Dashboard</h2>

      {/* Top section */}


      <div className="dashboard row bg-dash p-4 rounded-lg">
        <div className="dashboard col text-center">
          <div className="text-dark">Ahadi</div>
          <div className="dashText" style={{ fontSize: '1.5rem' }}>TZS 201,000</div>
          <div className="text-dark mt-2"><u>Walioahidi</u></div>
          <div className="dashText font-weight-bold" style={{ fontSize: '1.5rem' }}>3</div>
        </div>

        <div className="dashboard col text-center">
          <div className="text-dark">Michango</div>
          <div className="dashText" style={{ fontSize: '1.5rem' }}>TZS 0.00</div>
          <div className="text-dark mt-2"><u>Waliotoa</u></div>
          <div className="dashText font-weight-bold" style={{ fontSize: '1.5rem' }}>0</div>
        </div>

        <div className="dashboard col text-center">
          <div className="text-dark">Bajeti</div>
          <div className="dashText" style={{ fontSize: '1.5rem' }}>TZS 0.00</div>
          <br />
          <div className="dashText mt-2">Pledges PDF</div>
        </div>

        <div className="dashboard col text-center">
          <div className="text-dark">Matumizi</div>
          <div className="dashText" style={{ fontSize: '1.5rem' }}>TZS 0.00</div>
          <br />
          <div className="dashText mt-2">Pledges Excel</div>
        </div>
      </div>



      <div className="dashboard row mt-4">
        <div className="dashboard col text-center">
          <Link to="/admin/send-report" className="text-decoration-none">

            <div className="dashboard bg-dash p-4 rounded-lg">
              <div className="dashText">
                <FaPaperPlane className="mb-2" size={24} />
                <div>Tuma Taarifa</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="dashboard col text-center">
          <Link to="/admin/contribution-reminder" className="text-decoration-none">

            <div className="dashboard bg-dash p-4 rounded-lg">
              <div className="dashText">
                <FaBell className="mb-2" size={24} />
                <div>Kumbusha Michango</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="dashboard col text-center">
          <Link to="/admin/send-invitations" className="text-decoration-none">

            <div className="dashboard bg-dash p-4 rounded-lg">
              <div className="dashText">
                <FaEnvelope className="mb-2" size={24} />
                <div>Tuma Mialiko</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="dashboard col text-center">
          <Link to="/admin/ecards" className="text-decoration-none">

            <div className="dashboard bg-dash p-4 rounded-lg">
              <div className="dashText">
                <FaIdCard className="mb-2" size={24} />
                <div>E-cards</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="dashboard col text-center">
          <Link to="/admin/import-contacts" className="text-decoration-none">

            <div className="dashboard bg-dash p-4 rounded-lg">
              <div className="dashText">
                <FaUsers className="mb-2" size={24} />
                <div>Import Contacts</div>
              </div>
            </div>
          </Link>
        </div>
        
      </div>


      <div className="row mt-4 g-4">
        <div className="col-md-8">
          <div className="bg-dash p-4 rounded-lg">
            <h1 className="dashboard-heading">Statistics</h1>
            <div style={{ height: '300px' }}>
              {/* Add your preferred chart library component here */}
              {/* Example using recharts:
              <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart> */}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-dash p-4 rounded-lg">
            <h1 className="dashboard-heading">Calendar</h1>
            <div style={{ height: '300px' }}>
              {/* Add your preferred calendar component here */}
              {/* Example using react-calendar:
              <Calendar
                onChange={onChange}
                value={date}
              /> */}
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};


export default Dashboard;