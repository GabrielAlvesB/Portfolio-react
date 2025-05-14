import { useState } from 'react';
import './ImageHover.css';

const ImageHover = ({ image1, image2, alt1, alt2 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="image-hover-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image1} 
        alt={alt1} 
        className={`base-image ${isHovered ? 'fade-out' : 'fade-in'}`}
      />
      <img 
        src={image2} 
        alt={alt2} 
        className={`hover-image ${isHovered ? 'fade-in' : 'fade-out'}`}
      />
    </div>
  );
};

export default ImageHover; 