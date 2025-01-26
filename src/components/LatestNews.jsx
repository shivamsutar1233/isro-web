import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
const LatestNews = () => {
  const singleSilde = ({ image, description, header, link, linkText }) => {
    return (
      <div className=" w-[25rem] relative text-[1rem] text-slate-300 group overflow-hidden">
        <div className="">
          <img
            // src="https://www.isro.gov.in/media_isro/image/hormenu/igrasp.png.webp"
            src={image}
            alt="image"
            className="object-cover aspect-square"
          />
        </div>
        <div className="w-full absolute -bottom-[25%] bg-gradient-to-t from-black via-black  to-black bg-opacity-25 p-2 group-hover:bottom-0 group-hover:to-transparent duration-700">
          {/* <div className="p-1 bg-slate-600 bg-opacity-80 w-fit rounded text-slate-300">
            2 MIN read
          </div> */}
          <p className=" text-center font-bold text-[1.5rem]">{header}</p>
          <p className="text-center font-normal text-[1rem] text-lime-500">
            {" "}
            {description}
          </p>
          <p className="text-right font-normal text-[1rem] w-full">
            <a href={link} className=" !no-underline" target="_blank">
              {linkText}
            </a>
          </p>
        </div>
      </div>
    );
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    initialSlide: 0,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
    fade: true,
    className: "w-full",
  };

  const updates = [
    {
      image:
        "https://www.isro.gov.in/media_isro/image/index/Recent/spadex_rec.png.webp",
      header: "PSLV C60/SPADEX Mission",
      link: "https://www.isro.gov.in/mission_SpaDeX.html",
      linkText: "More on PSLV C60/SPADEX",
      description: `Launched on: December 30, 2024`,
    },
    {
      image:
        "https://www.isro.gov.in/media_isro/image/index/Recent/pslv_c59_rec.png.webp",
      header: "PSLV-C59/PROBA-3 Mission",
      link: "https://www.isro.gov.in/PSLV_C59_PROBA-3_Mission.html",
      linkText: "More on PSLV-C59/PROBA-3",
      description: `
        Launched on: December 05, 2024
        
        `,
    },
    {
      image:
        "https://www.isro.gov.in/media_isro/image/index/Recent/sslvd3_rec160824.png.webp",
      header: "SSLV-D3/EOS-08 Mission",
      link: "https://www.isro.gov.in/Mission_SSLV_D3.html",
      linkText: "More on SSLV-D3/EOS-08",
      description: `
        Launched on: August 16, 2024
        
`,
    },
    {
      image:
        "https://www.isro.gov.in/media_isro/image/index/Recent/gslvf14ind.jpg.webp",
      header: "GSLV-F14/INSAT-3DS MISSION",
      link: "https://www.isro.gov.in/GSLV-F14_INSAT-3DS_mission.html",
      linkText: "More on GSLV-F14/INSAT-3DS",
      description: `
Launched on: February 17, 2024

`,
    },
  ];

  return (
    <div className="px-16 py-10 ">
      <div className="flex justify-between items-start">
        <div className="">
          <h1 className=" text-gray-300 text-[2rem]">Recent Updates</h1>
          <p className=" text-gray-500 text-[1rem]">
            {/* {labels.keyLinksDescription} */}
            Stay up-to date with ISRO's latest programmes
          </p>
        </div>
        <Button
          variant="outlined"
          endIcon={<EastIcon />}
          size="large"
          sx={{ textTransform: "none" }}
          className="!border-1 !bg-slate-600 !border-slate-700 !border-opacity-80 !bg-opacity-15 !text-gray-400"
        >
          All updates
        </Button>
      </div>
      <div className=" flex gap-3 justify-between items-center">
        {updates.map((update) => singleSilde(update))}
        {/* {singleSilde()}
        {singleSilde()}
        {singleSilde()}
        {singleSilde()} */}
      </div>
    </div>
  );
};

export default LatestNews;
