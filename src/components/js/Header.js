import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';

// import image from '../images/house-location-pin.svg';

const Header = ({ filterIsVisible, toggleFilter, handleFilterChange, city }) => {
    return (
        <header  className={`${filterIsVisible ? 'filter-is-visible' : ''}`}>

            <h1 style={{ color: "blue" }}>Property in {city}</h1>
            <Filter toggleFilter={toggleFilter} handleFilterChange={handleFilterChange} />

            <div>    
                <button className="btn-filter" onClick={(e) => toggleFilter(e)}>Filter</button>
            </div>
        </header>
    );
};

Header.propTypes = {
    filterIsVisible: PropTypes.bool.isRequired,
    toggleFilter: PropTypes.func.isRequired,
    handleFilterChange: PropTypes.func.isRequired
};

export default Header;