import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Articles from '../Articles';
import AutoPlay from '../AutoPlay';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Articles />
      {/* <AutoPlay /> */}
      <Footer />
    </>
  );
}

export default Home;
