import React from 'react';
import data from './data/Data';
import './Details.css';

class House extends React.Component {

  constructor(props) {
    super(props);
    //this.myRef = React.createRef();

    this.state = {
      properties: data.properties,
      activeProperty: data.properties[10],
    }
  }
  
     render() {
    const id = new URLSearchParams(document.location.search).get("id");
    const { properties, index, activeProperty } = this.state;
    
       return (
      <>
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
              <p>{filteredHouse.description}</p> 
                  <button type="button" onClick={this.showModal} className="contact-owner">Contact Owner</button>
            </div>
            
      </div>
      ))}
       
    </div>
        <div className="new-box">

            {/* <div className="new-box-details">
              <div className="big-img">
                 <h2>Amenities</h2>
                 
  <div class="icon baseline">
                   <i class="fas fa-hotel">hotel</i> 
                   <br></br>
                   <i class="fas fa-fan">Air Conditioner</i> 
                   <br></br>
                   <i class="fas fa-wifi">Wifi</i>
  </div>
  xyz
                 <br></br>
  <div class="icon baseline">
                   <i class="fas fa-fan">Air Conditioner</i> 
                   <i class="fas fa-blender">Blender</i>                
  </div>
  
                <ul className="features">
                   <li className="icon-bed"></li>
                   <li className="icon-car"><p style={{ display: "inline-block" }}>Air Conditioner</p></li>                
                   <li className="icon-animal"></li><div style={{display:"inline"}}>Animal Encluded</div>
                </ul>
              </div>
              <div className="box">
            <div className="row">
                  <h2>im title</h2>
              </div>
              <p style={{color:"#4758D7", fontWeight:"700", fontSize: "larger"}}>ALL </p>

                <p style={{fontSize:"14px"}}>hey roomates  · hello bedrooms  · ups bathrooms  · love} parking spots</p>
              <p>whateverloremFilled with natural light, parquet floors and located in the center in an old building but full with character our place is ideal for your visit and stay in Tirana."+ "  It has a full functional indoor & outdoor kitchen and a very cozy living room with fireplace."
            +" Windows have shutters and there is also a balcony where you can enjoy meals.</p> 
                  <button type="button" onClick={this.showModal} className="contact-owner">Contact Owner</button>
            </div>
             </div> */}

        </div>
      </>
    )
  }
}

export default House;