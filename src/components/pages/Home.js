import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Articles from '../Articles';
import ScrollToTop from '../Scroll/ScrollToTop';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Articles />
      <Footer />
    </>
  );
}

export default Home;
