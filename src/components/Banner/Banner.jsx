import React from "react";

const Banner = React.memo(({ imageUrl, showText }) => {
  return (
    <div className="banner">
      <img className={`banner__image${showText ? "" : " brightness"}`} src={imageUrl} alt="logo de l'agence kasa" />
      {showText && <p className="banner__text">Chez vous, partout et ailleurs</p>}
    </div>
  );
});

export default Banner;
