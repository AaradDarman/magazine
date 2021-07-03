import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styled from "styled-components";
import { hexToRGBA } from "../utils/colorHelper";
const Wraper = styled.div`
  direction: ltr;
  z-index: 1;
  .owl-carousel .owl-nav {
    display: flex;
    justify-content: space-between;
    position: absolute;
    margin: 0;
    top: 50%;
    left: 20px;
    right: 20px;
    pointer-events: none;
  }
  .owl-carousel .owl-nav button.owl-prev,
  .owl-carousel .owl-nav button.owl-next {
    pointer-events: all;
    background-color: rgba(0, 0, 0, 0.2);
    color: ${hexToRGBA("#f8f5ef", 0.6)};
    border-radius: 2rem;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    transition: all 300ms ease-in-out;
    box-shadow: 0 0 0 1px rgb(16 22 26 / 15%), 0 0 0 rgb(16 22 26 / 0%),
      0 0 0 rgb(16 22 26 / 0%);
  }

  button.owl-next span,
  button.owl-prev span {
    font-size: 2rem;
  }
  .owl-theme .owl-nav [class*="owl-"]:hover {
    background: ${({ theme }) => hexToRGBA(theme.accent, 0.8)};
    color: #f8f5ef;
  }
  .owl-item.active > div::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 200px;
    width: 100%;
    transition: 0.3s;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      #000000 70%
    );
    opacity: 0.85;
    z-index: 1;
    pointer-events: none;
  }
  .owl-dots {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
  }
  .owl-dots .owl-dot span {
    width: 30px;
    height: 3px;
    border-radius: 0;
    transition: all 300ms ease-in-out;
  }
  .owl-dots .owl-dot span {
    width: 30px;
    transition: all 300ms ease-in-out;
  }
  .owl-dots .owl-dot.active span {
    background-color: ${({ theme }) => theme.accent};
  }
`;

const CarouselItem = () => {
  const Wraper = styled.div`
    background: url("images/family.jpg") no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    z-index: 1;
    a:hover {
      color: inherit;
    }
    .carousel-caption {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      text-align: right;
      width: 80%;
      margin-bottom: 30px;
      right: 15%;
      left: auto;
      direction: rtl;
    }
    @media (min-width: 993px) {
      .carousel-caption {
        width: 30%;
      }
    }
    .carousel-caption h2 {
      background-color: ${({ theme }) => theme.accent};
      clip-path: polygon(0 0, 100% 0, 100% 100%, 6% 100%);
      padding: 8px 8px 8px 30px;
      margin: 0;
      font-size: 1.3rem;
    }
    .carousel-caption div:first-of-type {
      display: flex;
      background-color: #020101;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 6% 100%);
      padding: 8px 8px 8px 30px;
      margin: 1rem 0;
      font-size: 1rem;
    }
    .carousel-caption div:last-child {
      display: inline-block;
      color: #020101;
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        #ffffff 50%
      );
      padding: 8px 8px 8px 30px;
      font-size: 1rem;
    }
    .carousel-caption div:last-child a {
      display: flex;
      align-items: center;
      transition: all 300ms ease-in-out;
    }
    .carousel-caption div:last-child a:hover {
      color: ${({ theme }) => theme.accent};
    }
    .carousel-caption div:last-child a:hover::after {
      transform: translateX(-20%);
    }
    .carousel-caption div:last-child a:after {
      content: "";
      display: inline-block;
      width: 20px;
      height: 33px;
      clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
      background-color: ${({ theme }) => theme.accent};
      margin-right: 1rem;
      transition: all 300ms ease-in-out;
    }
  `;
  return (
    <Wraper>
      <div className="carousel-caption">
        <h2>
          <a href="#">
            چگونه دوستان و خانواده خود را به تجربه بازی‌های ویدیویی دعوت کنیم؟
          </a>
        </h2>
        <div className="d-none d-lg-block">
          <a href="">روش‌ هایی جذاب برای جذب هم بازی</a>
        </div>
        <div className="d-none d-lg-block">
          <a href="">مطالعه می‌کنم ...</a>
        </div>
      </div>
    </Wraper>
  );
};

const HomeCarousel = () => {
  return (
    <Wraper className="home-carousel">
      <OwlCarousel
        className="owl-theme"
        // stageOuterClass="owl-p"
        loop
        nav
        dots
        autoplay
        autoplayHoverPause
        responsiveClass={true}
        autoplayTimeout={5000}
        autoplaySpeed={2000}
        navSpeed={2000}
        dotsSpeed={2000}
        navText={["<span>〈︁</span>", "<span>〉︁</span>"]}
        responsive={{
          0: {
            items: 1,
          },
          490: {
            items: 1,
          },
          576: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1200: {
            items: 1,
          },
        }}
      >
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </OwlCarousel>
    </Wraper>
  );
};

export default HomeCarousel;
