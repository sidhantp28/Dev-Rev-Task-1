import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';
import SignInPage from './SignInPage';


const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // 3.5 seconds in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="loading-screen">
       Loading...
    </div>
  ) : <SignInPage/>;
};

export default LoadingScreen;