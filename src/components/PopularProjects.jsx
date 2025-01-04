import React, { useEffect, useState } from 'react';
import '../styles/PopularProjects.css';

const PopularProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // 포트폴리오 데이터 로드
    fetch('/src/data/portfolio')
      .then(response => response.json())
      .then(data => {
        // 좋아요 순으로 정렬하고 상위 3개만 선택
        const sortedProjects = data
          .sort((a, b) => b.likes - a.likes)
          .slice(0, 3);
        setProjects(sortedProjects);
      })
      .catch(error => console.error('Error loading projects:', error));
  }, []);

  return (
    <section className="popular-projects">
      <h2 className="section-title">가장 인기 있는 프로젝트</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="project-thumbnail"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-likes">
              <button className="like-button">
                ❤️ {project.likes}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProjects; 