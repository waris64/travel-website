'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll to make navbar solid
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed  left-0 right-0 mx-auto w-[95%] max-w-[1200px] h-[70px] px-4 flex justify-between items-center rounded-[13px] z-50 transition-all duration-300 
        ${
          isScrolled
            ? 'bg-white shadow-md'
            : 'bg-white/70 backdrop-blur-md shadow-sm'
        }`}
    >
      {/* Brand Name */}
      <h1 className="text-2xl font-bold text-[#01959a] select-none">Trippy</h1>

      {/* Hamburger Icon */}
      <div
        className="text-2xl md:hidden cursor-pointer z-50 text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul
        className={`absolute md:static top-[70px] left-0 w-full md:w-auto flex flex-col md:flex-row items-center justify-center gap-4 bg-white/95 md:bg-transparent rounded-b-lg shadow-md md:shadow-none transition-all duration-500 ease-in-out transform
          ${
            menuOpen
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-5 invisible md:translate-y-0 md:opacity-100 md:visible'
          }`}
      >
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.url}
              className={`flex items-center px-4 py-2 text-base font-semibold transition-all duration-200 rounded-md ${
                location.pathname === item.url
                  ? 'text-[#01959a]'
                  : 'text-gray-800 hover:text-white hover:bg-[#01959a]'
              }`}
            >
              <i className={`${item.icon} mr-2 text-sm`}></i>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
