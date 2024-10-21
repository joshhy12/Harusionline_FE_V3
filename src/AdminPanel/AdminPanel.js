import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPanel.css';
import logo from '../images/logo.png';

import { useEffect } from 'react';

function AdminPanel() {
  useEffect(() => {
    // Initialize all dropdowns
    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
    dropdownElementList.map(function (dropdownToggleEl) {
      return new window.bootstrap.Dropdown(dropdownToggleEl)
    })
  }, []);

   


function AdminPanel() {
  return (
    <div id="page-top">
      <div id="wrapper">
        {/* Sidebar */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion rounded" id="accordionSidebar">
          {/* Sidebar content */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
            
            <div className="sidebar-brand-text mx-3">
              <img src={logo} alt="Logo" className="img-fluid rounded-circle" style={{ width: '60px', height: '60px' }} />
            </div>
          </a>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <Link className="nav-link" to="#">
              <i className="bi bi-speedometer2"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading">
            JIHUDUMIE
          </div>

          <li className="nav-item">
            <button className="nav-link" href="">
              <i className="bi bi-people"></i>
              <span>Wageni</span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="">
              <i className="bi bi-diagram-3"></i>
              <span>Kamati</span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="">
              <i className="bi bi-person-badge"></i>
              <span>Waalikwa</span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="">
              <i className="bi bi-people"></i>
              <span>Groups</span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="">
              <i className="bi bi-cash"></i>
              <span>Bajeti</span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="">
              <i className="bi bi-cash-coin"></i>
              <span>Michango</span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="">
              <i className="bi bi-images"></i>
              <span>Picha</span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="">
              <i className="bi bi-bar-chart"></i>
              <span>Takwimu</span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="">
              <i className="bi bi-person-vcard"></i>
              <span>Generated Ecards</span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="">
              <i className="bi bi-whatsapp"></i>
              <span>WhatsApp card </span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="">
              <i className="bi bi-credit-card"></i>
              <span>Historia ya Malipo</span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="">
              <i className="bi bi-chat-dots"></i>
              <span>Historia Ya SMS</span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="">
              <i className="bi bi-gear"></i>
              <span>Mipangilio</span>
            </button>
          </li>
          {/* Add more items here... */}
        </ul>
        {/* End of Sidebar */}

        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            
              {/* Right-side profile section */}
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin test</span>
                    <img className="img-profile rounded-circle" src={logo} alt="#" style={{ width: '40px', height: '40px' }} />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-gear fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-list-check fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logs
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                      <i className="bi bi-box-arrow-right fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
              
            </nav>

            {/* End of Topbar */}

            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* Page Heading */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm rounded">
                  <i className="bi bi-download text-white-50"></i> Generate Report
                </a>
              </div>

              {/* Content Row */}
              <div className="row">
                {/* Add dashboard cards here */}

                {/* Dashboard Cards */}
                <div className="row">
                  {/* Monthly Earnings Card */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                             Ahadi
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">Tsh 400,000</div>
                          </div>
                          <div className="col-auto">
                            <i className="bi bi-calendar fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                  {/* Michango*/}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Michango 
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">Tsh 215,000</div>
                          </div>
                          <div className="col-auto">
                            <i className="bi bi-currency-dollar fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bajeti*/}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Bajeti
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">Tsh 5000</div>
                          </div>
                          <div className="col-auto">
                            <i className="bi bi-clipboard-check fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pending Requests Card */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Matumizi
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800"> Tsh 18000</div>
                          </div>
                          <div className="col-auto">
                            <i className="bi bi-chat-square-text fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


                 {/* Content Row */}
                 <div className="row">
                {/* Add dashboard cards here */}

                {/* Dashboard Cards */}
                <div className="row">
                  {/* Monthly Earnings Card */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                             Salio la message 
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800"> 450</div>
                          </div>
                          <div className="col-auto">
                            <i className="bi bi-calendar fa-2x text-green-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                  {/* Michango*/}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-secondary shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Michango (Annual)
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">Tsh 215,000</div>
                          </div>
                          <div className="col-auto">
                            <i className="bi bi-currency-dollar fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bajeti*/}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Bajeti
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">Tsh 5000</div>
                          </div>
                          <div className="col-auto">
                            <i className="bi bi-clipboard-check fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pending Requests Card */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Matumizi
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800"> Tsh 18000</div>
                          </div>
                          <div className="col-auto">
                            <i className="bi bi-chat-square-text fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Content Row */}
              <div className="row">
                {/* Add charts and other content here */}
              </div>
            </div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}

          {/* Footer */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Your Website 2021</span>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}

      {/* Scroll to Top Button */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="bi bi-arrow-up"></i>
      </a>

      {/* Logout Modal */}
      <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        {/* Modal content */}
      </div>
    </div>
  );
}

export default AdminPanel;