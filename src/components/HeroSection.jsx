import React, { useEffect, useState } from 'react';
import '../styles/HeroSection.css';
import { fetchCmsData } from '../utils/cmsMiddleware';

const HeroSection = () => {
  const [heroData, setHeroData] = useState({
    title: "AI로 똑똑하게, 창의적으로 – 우리는 문제를 해결합니다",
    subtitle: "시간을 절약하고, 더 스마트하게 일하세요",
    ctaButton1: "포트폴리오 보기",
    ctaButton2: "문의하기",
    heroImage: "/assets/ai-animation.gif"
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadHeroData = async () => {
      setIsLoading(true);
      const data = await fetchCmsData('/src/data/homepage.json');
      if (data) {
        setHeroData(data);
      }
      setIsLoading(false);
    };

    loadHeroData();
  }, []);

  if (isLoading) {
    return <div className="loading">로딩 중...</div>;
  }

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">{heroData.title}</h1>
        <p className="hero-subtitle">{heroData.subtitle}</p>
        <div className="cta-buttons">
          <button className="cta-button primary">{heroData.ctaButton1}</button>
          <button className="cta-button secondary">{heroData.ctaButton2}</button>
        </div>
      </div>
      <div className="hero-visual">
        <img src={heroData.heroImage} alt="AI 솔루션 시각화" />
      </div>
    </section>
  );
};

export default HeroSection; 