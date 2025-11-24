
import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import WhatsAppReviews from '../components/WhatsAppReviews';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import FloatingOrderButton from '../components/FloatingOrderButton';

const Index = () => {
  return (
    <>
      <Hero />
      <Categories />
      <WhatsAppReviews />
      <Services />
      <About />
      <Contact />
      <FloatingOrderButton />
    </>
  );
};

export default Index;
