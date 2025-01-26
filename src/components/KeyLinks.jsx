import { labels } from "../resources/en-us";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { GiThorHammer } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

const KeyLinks = () => {
  const dummyKeyLinksData = [
    {
      icon: <AiOutlineVideoCamera color="white" size={20} />,
      title: labels.pressRelease,
      link: "/#" + labels.pressRelease,
      description: labels.pressReleaseDescription,
    },
    {
      icon: <MdWork color="white" size={20} />,
      title: labels.careers,
      link: "/#" + labels.careers,
      description: labels.careersDescription,
    },
    {
      icon: <PiStudentFill color="white" size={20} />,
      title: labels.students,
      link: "/#" + labels.students,
      description: labels.studentsDescription,
    },
    {
      icon: <GiThorHammer color="white" size={20} />,
      title: labels.tenders,
      link: "/#" + labels.tenders,
      description: labels.tendersDescription,
    },
  ];

  const singleKeyLinkTile = ({ icon, title, description, link }) => {
    return (
      <div className=" border-1 bg-slate-600 bg-opacity-15 border-slate-700 rounded-xl  p-3 w-[20rem] h-[10rem] hover:bg-opacity-5  relative">
        <div className="p-1">{icon}</div>
        <h3 className=" text-gray-300 text-[1.4rem]">{title}</h3>
        <p className=" text-gray-500 text-[1rem]">{description}</p>
        <a
          href={link}
          className=" absolute right-3 top-3 p-1 bg-white rounded-full "
        >
          <FaArrowRight size={15} color="black" />
        </a>
      </div>
    );
  };
  return (
    <div className="px-16 py-10">
      <h1 className=" text-gray-300 text-[2rem]">{labels.keyLinks}</h1>
      <p className=" text-gray-500 text-[1rem]">{labels.keyLinksDescription}</p>
      <div className=" flex gap-3 justify-between items-center">
        {dummyKeyLinksData.map((keyLink) => singleKeyLinkTile(keyLink))}
      </div>
    </div>
  );
};

export default KeyLinks;
