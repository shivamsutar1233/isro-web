import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Divider, IconButton, Link } from "@mui/material";
const Footer = () => {
  const getSocialMediaSection = () => {
    return (
      <section className=" flex items-center gap-2 justify-end">
        <section className="pr-2 text-slate-300">Follow us</section>
        <Divider orientation="vertical" variant="middle" flexItem />
        <IconButton>
          <InstagramIcon className="text-slate-300" />
        </IconButton>
        <IconButton>
          <YouTubeIcon className="text-slate-300" />
        </IconButton>
        <IconButton>
          <GitHubIcon className="text-slate-300" />
        </IconButton>
      </section>
    );
  };

  const getCompanySection = (links) => {
    return (
      <section className=" flex flex-col justify-between gap-2">
        {links.map((link) => (
          <Link underline="none" href={`#${link}`} className="!text-slate-600">
            {link}
          </Link>
        ))}
      </section>
    );
  };

  const getCompanyNameSection = () => {
    return (
      <a
        className=" flex text-2xl text-slate-300 font-bold cursor-pointer no-underline"
        href="/"
      >
        Isro
        <section className="">.</section>
      </a>
    );
  };

  const importantFooterLinks = [
    [
      "RTI",
      "Feedback",
      "Contact us",
      "FAQ",
      "Website Policy",
      "Copyright Policy",
    ],
    [
      "Hyper Linking Policy",
      "Terms of Use",
      "Archives",
      "Web Information Manager",
      "Space Policy",
      "Parliament Questions",
      "PIB",
    ],
    [
      "e-Saral Hindi Vakyakosh",
      "Related links",
      "Check Your 7th CPC Pension Revision Status",
      "Pensioners' Portal",
      "Site Map",
      "Help",
    ],
  ];

  return (
    <footer className="px-4 py-6 flex flex-col gap-2 justify-between h-[20rem]">
      <section className=" grid grid-cols-12 ">
        <section className=" col-span-12 lg:col-span-1">
          {getCompanyNameSection()}
        </section>
        {importantFooterLinks.map((section) => (
          <section className=" col-span-6 lg:col-span-3 text-slate-600">
            {getCompanySection(section)}
          </section>
        ))}
        <section className=" col-span-12 lg:col-span-2 justify-end">
          {getSocialMediaSection()}
        </section>
      </section>
      <Divider variant="middle" className="border-1 !border-slate-800" />
      <section className=" text-center text-slate-300">
        {new Date().getFullYear()} Alpha Square Official. All Rights Reserved.
        Designed by{" "}
        <a
          href="https://www.instagram.com/hemz.designs/"
          target="_blank"
          className="text-decoration-none"
        >
          Hemanth kotla
        </a>
      </section>
    </footer>
  );
};

export default Footer;
