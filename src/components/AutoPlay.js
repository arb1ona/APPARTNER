import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HumanRights from "./partners/HumanRights.png"
import Strive from "./partners/Strive.png"
import Erasmus from "./partners/Erasmus.png"
import Cisco from "./partners/Cisco.png"
import facebook from "./partners/facebook.png"
import Booking from "./partners/Booking.png"
import { Image } from "react-bootstrap";


export default class AutoPlay extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1000,
      cssEase: "linear",
    };
    return (
      <Slider className="slider-new" {...settings}>
        <div>
          <Image src={HumanRights} style={{ width: '150px', height: '100px' }} />
        </div>
        <div>
          <Image src={Strive} style={{ width: '150px', height: '75px' }} />
        </div>
        <div>
          <Image src={Erasmus} style={{ width: '150px', height: '75px' }} />
        </div>
        <div>
          <Image src={Cisco} style={{ width: '150px', height: '75px' }} />
        </div>
        <div>
          <Image src={facebook} style={{ width: '160px', height: '90px' }} />
        </div>
        <div>
          <Image src={Booking} style={{ width: '180px', height: '100px' }} />
        </div>
      </Slider>
    );
  }
}
