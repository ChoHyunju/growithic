import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import QuickTipSection from '../components/QuickTipSection';
import PopularProjects from '../components/PopularProjects';

const HomePage = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/src/data/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('프로젝트 데이터 로딩 실패:', error));
  }, []);

  return (

    
    <div className="home-page">
      <HeroSection />
      <QuickTipSection />
      <PopularProjects />
    </div>
  );
};

export default HomePage; 