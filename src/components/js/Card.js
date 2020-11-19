import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ property, activeProperty, setActiveProperty }) => {
  const { address, bathrooms, bedrooms, carSpaces, city, index, picture, price, name ,title} = property;

  return (
    <div id={`card-${index}`} className={`card col-sm-12 col-md-6 ${property === activeProperty ? 'is-active' : ''}`} onClick={() => setActiveProperty(property, false)}>
      <img src={picture} alt={city} />

      <h5><b>{name}</b></h5>
      <div className="details">
        {/* <span className="index">{index + 1}</span> */}
        <p style={{fontWeight:"700"}}>{ title}</p>
        <p className="location" style={{fontSize:"1.2rem"}}>
          {address},{city}
        </p>
        <ul className="features">
          <li className="icon-bed">{bedrooms}</li>
          <li className="icon-bath">{bathrooms}</li>
          <li className="icon-car"><div style={{marginLeft:"1rem"}}>{carSpaces}</div></li>
        </ul>
          <p className="price">ALL {price}<span>/month</span></p>
      </div>
    </div>)
}

Card.propTypes = {
  property: PropTypes.object.isRequired,
  activeProperty: PropTypes.object.isRequired,
  setActiveProperty: PropTypes.func
}

export default Card;