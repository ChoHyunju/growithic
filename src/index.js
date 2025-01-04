import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'; // 스타일 파일 경로가 필요하다면 추가
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
