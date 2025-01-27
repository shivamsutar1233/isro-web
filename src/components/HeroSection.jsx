import earthRotation from "../assets/hero-india.mp4";
import solarSysten from "../assets/solar_system.mp4";
import chanarayaan2 from "../assets/chandrayaan2.mp4";
import moonLandingSites from "../assets/moon_landing.mp4";
import vikramLander from "../assets/Vikram.mp4";
import { Carousel } from "react-bootstrap";
import { labels } from "../resources/en-us";
import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  const herosectionCarousel = [
    {
      videoName: earthRotation,
      subHeading: labels.welcomeToThe,
      mainHeading1: labels.indianSpace,
      mainHeading2: labels.reaserchOrganization,
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad fugit soluta unde possim.",
      caption: labels.welcome,
    },
    {
      videoName: solarSysten,
      subHeading: labels.welcomeToThe,
      mainHeading1: labels.indianSpace,
      mainHeading2: labels.reaserchOrganization,
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad fugit soluta unde possim.",
      caption: labels.solarSystem,
    },
    {
      videoName: chanarayaan2,
      subHeading: labels.mission,
      mainHeading1: labels.chandrayaan2,
      mainHeading2: "",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad fugit soluta unde possim.",
      caption: labels.chandrayaan2,
    },
    {
      videoName: moonLandingSites,
      subHeading: labels.mission,
      mainHeading1: labels.southPole,
      mainHeading2: labels.moonLanding,
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad fugit soluta unde possim.",
      caption: labels.moonLandingSites,
    },
    {
      videoName: vikramLander,
      subHeading: labels.glimpseOfRover,
      mainHeading1: labels.vikramLander,
      mainHeading2: "",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad fugit soluta unde possim.",
      caption: labels.vikramLander,
    },
  ];

  const singleSlide = ({
    videoName,
    caption,
    subHeading,
    mainHeading1,
    mainHeading2,
    shortDescription,
  }) => {
    return (
      <Carousel.Item interval={10000}>
        <video autoPlay loop muted>
          <source src={videoName} type="video/mp4" />
        </video>
        <div className=" absolute top-[60%] left-[8%] w-[50%] bg-white p-6 rounded-md bg-opacity-10">
          <h1 className=" font-extrabold text-3xl text-orange-600 leading-tight">
            {subHeading}
          </h1>
          <h1 className=" font-extrabold text-[4rem] text-white p-0 m-0 leading-tight">
            {mainHeading1}
          </h1>
          <h1 className=" font-extrabold text-[4rem] text-white leading-tight">
            {mainHeading2}
          </h1>
          <p className=" text-white text-[1.4rem]">{shortDescription}</p>
          <Button
            className=" z-40"
            variant="text"
            sx={{ color: "#fff" }}
            // color="#fff"
            endIcon={<EastIcon />}
          >
            {labels.knowMore}
          </Button>
        </div>
        <Carousel.Caption>{caption}</Carousel.Caption>
      </Carousel.Item>
    );
  };

  return (
    <div className=" relative top-0 left-0 z-50 w-full h-full">
      <div className=" relative">
        <Carousel>
          {herosectionCarousel.map((slide) => singleSlide(slide))}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
