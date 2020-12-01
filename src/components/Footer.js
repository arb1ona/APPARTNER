import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import ScrollToTop from './Scroll/ScrollToTop'

function Footer() {
  return (
    <div>

    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best renting deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <small><Link to='/sign-up'>How Appartner works</Link></small>
            <small><Link to='/'>Testimonials</Link></small>
            <small><Link to='/'>Careers</Link></small>
            <small><Link to='/'>Investors</Link></small>
            <small><Link to='/'>Terms of Service</Link></small>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <small><Link to='/'>Contact</Link></small>
            <small><Link to='/'>Support</Link></small>
            <small><Link to='/'>Destinations</Link></small>
            <small><Link to='/'>Sponsorships</Link></small>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <small><Link to='/'>Submit Video</Link></small>
            <small><Link to='/'>Ambassadors</Link></small>
            <small><Link to='/'>Agency</Link></small>
            <small><Link to='/'>Influencer</Link></small>
            <small><Link to='/'>Diversity & Belonging</Link></small>
          </div>
          <div className='footer-link-items'>
            <h2>Recources</h2>
            <small><Link to='/'>Docs</Link></small>
            <small><Link to='/'>Blog</Link></small>
            <small><Link to='/'>eBooks</Link></small>
            <small><Link to='/'>Webinars</Link></small>
          </div>
        </div>
      </div>
    </div >
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        < ScrollToTop/>
        </div>
      </section >
    </div>
  );
}

export default Footer;
