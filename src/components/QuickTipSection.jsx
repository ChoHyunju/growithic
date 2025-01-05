import React, { useEffect, useState } from 'react';
import '../styles/QuickTipSection.css';

const QuickTipSection = () => {
  const defaultTipData = {
    title: "오늘의 꿀팁",
    content: "챗GPT로 이메일 작성 시간을 50% 줄이는 방법!",
    link: "#"
  };

  const [tipData, setTipData] = useState(defaultTipData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/data/quicktip.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch tip data');
        }
        return response.json();
      })
      .then(data => setTipData(data))
      .catch(error => {
        console.error('Error loading tip data:', error);
        setTipData(defaultTipData);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div className="quick-tip loading">Loading...</div>;
  }

  return (
    <section className="quick-tip">
      <div className="tip-container">
        <h2 className="tip-title">{tipData.title}</h2>
        <p className="tip-content">{tipData.content}</p>
        <button 
          className="tip-cta" 
          onClick={() => window.location.href = tipData.link}
        >
          더 알아보기
        </button>
      </div>
    </section>
  );
};

export default QuickTipSection; 