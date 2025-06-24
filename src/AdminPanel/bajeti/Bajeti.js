import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFileExcel, FaFilePdf, FaFileInvoice } from 'react-icons/fa';
import BajetiModal from '../../models/BajetiModal';
import Joyride from 'react-joyride';
import './Bajeti.css';

const Bajeti = () => {
  const [show, setShow] = useState(false);
  const [runTour, setRunTour] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const steps = [
    
    {
      target: '.budget-pdf',
      content: 'Generate and download your complete budget report in PDF format.',
      placement: 'bottom'
    },
    {
      target: '.budget-excel',
      content: 'Export your budget to Excel for detailed analysis and modifications.',
      placement: 'bottom'
    },
    {
      target: '.expense-pdf',
      content: 'View and download your expense reports in PDF format.',
      placement: 'bottom'
    },
    {
      target: '.expense-excel',
      content: 'Export your expense data to Excel for advanced calculations and tracking.',
      placement: 'bottom'
    },
    {
      target: '.new-budget',
      content: 'Create a new budget entry to track your wedding expenses.',
      placement: 'bottom'
    }
  ];

  return (
    <>
      <Joyride
        steps={steps}
        run={runTour}
        continuous={true}
        showSkipButton={true}
        showProgress={true}
        styles={{
          options: {
            primaryColor: '#007bff',
            backgroundColor: '#ffffff',
            textColor: '#4a85ff',
            arrowColor: '#ffffff',
            overlayColor: 'rgba(0, 0, 0, 0.5)'
          }
        }}
      />
      <div className="dashboard container mt-4">
        <h2 className="dashboard-heading">Bajeti</h2>
        <div className="dashboard row mt-4">
          <div className="dashboard col text-center">
            <Link to="" className="text-decoration-none budget-pdf">
              <div className="dashboard bg-dash p-4 rounded-lg">
                <div className="dashText">
                  <FaFilePdf className="mb-2" size={24} />
                  <div>Budget PDF</div>
                </div>
              </div>
            </Link>
          </div>

          <div className="dashboard col text-center">
            <Link to="" className="text-decoration-none budget-excel">
              <div className="dashboard bg-dash p-4 rounded-lg">
                <div className="dashText">
                  <FaFileExcel className="mb-2" size={24} />
                  <div>Budget Excel</div>
                </div>
              </div>
            </Link>
          </div>

          <div className="dashboard col text-center">
            <Link to="" className="text-decoration-none expense-pdf">
              <div className="dashboard bg-dash p-4 rounded-lg">
                <div className="dashText">
                  <FaFilePdf className="mb-2" size={24} />
                  <div>Expense PDF</div>
                </div>
              </div>
            </Link>
          </div>

          <div className="dashboard col text-center">
            <Link to="" className="text-decoration-none expense-excel">
              <div className="dashboard bg-dash p-4 rounded-lg">
                <div className="dashText">
                  <FaFileExcel className="mb-2" size={24} />
                  <div>Expense Excel</div>
                </div>
              </div>
            </Link>
          </div>

          <div className="dashboard col text-center">
            <div onClick={handleShow} className="dashboard bg-dash p-4 rounded-lg new-budget" style={{ cursor: 'pointer' }}>
              <div className="dashText">
                <FaFileInvoice className="mb-2" size={24} />
                <div>New Budget</div>
              </div>
            </div>
          </div>
        </div>

        <BajetiModal show={show} handleClose={handleClose} />
      </div>
    </>
  );
};

export default Bajeti;