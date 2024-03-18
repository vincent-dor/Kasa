import React from "react";
import star from "../../assets/images/star.svg";
import starFilled from "../../assets/images/star_filled.svg";

const Rating = ({ rating }) => {
    const generateStars = () => {
      const stars = [];
      Array.from({ length: 5 }).forEach((_, index) => {
        stars.push(
          <img
            key={index + 1}
            className={`star ${index < rating ? 'filled' : ''}`}
            src={index < rating ? starFilled : star}
            alt={index < rating ? "Filled star" : "Empty star"}
          />
        );
      });
      return stars;
    };
  
    return (
      <div className="rating">
        {generateStars()}
      </div>
    );
  };
  
  export default Rating;