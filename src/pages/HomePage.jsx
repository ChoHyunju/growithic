import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import QuickTipSection from '../components/QuickTipSection';
import PopularProjects from '../components/PopularProjects';

const HomePage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    try {
      // src/data/projects 폴더의 모든 파일을 가져옵니다
      const projectFiles = require.context(
        '../data/projects',
        false,
        /\.(json|md)$/
      );

      const loadedProjects = projectFiles.keys().map(fileName => {
        const project = projectFiles(fileName);
        
        // 파일 확장자 확인
        const isMarkdown = fileName.endsWith('.md');
        
        // Markdown 파일인 경우
        if (isMarkdown) {
          console.log('Markdown 파일:', fileName, project);
          return {
            ...project,
            id: fileName.replace(/^\.\/(.*)\.md$/, '$1')
          };
        }
        
        // JSON 파일인 경우
        console.log('JSON 파일:', fileName, project);
        return {
          ...project,
          id: fileName.replace(/^\.\/(.*)\.json$/, '$1')
        };
      });

      console.log('불러온 프로젝트:', loadedProjects);
      setProjects(loadedProjects);
    } catch (error) {
      console.error('프로젝트 데이터 로딩 실패:', error);
    }
  }, []);

  return (
    <div className="home-page">
      <HeroSection />
      <QuickTipSection />
      
      <section className="projects-section">
        <h2>프로젝트 목록</h2>
        <div className="projects-grid">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.id} className="project-card">
                {project.thumbnail && (
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="project-thumbnail"
                  />
                )}
                <div className="project-info">
                  <h3>{project.title || project.id}</h3>
                  <p>{project.description}</p>
                  <div className="project-meta">
                    <span>👍 {project.likes || 0}</span>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        더 보기 →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>프로젝트를 불러오는 중...</p>
          )}
        </div>
      </section>

      <PopularProjects />
    </div>
  );
};

export default HomePage; 