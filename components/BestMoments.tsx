"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";

const variants = {
  slider: "relative w-full h-[280px] sm:h-[400px] md:h-[700px] xl:h-[800px]",
};

const BestMoments = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <section id="best_comments" className="my-[20%]">
      <div className="container">
        <div className="flex flex-col space-y-6 md:space-y-12 xl:space-y-[100px]">
          <div className="flex items-center justify-start">
            <h2 className="title w-full max-w-[300px]">Найкращи моменти</h2>
          </div>
          <div>
            <Slider {...settings}>
              <div className={variants.slider}>
                <Image src="/assets/sliders/slider1.jpg" alt="slider" fill />
              </div>
              <div className={variants.slider}>
                <Image src="/assets/sliders/slider2.jpg" alt="slider" fill />
              </div>
              <div className={variants.slider}>
                <Image src="/assets/sliders/slider3.jpg" alt="slider" fill />
              </div>
              <div className={variants.slider}>
                <Image src="/assets/sliders/slider4.jpg" alt="slider" fill />
              </div>
              <div className={variants.slider}>
                <Image src="/assets/sliders/slider5.jpg" alt="slider" fill />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestMoments;
