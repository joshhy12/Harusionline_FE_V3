import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFileExcel, FaFilePdf, FaFileInvoice } from 'react-icons/fa';
import BajetiModal from '../../models/BajetiModal';

const Bajeti = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="dashboard container mt-4">
      <h2 className="dashboard-heading">Bajeti</h2>
      <div className="dashboard row mt-4">
        <div className="dashboard col text-center">
          <Link to="" className="text-decoration-none">
            <div className="dashboard bg-dash p-4 rounded-lg">
              <div className="dashText">
                <FaFilePdf className="mb-2" size={24} />
                <div>Budget PDF</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="dashboard col text-center">
          <Link to="" className="text-decoration-none">
            <div className="dashboard bg-dash p-4 rounded-lg">
              <div className="dashText">
                <FaFileExcel className="mb-2" size={24} />
                <div>Budget Excel</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="dashboard col text-center">
          <Link to="" className="text-decoration-none">
            <div className="dashboard bg-dash p-4 rounded-lg">
              <div className="dashText">
                <FaFilePdf className="mb-2" size={24} />
                <div>Expense PDF</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="dashboard col text-center">
          <Link to="" className="text-decoration-none">
            <div className="dashboard bg-dash p-4 rounded-lg">
              <div className="dashText">
                <FaFileExcel className="mb-2" size={24} />
                <div>Expense Excel</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="dashboard col text-center">
          <div onClick={handleShow} className="dashboard bg-dash p-4 rounded-lg" style={{ cursor: 'pointer' }}>
            <div className="dashText">
              <FaFileInvoice className="mb-2" size={24} />
              <div>New Budget</div>
            </div>
          </div>
        </div>
      </div>

      <BajetiModal show={show} handleClose={handleClose} />
    </div>
  );
};

export default Bajeti;
