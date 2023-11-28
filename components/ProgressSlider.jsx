"use client";

import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from "../public/assets/testimonials/1.png";
import testimonial10 from "../public/assets/testimonials/10.png";
import testimonial11 from "../public/assets/testimonials/11.png";
import testimonial12 from "../public/assets/testimonials/12.png";
import testimonial2 from "../public/assets/testimonials/2.png";
import testimonial3 from "../public/assets/testimonials/3.png";
import testimonial4 from "../public/assets/testimonials/4.png";
import testimonial5 from "../public/assets/testimonials/5.png";
import testimonial6 from "../public/assets/testimonials/6.png";
import testimonial7 from "../public/assets/testimonials/7.png";
import testimonial8 from "../public/assets/testimonials/8.png";
import testimonial9 from "../public/assets/testimonials/9.png";

const ProgressSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="mx-[10%] w-[80%]">
      <div>
        <Image src={testimonial1} alt="slide 1" className="slick-slide-img" />
      </div>

      <div>
        <Image src={testimonial2} alt="slide 2" className="slick-slide-img" />
      </div>
      <div>
        <Image src={testimonial3} alt="slide 3" className="slick-slide-img" />
      </div>
      <div>
        <Image src={testimonial4} alt="slide 4" className="slick-slide-img" />
      </div>
      <div>
        <Image src={testimonial5} alt="slide 5" className="slick-slide-img" />
      </div>
      <div>
        <Image src={testimonial6} alt="slide 6" className="slick-slide-img" />
      </div>
      <div>
        <Image src={testimonial7} alt="slide 7" className="slick-slide-img" />
      </div>
      <div>
        <Image src={testimonial8} alt="slide 8" className="slick-slide-img" />
      </div>
      <div>
        <Image src={testimonial9} alt="slide 9" className="slick-slide-img" />
      </div>
      <div>
        <Image src={testimonial10} alt="slide 10" className="slick-slide-img" />
      </div>
      <div>
        <Image src={testimonial11} alt="slide 11" className="slick-slide-img" />
      </div>
      <div>
        <Image src={testimonial12} alt="slide 12" className="slick-slide-img" />
      </div>
    </Slider>
  );
};

export default ProgressSlider;
