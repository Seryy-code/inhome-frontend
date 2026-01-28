import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from '@/utils/useApi';
import { transformBackendData, collectImages } from '@/hooks/useImageProcessor';
import { useImagePreloader } from '@/hooks/useImagePreloader';

import VerticalSlider from '@/components/sliders/VerticalSlider';
import BottomNavigation from '@/components/BottomNavigation/BottomNavigation';
import Loader from '@/components/Loader/Loader';
import PageRenderer from '@/components/section/PageRenderer';

export default function PropertyPage() {
  const { slug } = useParams();
  const { apiFetch } = useApi();
  const { preloadImages } = useImagePreloader();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [sections, setSections] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      if (!slug) {
        setError('Slider ID not specified');
        setIsLoading(false);
        return;
      }

      try {
        const data = await apiFetch(`/property-slides-test/${slug}`);
        const processed = transformBackendData(data);
        setSections(processed);
        setError(null);

        const images = collectImages(processed);
        await preloadImages(images);

        setIsExiting(true);
        setTimeout(() => setIsLoading(false), 500);
      } catch (err) {
        setError(err.message || 'Data loading error');
        setIsLoading(false);
      }
    };

    loadData();
  }, [slug]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Loading Error</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Back to list
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && <Loader isExiting={isExiting} />}

      <VerticalSlider activeSection={activeIndex}>
        <PageRenderer sections={sections} />
      </VerticalSlider>
      <BottomNavigation
        sections={sections}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />
    </>
  );
}
