import { useState } from "react";
import left from "../../assets/images/chevron-left.svg";
import right from "../../assets/images/chevron-right.svg";

const Caroussel = ({ slides }) => {
  const [order, setOrder] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setOrder(order === 0 ? slides.length - 1 : order - 1);
    } else {
      setOrder(order === slides.length - 1 ? 0 : order + 1);
    }
  };

  return (
    <div className="caroussel">
      <img src={left} alt="Left Arrow" className="caroussel__leftArrow" onClick={() => handleArrowClick("left")} />
      <img src={slides[order]} alt="Current Slide" className="caroussel__pictures" />

      <img src={right} alt="Right Arrow" className="caroussel__rightArrow" onClick={() => handleArrowClick("right")} />
    </div>
  );
};

export default Caroussel;
