import React from 'react';
import data from './data/Data';
import Colors from './details/Colors'
import './Details.css';
import DetailsThumb from './details/DetailsThumb';

class House extends React.Component {

  state = {
    products: [
      {
        "_id": "593e9297e17df20c4a237d42",
        "title": "Nike Shoes",
        "src": [
            "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
            "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
            "https://www.upsieutoc.com/images/2020/06/27/img4.jpg"
          ],
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 23,
        "colors":["red","black","crimson","teal"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();
  //constructor(props) {
    // super(props);
    // this.myRef = React.createRef();

    // this.state = {
    //   properties: data.properties,
    //   activeProperty: data.properties[10]
    // }
   //}

   handleTab = index =>{
     this.setState({index: index})
     const images = this.myRef.current.children;
     for(let i=0; i<images.length; i++){
       images[i].className = images[i].className.replace("active", "");
     }
     images[index].className = "active";
   };

  componentDidMount() {
    const {index} = this.state;
   this.myRef.current.children[index].className = "active";
  }
  
  
  render() {
    const id = new URLSearchParams(document.location.search).get("id");
    const { properties, index } = this.state;
    
    return (
    <div className="app">
      {properties.filter(house => house._id.includes(id) ).map(filteredHouse => (
        
        <div className="details" key={filteredHouse._id}>
          <div className="big-img">
          <img src={filteredHouse.picture} alt=""/>
          </div>        
          <div className="box">
                <div className="row">
                  <h2>{filteredHouse.title}</h2>
                  <span>${filteredHouse.price}</span>
                </div>
          </div>
          <DetailsThumb images={filteredHouse.src} tab={this.handleTab} myRef={this.myRef} /> 

          <button className="cart">Add to cart</button>
        </div>
      ))}
    </div>
    )
  }
}

export default House;