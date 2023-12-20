// pages/index.js or any other page
import React from 'react';
import Hero from '@/components/Hero';
import MainGrid from '@/components/MainGrid';
import RentalNumbers from '@/components/RentalNumber';
import Info from '@/components/Info';



const Home = () => {
  return (
    <div>
      <Hero/>
      <RentalNumbers />
      <MainGrid/>
      <Info/>
    </div>
  );
};

export default Home;
