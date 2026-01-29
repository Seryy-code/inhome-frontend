import Header from "@/components/Header/Header";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi } from '@/utils/useApi';
import { useAuth } from '@/hooks/useAuth';
import SliderCard from "@/components/SliderCard/SliderCard";
import icon from "../../assets/logo.svg";

export default function HomePage() {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { apiFetch } = useApi();
  const { signOut } = useAuth();

  useEffect(() => {
    loadSliders();
  }, []);

  const loadSliders = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiFetch('/property-slides-test');
      setSliders(data);
    } catch (err) {
      console.error('GET error :', err);
      setError(err.message || 'get error');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectSlider = (slider) => {
    navigate(`/property-slides-test/${slider.slug}`);
  };

  const handleLogout = () => {
    signOut();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading sliders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <div className="flex gap-4">
            <button
              onClick={loadSliders}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Try again
            </button>
            <button
              onClick={handleLogout}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header dataClick={handleLogout}/>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          {/* <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Select a presentation</h1>
            
          </div> */}

          {sliders.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <p className="text-gray-600">No sliders available</p>
            </div>
          ) : (
            <div className={'px-4 md:px-0 container  mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'}>
              {sliders.map((slider) => (
                <SliderCard 
                  key={slider.id}
                  slider={slider}
                  onClick={() => handleSelectSlider(slider)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
       <footer className="bg-[#1F1918] w-full text-white px-10 ">
        <div className="container mx-auto flex items-center justify-between py-3">
                <a href="/" className={'w-full max-w-[150px] md:max-w-[264px] min-h-[40px]'}>
                    <img width={200} height={40} src={icon} alt="icon" className={'w-full py-[13px] brightness-0 invert'}/>
                </a>
            </div>
       </footer>
    </>
  );
}
