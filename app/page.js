// pages/index.js or any other page
import React from 'react';
import Hero from '@/components/Hero';
import MainGrid from '@/components/MainGrid';
import RentalNumbers from '@/components/RentalNumber';
import Info from '@/components/Info';
import SideBar from '@/components/SideBar';



const Home = () => {
  return (
      <div className="flex-1 lg:flex lg:flex-row-reverse">
      <div>
      <Hero/>
      <RentalNumbers />
      <MainGrid/>
      <Info/>
      </div>
      <aside className="lg:w-4/5">
            <SideBar />
      </aside>
      </div>
  );
};

export default Home;
