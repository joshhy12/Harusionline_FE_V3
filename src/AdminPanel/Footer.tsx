import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-8">
      <div className="container mx-auto px-6 py-4">
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SB Admin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;