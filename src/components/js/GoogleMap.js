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
      const { address, index, _id, latitude, longitude, city, picture,modal, price} = property;
      this.marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: this.map,
        // label: {
        //   color: '#ffffff',
        //text: `${index + 1}`,
        // },
        icon: {
          url: 'https://svgshare.com/i/QBj.svg',
          scaledSize: new google.maps.Size(38, 40),
          origin: new google.maps.Point(0, 0),
          //anchor: new google.maps.Point(0, 30),
        },
        animation: google.maps.Animation.DROP
      });
      const contentString =
      `<a href="/house?id=${_id}" ` +
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
        '<div id="bodyContent">' +
        `<img class='image-info-window'src=${picture}>` +
        `<p class="firstHeading"><b>${address}, ${city}</b></p>` +
        `<p class="firstHeading"><b>${price} ALL</b></p>`+
        "</div>" +
        "</div>"+
      "</a> ";
      
      
      const infoWindow = new google.maps.InfoWindow({
      content: contentString
       })

      this.marker.infoWindow = infoWindow;

      this.marker.addListener('click', function () {
        //hide all other info windows on click
        this.hideAll()
        // set active property ono the state
        setActiveProperty(property, true);
      }.bind(this)); // important to bind this

      //push this marker to the markers array on the state
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