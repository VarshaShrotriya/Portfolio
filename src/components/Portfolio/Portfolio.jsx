import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Shopping from "../../img/shopping.png";
import portfolio from "../../img/portfolio.png";
import MovieSearch from "../../img/MovieSearch.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img style={{height:"250px", width:"400px"}} src={Shopping} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:"250px", width:"400px"}} src={portfolio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:"250px", width:"400px"}} src={MovieSearch} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:"250px", width:"400px"}} src={Shopping} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:"250px", width:"400px"}} src={portfolio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:"250px", width:"400px"}} src={MovieSearch} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
