import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const textItems = [
  "Welcome to Our App",
  "Discover Amazing Features",
  "Join Our Community"
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textItems.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-dms bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col items-center justify-center">
      <div className="h-20 overflow-hidden mb-12">
        <h1 
          className={`text-4xl md:text-6xl font-bold text-white text-center transition-transform duration-1000 ease-in-out ${
            isAnimating ? '-translate-y-full' : 'translate-y-0'
          }`}
        >
          {textItems[currentIndex]}
        </h1>
      </div>
      <div className="space-x-6">
        <button className="
          bg-gradient-to-r from-blue-600 to-blue-800 
          hover:from-blue-700 hover:to-blue-900
          text-white font-semibold py-3 px-6 rounded-md
          transform hover:scale-105 transition duration-300 ease-in-out
          shadow-md hover:shadow-lg
        " onClick={() => navigate('/register')}>
          Register
        </button>
        <button className="
          bg-gradient-to-r from-gray-600 to-gray-800
          hover:from-gray-700 hover:to-gray-900
          text-white font-semibold py-3 px-6 rounded-md
          transform hover:scale-105 transition duration-300 ease-in-out
          shadow-md hover:shadow-lg
        " onClick={() => navigate('/login')}>
          Login
        </button>
      </div>
    </div>
  );
}

export default App;