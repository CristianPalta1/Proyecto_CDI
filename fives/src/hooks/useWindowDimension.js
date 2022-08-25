import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  const { clientWidth: width, clientHeight: height } = document.body;

  return {
    width,
    height,
  };
};

export const useWindowDimensions = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight;
      setHeight(height);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return height;
};