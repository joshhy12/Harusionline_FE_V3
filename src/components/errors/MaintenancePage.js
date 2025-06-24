import React from 'react';
import { Link } from 'react-router-dom';

const MaintenancePage = () => {
    return (
        <div className="error-container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f8f9fa',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            color: '#2d2d2d'
        }}>
            <div>
                <div className="icon" style={{ fontSize: '50px', color: '#007bff' }}>
                    <i className="fas fa-tools"></i>
                </div>
                <h1 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginTop: '20px',
                    color: '#2d2d2d'
                }}>
                    Mfumo Unahudumiwa
                </h1>
                <p style={{ fontSize: '16px', color: '#6c757d' }}>
                    Tunaendelea kuboresha huduma zetu.<br></br> Tafadhali subiri kidogo.
                </p>
                <p style={{ fontSize: '16px', color: '#6c757d' }}>
                    Tutarudi hivi punde.
                </p>
                <p style={{ fontSize: '16px', color: '#6c757d', marginTop: '20px' }}>
                    Kwa mawasiliano zaidi: <strong><a href="tel:+255747636516" style={{ color: '#007bff', textDecoration: 'none' }}>+255 747 636 516</a></strong>
                </p>

            </div>
        </div>
    );
};

export default MaintenancePage;
