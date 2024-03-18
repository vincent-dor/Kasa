import React, { useState, memo } from "react";
import ChevronUp from "../../assets/images/chevron-up.svg";

const Collapse = memo(({ title, description, className, detailCardClassName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  const collapseClass = detailCardClassName ? `${detailCardClassName}` : "collapse";

  return (
    <div className={collapseClass}>
      <div className="collapse__header" onClick={toggleCollapse}>
        <div className="collapse__container">
          <h3 className="collapse__title">{title}</h3>
          <img className={`collapse__icon ${isOpen ? "collapse__chevron" : ""}`} src={ChevronUp} alt={isOpen ? "down" : "up"} />
        </div>
      </div>
      <div className={`collapse__content ${isOpen ? "open" : ""} `}>
        <div className="collapse__text">
          {description instanceof Array ? (
            <ul className={`collapse__description ${className ? className : ""}`}>
              {description.map((item, index) => (
                <li key={index}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
});

export default Collapse;
