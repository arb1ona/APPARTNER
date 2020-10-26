import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='about'>
        <h1>Our Services</h1>
        <p>When it comes to Renting and Flatmates, we're here every step of the way.</p>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Exterior3.gif'
              title='Houses for Rent'
              description='Find appartments with a stunning view of the Youth Park.'
              // label='Adventure'
              path='/listing'
            />
            <CardItem
              src='images/Flatmate.gif'
              title='Looking for a Flatmate?'
              description="Find your perfect partner to share a flat with."
              // label='Luxury'
              path='/flatmate'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
