import React, { useState, useEffect } from "react";
import axios from "axios";
import image17 from "./images/image17.jpg"
const Weather = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');

  const fetchRandomImage = () => {
    setLoading(true);
    axios.get('https://api.unsplash.com/photos/random', {
      params: {
        query: 'dark',
        orientation: 'landscape',
        client_id: 'afKfb2qd3L3JtR2P6WDeBeelS8_qzN56pY_skpji-4w'
      }
    })
    .then(response => {
      setBackgroundImage(response.data.urls.regular);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching random image:', error);
      setLoading(false);
      setBackgroundImage(image17);
    });
  };

  useEffect(() => {
    fetchRandomImage();
    fetchData();
  }, []); // Fetch random image on component mount

  const fetchData = () => {
    setLoading(true);
    axios.get('https://api.api-ninjas.com/v1/quotes?category=', {
      headers: {
        'x-api-key': 'UXxjs2OZbTXUANEBqJ+H6g==avnm3Uz9Y9p2jne7'
      }
    })
    .then(response => {
      setData(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  };

  const handleBackgroundClick = () => {
    if (!loading) {
      fetchRandomImage();
      fetchData();
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat object-cover bg-fixed bg-center bg-opacity-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      onClick={handleBackgroundClick}
    >
      <div className="min-h-screen  flex-col flex items-center justify-center ">
          <div className="text-7xl font-extrabold mb-4">
            <span className="bg-clip-text text-white bg-gradient-to-r from-pink-500 to-violet-500">
           <div className="bg-clip-text text-white bg-gradient-to-r from-pink-500 to-violet-500">

           "{data[0]?.quote}"
  
           </div>
            </span>
          </div>
      </div>
    </div>
  );
};

export default Weather;
