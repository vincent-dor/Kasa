import { useState } from "react";
import left from "../../assets/images/chevron-left.svg";
import right from "../../assets/images/chevron-right.svg";

const Slideshow = ({ slides }) => {
  const [order, setOrder] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setOrder(order === 0 ? slides.length - 1 : order - 1);
    } else {
      setOrder(order === slides.length - 1 ? 0 : order + 1);
    }
  };

  const totalSlides = slides.length;
  const showArrows = totalSlides > 1;

  return (
    <div className="slideshow">
      {showArrows && <img src={left} alt="Left Arrow" className="slideshow__leftArrow" onClick={() => handleArrowClick("left")} />}
      <img src={slides[order]} alt="Current Slide" className="slideshow__pictures" />
      {showArrows && (
        <span className="slideshow__counter">
          {order + 1}/{totalSlides}
        </span>
      )}
      {showArrows && <img src={right} alt="Right Arrow" className="slideshow__rightArrow" onClick={() => handleArrowClick("right")} />}
    </div>
  );
};

export default Slideshow;
