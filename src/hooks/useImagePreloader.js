import { useState, useCallback } from 'react';

export const useImagePreloader = () => {
  const [isPreloading, setIsPreloading] = useState(false);

  const preloadImages = useCallback((images = []) => {
    setIsPreloading(true);
    
    return Promise.all(
      images.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          })
      )
    ).finally(() => {
      setIsPreloading(false);
    });
  }, []);

  return { preloadImages, isPreloading };
};
