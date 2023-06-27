import "./main.css";
import React, { useEffect, useState } from 'react';

const Main = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const resim1= "https://images.unsplash.com/photo-1513735539099-cf6e5d559d82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80";
  const resim2="https://github.com/EmreSahbudak/image/blob/main/webhosting.png?raw=true"
  const resim3 ="https://github.com/EmreSahbudak/image/blob/main/contact-us.png?raw=true"
  const resmi4 ="https://github.com/EmreSahbudak/image/blob/main/wearehiring.png?raw=true"
  const images = [resim1,resim2,resim3,resmi4];

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <div className="slidervisitor">
      <div className="slider-image-container">
        <img className="slider-image" src={images[currentImage]} alt="Resim" />
        <button className="slider-button left" onClick={prevImage}>◀</button>
        <button className="slider-button right" onClick={nextImage}>▶</button>
      </div>
    </div>
  );
};

export default Main;
