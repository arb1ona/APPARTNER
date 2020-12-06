import React, { Component } from 'react'
import Feed from './Feed'

export default class DisplayAllPosts extends Component {
  componentDidMount(){
    const script = document.createElement('script');
    script.setAttribute(
      'src', 
      'https://www.powr.io/powr.js?platform=html');
    // script.addEventListener('load', () => {
    //   EmbedManager.embed({
    //     key: "key",
    //     width: "100%",
    //     mobileResponsive: true
    //   });
    // });
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        
      <div className="powr-countdown-timer" id="3292fed3_1602887327" style={{marginTop:"5rem"}}></div>
    
      </div>
    )
  }
}
