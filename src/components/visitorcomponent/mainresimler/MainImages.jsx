import './mainimage.css'
import React, { useState, useEffect } from 'react';

const MainImages = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const resim1= "https://img.freepik.com/free-photo/3d-render-code-testing-functional-test-usability_107791-16607.jpg?w=1380&t=st=1687297563~exp=1687298163~hmac=528d0be00dffa79455708a8e57307964ecd67ea56910db930b691e6ab37c354e";
  const resim2="https://img.freepik.com/free-photo/businessman-blurred-background-with-people-connection-icon-business-leadership-chart_1258-123385.jpg?w=1380&t=st=1687297599~exp=1687298199~hmac=da45dbdb7b99808b66a695b92e4c5bc3dd3d919ee58863165e635fa545460036"
  const resim3 ="https://img.freepik.com/free-photo/golden-pawn-chess-move-out-from-line-different-thinking-leading-change-disruption-unique-concept-by-3d-render_616485-47.jpg?w=1380&t=st=1687297641~exp=1687298241~hmac=dda80e004720dca6844a9ce77038bba0c2adeca55f67ffd397f5e41f3387fc7e"
  const resmi4 ="https://img.freepik.com/free-photo/contact-us-communication-support-service-assistance-concept_53876-128103.jpg?w=1380&t=st=1687297656~exp=1687298256~hmac=a2d006f01403f2b8ce807dad0446e676e61501b6a17db925136d5bf5a4ec7124"
  const images = [resim1,resim2,resim3,resmi4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="resim-container">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Resim ${index + 1}`}
        className={`resim ${index === currentImage ? 'active' : ''}`}
      />
    ))}
  </div>
  );
};

export default MainImages;
