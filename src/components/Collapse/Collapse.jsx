import React, { useState } from "react";
import ChevronUp from "../../assets/images/chevron-up.svg";

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleCollapse}>
        <div className="collapse__container">
          <h3 className="collapse__title">{title}</h3>
          <img className={`collapse__icon ${isOpen ? "collapse__chevron" : ""}`} src={ChevronUp} alt={isOpen ? "down" : "up"} />
        </div>
      </div>
      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        <div className="content-inner">{description}</div>
      </div>
    </div>
  );
};

export default Collapse;
