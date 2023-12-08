"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OneTimeCards from "./OneTimeCards";

const OneTimeCardsSlider = () => {
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
        <OneTimeCards
          to="https://training.alanixfitcoaching.com/otc-fal"
          plan="Fit & Lean"
          bullets={[
            "Personalized Nutrition",
            "Strength Training",
            "Supplementation Advice",
            "Progress Tracking",
          ]}
        />
      </div>

      <div>
        <OneTimeCards
          to="https://training.alanixfitcoaching.com/otc-wl"
          plan="Weight Loss"
          bullets={[
            "Customized Meal Plan",
            "Targeted Workouts",
            "Daily Habit Transformation",
            "Progress Monitoring",
          ]}
        />
      </div>

      <div>
        <OneTimeCards
          to="https://training.alanixfitcoaching.com/otc-br"
          plan="Body Revive"
          bullets={[
            "Strength and Cardio Training",
            "Nutrition Strategies",
            "Lifestyle Optimization",
            "Metabolic Conditioning",
          ]}
        />
      </div>
    </Slider>
  );
};

export default OneTimeCardsSlider;
