import isro_image from "../assets/ISRO-Color.svg";
import { languages, navbarLinks } from "../resources/en-us";
import { IoSearch } from "react-icons/io5";
import enblem from "../assets/Emblem_of_India.png";
import { FormControl, Link } from "@mui/material";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` z-50 flex flex-row fixed top-0 justify-between items-center px-6 py-1 pt-3   bg-gray-900 w-full ${
        scrolled ? "bg-opacity-65" : "bg-opacity-5"
      }`}
    >
      {/* Logo and title */}
      <Link
        href="/"
        underline="none"
        className=" flex flex-row blur-none items-center "
      >
        <div className=" w-16">
          <img
            src={isro_image}
            className=" hover:cursor-pointer"
            alt="ISRO_LOGO"
          />
        </div>
      </Link>
      {/* Navigation list  */}
      <div className="">
        <nav>
          {navbarLinks.map((link) => (
            <Link
              href={link.link}
              underline="none"
              className="px-8  font-sans font-bold"
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
        <div className=" w-8">
          <img src={enblem} alt="GOI_Enblem" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
