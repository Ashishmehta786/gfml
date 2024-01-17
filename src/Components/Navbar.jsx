// Navbar.jsx

import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const mobileMenuRef = useRef(null);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="navbar-item"> <span className="head1">GraphFlow.<span className="heading">ml</span></span></div>
      <div className="nav-item">
        <div className="search-container">
    <input type="text" className="search-bar" placeholder="Search..."/>
    
  </div></div><div className="nav-item">
          <FontAwesomeIcon icon={faSearch} /></div>
      
      <div className="nav-item"><FontAwesomeIcon icon={faHome} /></div>
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? <span className="material-symbols-outlined">
          wb_sunny
          </span> : <span className="material-symbols-outlined">
clear_night
</span>}
      </div>
      <div className={`mobile-menu-toggle`} onClick={handleMobileMenuToggle}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="icon" />
      </div>
      {isMobileMenuOpen && (
        <div className={`mobile-menu ${darkMode ?'darkmobile':''}`}><div className="infocust">
          <span class="material-symbols-outlined i">
account_circle
</span><span class="material-symbols-outlined i">
shopping_cart
</span>
          <span class="material-symbols-outlined i">
logout 
</span>
          <span class="material-symbols-outlined i">
workspace_premium
</span>
          
          
        </div>
          <div className="horizontal-line"></div><div className="mmi"  >
          <div className="mobile-menu-item">Machine Learning</div>
          <div className="mobile-menu-item">Deep Learning</div>
          <div className="mobile-menu-item">Essential Mathematics</div>
        </div></div>
        
      )}
    </div>
    
  );
};

export default Navbar;
