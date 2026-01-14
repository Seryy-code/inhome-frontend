import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useApi } from '@/utils/useApi'

import VerticalSlider from '@/components/sliders/VerticalSlider'
import BottomNavigation from '@/components/BottomNavigation/BottomNavigation'
import Loader from '@/components/Loader/Loader'
import PageRenderer from '@/components/section/PageRenderer'

export default function HomePage() {
  const { slug } = useParams()
  const { apiFetch } = useApi()
  
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const [sliderData, setSliderData] = useState(null)
  const [processedData, setProcessedData] = useState(null)
  const [error, setError] = useState(null)
  
  const SLIDER_DISABLED = false

  const preloadImages = (images = []) => {
    return Promise.all(
      images.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image()
            img.src = src
            img.onload = resolve
            img.onerror = resolve 
          })
      )
    )
  }

  const createMediaMap = (sliderMedia) => {
    if (!sliderMedia) return {};
    
    const map = {};
    sliderMedia.forEach(media => {
      if (media.metadata) {
        try {
          const metadata = typeof media.metadata === 'string' 
            ? JSON.parse(media.metadata) 
            : media.metadata;
          
          if (metadata.key) {
            if (!map[metadata.key]) {
              map[metadata.key] = [];
            }
            map[metadata.key].push({
              ...media,
              fullUrl: import.meta.env.VITE_API_URL + media.filename
            });
          }
        } catch (e) {
          console.error('Error parsing metadata:', e);
        }
      }
    });
    
    return map;
  };

  const processPage = (page, section, pageIndex, mediaMap, API_URL) => {
    const processed = { ...page };

    if (page.images && Array.isArray(page.images)) {
      processed.images = page.images.map(img => {
        if (typeof img === 'string') {
          return img.startsWith('http') ? img : API_URL + img;
        }
        if (img.src) {
          return img.src.startsWith('http') ? img.src : API_URL + img.src;
        }
        return null;
      }).filter(Boolean);
    }

    if (page.image && typeof page.image === 'string') {
      processed.image = page.image.startsWith('http') ? page.image : API_URL + page.image;
    }

    if (page.partnerImage && typeof page.partnerImage === 'string') {
      processed.partnerImage = page.partnerImage.startsWith('http') ? page.partnerImage : API_URL + page.partnerImage;
    }

    if (page.partnerLogo && typeof page.partnerLogo === 'string') {
      processed.partnerLogo = page.partnerLogo.startsWith('http') ? page.partnerLogo : API_URL + page.partnerLogo;
    }

    if (page.logo && typeof page.logo === 'string') {
      processed.logo = page.logo.startsWith('http') ? page.logo : API_URL + page.logo;
    }

    if (page.dec_image && typeof page.dec_image === 'string') {
      processed.dec_image = page.dec_image.startsWith('http') ? page.dec_image : API_URL + page.dec_image;
    }

    if (page.partners && Array.isArray(page.partners)) {
      processed.partners = page.partners.map(partner => ({
        ...partner,
        logo: partner.logo && typeof partner.logo === 'string'
          ? (partner.logo.startsWith('http') ? partner.logo : API_URL + partner.logo)
          : partner.logo
      }));
    }

    return processed;
  };

  const transformBackendData = (backendData) => {
    if (!backendData || !backendData.data) {
      return [];
    }

    const API_URL = import.meta.env.VITE_API_URL;

    return backendData.data.map((section) => {
      const result = {
        section: section.section,
      };

      if (section.page) {
        result.page = processPage(section.page, section.section, 0, null, API_URL);
      }

      if (section.pages && section.pages.length > 0) {
        result.pages = section.pages.map((page, pageIndex) => 
          processPage(page, section.section, pageIndex, null, API_URL)
        );
      }

      return result;
    });
  };

  useEffect(() => {
    const loadSliderData = async () => {
      if (!slug) {
        setError('Slider ID not specified');
        setIsLoading(false);
        return;
      }
      
      try {
        const data = await apiFetch(`/property-slides-test/${slug}`);
        setSliderData(data);
        const processed = transformBackendData(data);
        setProcessedData(processed);
        setError(null);
        
        const imagesToPreload = [];
        const addImage = (img) => {
          if (img && typeof img === 'string' && img.trim()) {
            imagesToPreload.push(img);
          }
        };
        
        processed.forEach(section => {
          if (section.page) {
            if (Array.isArray(section.page.images)) {
              section.page.images.forEach(addImage);
            }
            addImage(section.page.image);
            addImage(section.page.logo);
            addImage(section.page.partnerImage);
            addImage(section.page.partnerLogo);
            addImage(section.page.dec_image);
          }
          
          if (section.pages) {
            section.pages.forEach(page => {
              if (Array.isArray(page.images)) {
                page.images.forEach(addImage);
              }
              addImage(page.image);
              addImage(page.logo);
              addImage(page.partnerImage);
              addImage(page.partnerLogo);
              addImage(page.dec_image);
              
              if (page.partners && Array.isArray(page.partners)) {
                page.partners.forEach(partner => {
                  addImage(partner.logo);
                });
              }
            });
          }
        });
        
        await preloadImages(imagesToPreload);
        
        setIsExiting(true);
        setTimeout(() => setIsLoading(false), 500);
      } catch (err) {
        setError(err.message || 'Data loading error');
        setIsLoading(false);
      }
    };

    loadSliderData();
  }, [slug]);

  const finalData = processedData || [];

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
      
      {SLIDER_DISABLED ? (
        <div className="min-h-screen bg-gray-900 text-white p-8">
          <h1 className="text-2xl mb-4">DEBUG MODE</h1>
          <pre className="text-xs overflow-auto">{JSON.stringify({ sliderData, processedData, finalData }, null, 2)}</pre>
        </div>
      ) : (
        <>
          <VerticalSlider activeSection={activeIndex}> 
            <PageRenderer sections={finalData} />
          </VerticalSlider>
          <BottomNavigation 
            sections={finalData} 
            activeIndex={activeIndex} 
            onSelect={setActiveIndex}
          />
        </>
      )}
    </>
  );
}
