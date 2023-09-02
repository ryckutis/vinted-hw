import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import PageLoader from './components/PageLoader/PageLoader';
import Favorites from './components/Favorites/Favorites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <PageLoader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
