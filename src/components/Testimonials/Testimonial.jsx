import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/shopping.png";
import profilePic2 from "../../img/portfolio.png";
import profilePic3 from "../../img/MovieSearch.png";

const Testimonial = () => {
  const clients = [
    {
      img:profilePic1,
      review:
        "Developed a full-stack e-commerce platform using Node.js, Express.js, and Mongo DB Ensured data integrity and security by integrating authentication middleware and encryption techniques.Designed responsive front-end interfaces using HTML5, CSS3, and JavaScript.",
    },
    {
      img:profilePic2,
      review:
        "Developed a responsive personal portfolio website using ReactJS.Using React hooks like useState and useContext for efficient state management and dark/light mode functionality. Integrated Email.js and enhanced interactivity with SwiperJS and Framer Motion. ",
    },
    {
      img:profilePic3,
      review:
        "Built a movie search app using HTML, CSS, and JavaScript, integrating the Fetch API to fetch data from an external database. Designed an intuitive, visually appealing UI to enhance user experience. Implemented real-time search functionality with error handling for seamless usability.",
    }
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>A Glimpse into </span>
        <span>My Projects </span>
        <span>😎...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img style={{height:"200px", width:"200px"}} src={client.img} alt="" />
                <span >{client.review}</span>
                
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
