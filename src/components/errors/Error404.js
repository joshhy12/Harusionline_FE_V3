import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
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
                    <span role="img" aria-label="Sad Face">😢</span>
                </div>

                <h1 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginTop: '20px',
                    color: '#2d2d2d'
                }}>
                    Mhh! Kuna kitu hakiko sawa
                </h1>
                <p style={{ fontSize: '16px', color: '#6c757d' }}>
                    Tumeshindwa kuupata ukurasa unaotafuta.
                </p>
                <Link
                    to="/"
                    style={{
                        color: '#007bff',
                        fontWeight: 'bold',
                        textDecoration: 'none'
                    }}
                    onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                    onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                >
                    Rudi Mwanzo
                </Link>
                <p style={{ fontSize: '16px', color: '#6c757d', marginTop: '20px' }}>
                    Kama tatizo litaendelea tupigie kwa msaada <br></br> <strong><a href="tel:+255747636516" style={{ color: '#007bff', textDecoration: 'none' }}>+255 747 636 516</a></strong>
                </p>
            </div>
        </div>
    );
};

export default Error404;
