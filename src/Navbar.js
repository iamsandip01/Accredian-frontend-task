import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">Accredian</div>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-gray-700 hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-blue-500">About</a></li>
          <li><a href="#services" className="text-gray-700 hover:text-blue-500">Services</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
