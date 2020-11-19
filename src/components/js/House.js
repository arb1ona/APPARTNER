import React from 'react';
import data from './data/Data';
import './Details.css';
class House extends React.Component {

  constructor(props) {
    super(props);
    //this.myRef = React.createRef();

    this.state = {
      properties: data.properties,
      activeProperty: data.properties[10]
    }
   }


  componentDidMount() {
    // const {index} = this.state;
  }
  
  
  render() {
    const id = new URLSearchParams(document.location.search).get("id");
    const { properties, index, activeProperty } = this.state;
    
    return (
    <div className="new-box">
        {properties.filter(house => house._id.includes(id)).map(filteredHouse => (
        
        
        <div className="new-box-details" key={filteredHouse._id}>
          <div className="big-img">
            <img src={filteredHouse.picture} alt=""/>
          </div>    
          <div className="box">
            <div className="row">
                  <h2>{filteredHouse.title}</h2>
              </div>
              <p style={{color:"#4758D7", fontWeight:"700", fontSize: "larger"}}>ALL {filteredHouse.price}</p>

                <p style={{fontSize:"14px"}}>{filteredHouse.roomates} roomates  · {filteredHouse.bedrooms} bedrooms  · {filteredHouse.bathrooms} bathrooms  · {filteredHouse.carSpaces} parking spots</p>
                  <p>{ filteredHouse.description}</p>  
                  <button className="contact-owner">Contact Owner</button>
            </div>
            
            {/* <div className="big-img">
                  <h2>Amenities</h2>
              <ul className="features">
                <li className="icon-bed">{filteredHouse.bedrooms}<span> bedrooms</span></li>
          <li className="icon-bath">{filteredHouse.bathrooms}<span> bathrooms</span></li>
                <li className="icon-car">{filteredHouse.carSpaces}<span> parking spots</span></li>
                <li className="icon-air">Air Conditioner</li>
        </ul>
          
            </div> */}
      </div>
      ))}
       
    </div>
    )
  }
}

export default House;