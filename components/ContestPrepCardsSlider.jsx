"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContestPrepCards from "./ContestPrepCards";

const ContestPrepCardsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
        <ContestPrepCards to="#" plan="monthly" price="299" />
      </div>
      <div>
        <ContestPrepCards to="#" plan="16 week" price="900" />
      </div>
    </Slider>
  );
};

export default ContestPrepCardsSlider;
