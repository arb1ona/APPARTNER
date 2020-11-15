/*global google*/
import React from 'react';
import PropTypes from 'prop-types';
import mapStyles from "./mapStyles";
import './map.css';

import { ButtonSearchDetails } from '../ButtonSearchDetails';


class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
    }
  }
  //use componentWillReceiveProps instead of componentDidUpdate
  componentWillReceiveProps(nextProps) {
    const { activeProperty } = nextProps;
    const { index } = activeProperty;

    this.hideAll();

    this.showInfoWindow(index);
  }
  // https://facebook.github.io/react/docs/
  // https://cdnjs.com/libraries/react/

  showInfoWindow(index) {
    const { markers } = this.state;
    markers[index] && markers[index].infoWindow.open(this.map, markers[index]);
  }

  hideAll() {
    const { markers } = this.state;
    markers.forEach(marker => {
      marker.infoWindow.close();
    })
  }

  // showModal = () => {
  //   this.setState({ show: true });
  // };

  // hideModal = () => {
  //   this.setState({ show: false });
  // };
 
  
  // When the user clicks on the button, open the modal
//   onclick = function() {
//     const modal = document.getElementById("myModal");
//     const button = document.getElementById("myButton");
//   modal.style.display = "block";
// }
  
  // onClick = function () { // overwrites the existing handler
  //    alert('After'); // only this will be shown
  //  };

  componentDidMount() {
    const { properties, activeProperty, options } = this.props;
    const { latitude, longitude } = activeProperty;

    this.map = new google.maps.Map(this.map, {
      options: {
        disableDefaultUI: true,
        zoomControl: true,
        styles: mapStyles,

      },
      center: { lat: 41.3275, lng: 19.8187 },
      mapTypeControl: true,
      zoom: 13.5
    });

    this.createMarkers(properties);
  }




  createMarkers(properties) {
    const { markers } = this.state;
    const { setActiveProperty, activeProperty } = this.props;
    const activePropertyIndex = activeProperty.index;


    properties.map(property => {
      const { address, index, latitude, longitude, city, picture,modal} = property;
        const shadow = new google.maps.Marker(
          'http://maps.gstatic.com/mapfiles/shadow50.png', null, null,
          new google.maps.Point(10, 34)
          );
      this.marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: this.map,
        // label: {
        //   color: '#ffffff',
        //text: `${index + 1}`,
        // },
        shadow: shadow,
        icon: {
          //url:'https://svgshare.com/i/RUk.svg',
          url: 'https://svgshare.com/i/QBj.svg',
          scaledSize: new google.maps.Size(50, 40),
          origin: new google.maps.Point(0, 0),
          //anchor: new google.maps.Point(0, 30),
        },
        animation: google.maps.Animation.DROP
      });
      const contentString =
      '<a href="./index">' +
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
        '<div id="bodyContent">' +
        `<img class='image-info-window'src=${picture}>` +
        `<p class="firstHeading"><b>${address}, ${city}</b></p>`+
        "</div>" +
        "</div>"+
      "</a> ";
      

      // const contentString =
      // '<div id="content">' +
      // '<div id="siteNotice">' +
      // "</div>" +
      //   '<div id="bodyContent">' +
      //   `<img class='image-info-window'src=${picture}>` +
      //   `<p class="firstHeading"><b>${address}, ${city}</b></p>`+
      // '<a href="./index">' +
      // "<button class='button-info-window'>Details</button></a> " +
      // "</div>" +
      //   "</div>";
      
      const infoWindow = new google.maps.InfoWindow({
      content: contentString
        //content: `<img style='width: 13rem; height:10rem' src=${picture}><br>${address}</br><Link href="url">link text</Link><input type="button" onclick="alert('Clickkkk!')" id="elem" value="Click me">`
//        content: `<img style='width: 13rem; height:10rem' src=${picture}><br>${address}</br><input type="button" id="elem" onclick=alert("before") value="Click me">`
       // content: `<div><img style='width: 13rem; height:10rem' src=${picture}><br><input type="button" id="elem" onclick=${this.showModal} value="Click me"></div>`
      })

      this.marker.infoWindow = infoWindow;

      // this.marker.addListener('click', function () {
      //   //hide all other info windows on click
      //   this.hideAll()
      //   // set active property ono the state
      //   setActiveProperty(property, true);
      // }.bind(this)); // important to bind this

      // push this marker to the markers array on the state
      markers.push(this.marker);

      //show active property info window
      // this.showInfoWindow(activePropertyIndex);
    })
  }

  render() {
    return (
      <div className="mapContainer">
        <div id="map" ref={(el) => this.map = el}></div>
      </div>
    )
  }
}

GoogleMap.propTypes = {
  properties: PropTypes.array.isRequired,
  activeProperty: PropTypes.object.isRequired,
  setActiveProperty: PropTypes.func.isRequired,
}

export default GoogleMap;