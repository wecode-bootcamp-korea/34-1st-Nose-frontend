import React, { useState } from 'react';

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlide = currentIndex => {
    if (currentIndex === slides.length) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    setCurrentIndex(currentIndex);
  };
  const handleSwipe = direction => {
    handleSlide(currentIndex + direction);
  };

  return (
    <div className="">
      <button onClick={() => handleSwipe(-1)} className="buttonNext" />
      <button onClick={() => handleSwipe(1)} className="buttonPrev" />
    </div>
  );
};

export default Slider;
