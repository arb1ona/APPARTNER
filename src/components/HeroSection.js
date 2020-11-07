import React from 'react';
import '../App.css';
import { ButtonSearch } from './ButtonSearch';
import './HeroSection.css';
import hero5 from './hero5.jpg'
// import { Button } from './Button';
import DropdownRoomate from './DropdownRoomate'


function HeroSection() {
  return (
    <div className='hero-container'>
      <div style={{
        backgroundImage: `url(${require("./hero5.jpg")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      }}></div>

      <div className="wrapper">
        <div className="search_box">
          <i className="fas fa-search"></i>
          <div className="search_field">
            <input type="text" className="input" placeholder="Search for a location..." />
          </div>

          <div className="dropdown">
            <DropdownRoomate />

            {/* <div className="default_option">
            </div> */}

          </div>
          <ButtonSearch buttonStyle='btn--outline'>SEARCH</ButtonSearch>
        </div>
      </div>
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
