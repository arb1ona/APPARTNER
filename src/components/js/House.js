import React from 'react';
import Card from './Card';
import Header from './Header';
import GoogleMap from './GoogleMap';
import data from './data/Data';
import jump from 'jump.js';
import { easeInOutCubic } from './utils/Easing'

class House extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      properties: data.properties,
      activeProperty: data.properties[10],
      filterIsVisible: false,
      filterBedrooms: 'any',
      filteredProperties: [],
      isFiltering: false
    }

  //   this.setActiveProperty = this.setActiveProperty.bind(this);
  //   this.toggleFilter = this.toggleFilter.bind(this);
  //   this.handleFilterChange = this.handleFilterChange.bind(this);
  //   this.filterProperties = this.filterProperties.bind(this);

   }

   
   // handleFilterChange(e) {
  //   const target = e.target;
  //   const { value, name } = target;
  //   //console.log(`${value} ${name}`);
  //   this.setState({
  //     [name]: value
  //   }, function () {
  //     this.filterProperties();
  //   })

  // }
  
  // filterProperties() {
  //   const { properties, filterBedrooms } = this.state;
  //   const isFiltering = filterBedrooms !== 'any';
  //   console.log(isFiltering + filterBedrooms);

  //   this.setState({
  //     filteredProperties: ['some data'],
  //     isFiltering
  //   })
  // }
  
  // toggleFilter(e) {
    //   e.preventDefault();
    //   this.setState({
      //     filterIsVisible: !this.state.filterIsVisible
      //   })
      // }
      
      setActiveProperty(property, scroll) {
        const { index } = property;
        
        this.setState({
          activeProperty: property
        })
        
        // only scroll if we click on the pin, not the card
        if (scroll) {
          // scroll to the right property
          const target = `#card-${index}`;
          jump(target, {
            duration: 800,
        easing: easeInOutCubic
      })
    }

  }

  componentDidMount() {
    const id = new URLSearchParams(document.location.search).get("id");
    console.log(id)
    
  }


  render() {
    const { properties, activeProperty, filterIsVisible } = this.state;
    // console.log(params.get("id"))
    return (

      <div>
         <div className="new__filters"></div>
          {
            (property => {
              return <Card
                key={property._id}
                property={property}
                activeProperty={activeProperty}
                setActiveProperty={this.setActiveProperty}
              />
            })
          }
<h1>it works</h1>
        {/* <GoogleMap
          properties={properties}
          activeProperty={activeProperty}
          setActiveProperty={this.setActiveProperty}
        /> */}
      </div>
    )
  }
}

export default House;

// import React, { Component } from 'react';
// import Card from './Card';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import GoogleMap from './GoogleMap';
// import Header from './Header';
// import data from './data/Data';
// import jump from 'jump.js'
// import { easeInOutCubic } from 'ez.js';


// class ListingScreen extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       properties: data.properties,
//       activeProperty: data.properties[0]
//     }

//     this.setActiveProperty = this.setActiveProperty.bind(this);
//   }

//   setActiveProperty(property, scroll) {
//     const { index } = property;
//     this.setState({
//       activeProperty: property,
//     });

//     //only scroll if we click on the pin, not the card
//     if (scroll) {
//       // scroll to the right property
//       const target = `#card-${index}`;
//       jump(target, {
//         duration: 2000,
//         // offset: 0,
//         // callback: undefined,
//         easing: easeInOutCubic
//       });
//     }
//   }

//   render() {
//     const { properties, activeProperty } = this.state
//     return (
//       <div>
//         <GoogleMap
//           activeProperty={activeProperty}
//           properties={properties}
//           setActiveProperty={this.setActiveProperty}
//         />

//         <div className="cards container">
//           <div className="cards-list row ">
//             <Header />
//             {
//               properties.map(property => {
//                 return <Card
//                   activeProperty={activeProperty}
//                   key={property._id}
//                   property={property}
//                   setActiveProperty={this.setActiveProperty}
//                 />
//               })
//             }
//           </div>
//         </div>

//         {/* <GoogleMap
//           activeProperty={activeProperty}
//           properties={properties}
//           setActiveProperty={this.setActiveProperty} /> */}
//       </div>


//     )
//   }
// }

// export default ListingScreen;









// import React from 'react';
// import '../../App.css';
// import PropTypes from 'prop-types';


// const House = ({ property, activeProperty, setActiveProperty }) => {
//   const { address, bathrooms, bedrooms, carSpaces, city, index, picture, price, name } = property;

//   return (
//   <div>
//   <h1 className='products'>House Details</h1>
//   <div id={`card-${index}`} className={`card col-sm-12 col-md-6 ${property === activeProperty ? 'is-active' : ''}`} onClick={() => setActiveProperty(property, false)}>
//       <img src={picture} alt={city} />

//       <h5><b>{name}</b></h5>
//       <div className="details">
//         {/* <span className="index">{index + 1}</span> */}
//         {/* <p className="location">
//           {address},{city}
//         </p> */}
//         <ul className="features">
//           <li className="icon-bed">{bedrooms}<span>bedrooms</span></li>
//           <li className="icon-bath">{bathrooms}<span>bathrooms</span></li>
//           <li className="icon-car">{carSpaces}<span>parking spots</span></li>
//           <span className="price">ALL {price}<span>/month</span></span>
//         </ul>
//       </div>
//     </div>
//     </div>
//   ) 
// }


// House.propTypes = {
//   property: PropTypes.object.isRequired,
//   activeProperty: PropTypes.object.isRequired,
//   setActiveProperty: PropTypes.func
// }

// export default House;