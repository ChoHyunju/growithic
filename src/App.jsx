import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminSetup from './components/AdminSetup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<></>}>
            <AdminSetup />
            <HomePage />
          </Suspense>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;