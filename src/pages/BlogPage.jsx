import React from 'react';
import HeroSection from '../components/HeroSection';
import QuickTipSection from '../components/QuickTipSection';
import PopularProjects from '../components/PopularProjects';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <QuickTipSection />
      <PopularProjects />
    </div>
  );
};

export default HomePage; 