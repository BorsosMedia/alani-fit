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
        <ContestPrepCards
          // to="https://training.alanixfitcoaching.com/cp-mp"
          to="https://training.alanixfitcoaching.com/cp-mp-nys"
          plan="monthly"
          // price="299"
          price="200"
        />
      </div>
      <div>
        <ContestPrepCards
          // to="https://training.alanixfitcoaching.com/cp-16wp"
          to="https://training.alanixfitcoaching.com/cp-16wp-nys"
          plan="16 week"
          // price="900"
          price="800"
        />
      </div>
    </Slider>
  );
};

export default ContestPrepCardsSlider;
