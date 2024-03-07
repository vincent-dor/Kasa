import ImgBanner from "../../assets/images/background-banner.png";
import React from "react";

const Banner = React.memo(() =>   {
  return (
    <div className="banner">
      <img className="banner__image" src={ImgBanner} alt="logo de l'agence kasa" />

      <p className="banner__text">Chez vous, partout et ailleurs</p>
    </div>
  );
})

export default  Banner;
