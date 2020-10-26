import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import hero1 from './hero1.jpg'

function HeroSection() {
  return (
    <div className='hero-container'>
      <div style={{
        backgroundImage: `url(${require("./hero1.jpg")})`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      }}></div>
      {/* <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p> */}
      {/* <div className='hero-btns'>
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
        </Button>
      </div> */}
    </div >
  );
}

export default HeroSection;
