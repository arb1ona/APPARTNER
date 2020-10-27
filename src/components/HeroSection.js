import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import hero4 from './hero4.jpg'
import DropdownRoomate from './DropdownRoomate'


function HeroSection() {
  return (
    <div className='hero-container'>
      <div style={{
        backgroundImage: `url(${require("./hero4.jpg")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      }}></div>        <DropdownRoomate />

      {/* <div className="wrapper">
        {/* <div className="search_box">
          <i className="fas fa-search"></i>
          <div className="search_field">
            <input type="text" className="input" placeholder="Search for a location..." />
          </div>
          <div className="dropdown">
            <div className="default_option">Roomates</div>
          </div>
        </div> 
        <DropdownRoomate />
      </div> */}
      {/* <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
    </div >
  );
}

export default HeroSection;
