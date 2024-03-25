import React from "react";
import isro_image from "../assets/ISRO-Color.svg";
import { labels, languages, navbarLinks } from "../resources/en-us";
import { IoSearch } from "react-icons/io5";
import enblem from "../assets/Emblem_of_India.png";
import { FormControl, Link } from "@mui/material";
const Navbar = () => {
  return (
    <div className=" flex flex-row justify-between items-center px-6 py-1 pt-3  bg-transparent bg-opacity-5 bg-slate-600">
      {/* Logo and title */}
      <Link href="/" underline="none" className=" flex flex-row ">
        <div className=" w-24 ">
          <img
            src={isro_image}
            className=" hover:cursor-pointer"
            alt="ISRO_LOGO"
          />
        </div>
        <div className=" border-l border-gray-700 mx-3 ">
          {/* <RxDividerVertical /> */}
        </div>
        <div className="">
          <h1 className=" font-bold text-[1.2rem] font-sans text-white hover:cursor-pointer">
            {labels.indianSpace}
          </h1>
          <h1 className=" font-bold text-[1.2rem] font-sans text-white hover:cursor-pointer">
            {labels.reaserchOrganization}
          </h1>
          <h1 className="  text-[1.2rem] font-sans text-white hover:cursor-pointer">
            {labels.departmentOfSapce}
          </h1>
        </div>
      </Link>
      {/* Navigation list  */}
      <div className="">
        <nav>
          {navbarLinks.map((link) => (
            <Link
              href={link.link}
              underline="none"
              className=" p-2 px-8 font-sans font-bold"
              sx={{ fontSize: "1rem", fontWeight: 500 }}
              color={link.label === "Home" ? "rgb(234 88 12)" : "white"}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      {/* Search and language options with GOI enblem */}
      <div className=" flex  flex-row justify-between items-center gap-8">
        <div className="flex  flex-row justify-between items-center py-4">
          <div className="">
            <IoSearch size={25} color="white" />
          </div>
          <div className=" self-stretch border-l mx-3 py-0 border-gray-700">
            {/* <RxDividerVertical /> */}
          </div>
          <div className="">
            <FormControl size="small" sx={{ color: "white" }}>
              <select
                defaultValue={languages.en}
                className=" border-none outline-none bg-transparent"
              >
                {Object.keys(languages).map((language) => (
                  <option value={languages[language]}>
                    {languages[language]}
                  </option>
                ))}
              </select>
            </FormControl>
          </div>
        </div>
        <div className=" w-12">
          <img src={enblem} alt="GOI_Enblem" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
