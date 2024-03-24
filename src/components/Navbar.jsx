import React from "react";
import isro_image from "../assets/ISRO-Color.svg";
import { labels, languages, navbarLinks } from "../resources/en-us";
import { IoSearch } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";
import enblem from "../assets/Emblem_of_India.png";
import { FormControl, Link, MenuItem, Select } from "@mui/material";
const Navbar = () => {
  return (
    <div className=" flex flex-row justify-between items-center p-2 bg-transparent">
      {/* Logo and title */}
      <div className=" flex flex-row py-3">
        <div className=" w-24 ">
          <img src={isro_image} alt="ISRO_LOGO" />
        </div>
        <div className=" border-l border-gray-700 mx-3 ">
          {/* <RxDividerVertical /> */}
        </div>
        <div className="">
          <h1 className=" font-bold text-[1.2rem] font-sans text-white">
            {labels.indianSpace}
          </h1>
          <h1 className=" font-bold text-[1.2rem] font-sans text-white">
            {labels.reaserchOrganization}
          </h1>
          <h1 className="  text-[1.2rem] font-sans text-white">
            {labels.departmentOfSapce}
          </h1>
        </div>
      </div>
      {/* Navigation list  */}
      <div className="">
        <nav>
          {navbarLinks.map((link) => (
            <Link
              href={link.link}
              underline="none"
              className=" p-2 px-5 font-sans font-bold"
              sx={{ fontSize: "1rem", fontWeight: 500 }}
              color={link.label === "Home" ? "orange" : "white"}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      {/* Search and language options with GOI enblem */}
      <div className=" flex  flex-row py-3 justify-between items-center gap-8">
        <div className="flex  flex-row justify-between items-center py-4">
          <div className="">
            <IoSearch size={25} color="white" />
          </div>
          <div className=" self-stretch border-l mx-3 py-0 border-gray-700">
            {/* <RxDividerVertical /> */}
          </div>
          <div className="">
            <FormControl size="small" sx={{ color: "white" }}>
              <Select
                defaultValue={languages.en}
                variant="standard"
                disableUnderline={true}
                className=" text-white"
                color="white"
              >
                {Object.keys(languages).map((language) => (
                  <MenuItem value={languages[language]}>
                    {languages[language]}
                  </MenuItem>
                ))}
              </Select>
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
