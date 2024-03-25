import React from "react";
import earthRotation from "../assets/rotation_of_the_planet_earth.mp4";
import solarSysten from "../assets/solar_system.mp4";
import chanarayaan from "../assets/chandrayaan.mp4";
import chanarayaan2 from "../assets/chandrayaan2.mp4";
import moonLandingSites from "../assets/moon_landing.mp4";
import vikramLander from "../assets/Vikram.mp4";
import { Carousel } from "react-bootstrap";
import { labels } from "../resources/en-us";
const HeroSection = () => {
  const herosectionCarousel = [
    {
      videoName: earthRotation,
      caption: labels.welcome,
    },
    {
      videoName: solarSysten,
      caption: labels.solarSystem,
    },
    {
      videoName: chanarayaan,
      caption: labels.chandrayaan,
    },
    {
      videoName: chanarayaan2,
      caption: labels.chandrayaan2,
    },
    {
      videoName: moonLandingSites,
      caption: labels.moonLandingSites,
    },
    {
      videoName: vikramLander,
      caption: labels.vikramLander,
    },
  ];

  const singleSlide = ({ videoName, caption }) => {
    return (
      <Carousel.Item>
        <video autoPlay loop muted>
          <source src={videoName} type="video/mp4" />
        </video>
        <Carousel.Caption>{caption}</Carousel.Caption>
      </Carousel.Item>
    );
  };

  return (
    <div className=" absolute top-0 left-0 -z-50 w-full h-full">
      <div className=" relative">
        <Carousel>
          {herosectionCarousel.map((slide) => singleSlide(slide))}
          {/* <Carousel.Item interval={15000}>
            <video autoPlay loop muted className=" w-full h-full">
              <source src={earthRotation} type="video/mp4" />
            </video>
            <div className=" absolute top-[30%] left-[10%]">
              <h1 className=" font-extrabold text-3xl text-orange-600 leading-tight">
                {labels.welcomeToThe}
              </h1>
              <h1 className=" font-extrabold text-[4rem] text-white p-0 m-0 leading-tight">
                {labels.indianSpace}
              </h1>
              <h1 className=" font-extrabold text-[4rem] text-white leading-tight">
                {labels.reaserchOrganization}
              </h1>
            </div>
            <Carousel.Caption>My first slide</Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={15000}>
            <video autoPlay loop muted>
              <source src={solarSysten} type="video/mp4" />
            </video>
            <Carousel.Caption>My second slide</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={15000}>
            <video autoPlay loop muted>
              <source src={earthRotation} type="video/mp4" />
            </video>
            <Carousel.Caption>My third slide</Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
