import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import PageLoader from './components/PageLoader/PageLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return <div>{isLoading ? <PageLoader /> : <Home />}</div>;
}

export default App;
