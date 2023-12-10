import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { SliderSettings } from "../../utils/common";

const Residencies = () => {
  return (
    <div>
      <section className="r-wrapper">
        <div className="innerWidth paddings r-container">
          <div className="r-head flexColStart">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular Residencies</span>
          </div>
          <Swiper {...SliderSettings}>
            <SliderButtons />
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className=" flexColStart r-card">
                  <img src={card.image} alt="home" />
                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                  </span>
                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Residencies;

const SliderButtons = () => {
   const Swiper=useSwiper();
  return (
    <div className=" flexCenter r-buttons">
      <button onClick={()=> Swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> Swiper.slideNext()}>&gt;</button>
    </div>
  );
};
