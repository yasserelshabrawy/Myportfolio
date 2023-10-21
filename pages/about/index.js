/* eslint-disable react/jsx-key */
// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";

import { SiNextdotjs, SiAdobephotoshop } from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "login-system website best assienment-ROUTE",
        stage: "2023",
      },

    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Front-End Web Developer course-ROUTE",
        stage: "2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "B.SC Degree in (M.T.E) Mechatronics engineering",
        stage: "2021",
      },
      {
        title: "Front End Web Developer- Route Academy",
        stage: "2023",
      },
    ],
  },
];

import Circles from "../../components/Circles";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Image from "next/image";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[140px]"
      >
        
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center pt-4">
          {/* text */}
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:text-left"
          >
            Captivating <span className="text-accent"> stories </span>
            birth maginficent designs <span className="text-accent "> . </span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 xl:text-left px-2 xl:px-0"
          >
            A highly motivated front-end developer with a substantial background
            in responsive web design for e-commerce platforms. Demonstrates a
            track record of successfully creating interactive and user-centric
            web designs that are adaptable to varying scales and requirements.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-5 "
          >
            <div className=" flex flex-1 gap-x-6">
              {/* experince */}
             
              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:left-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] mx-auto leading-[1.4] w-[100px]">
                  Finished Projects
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:left-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] mx-auto leading-[1.4] w-[100px]">
                  Winning Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* counter */}

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-full after:bg-red-700  after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  className=" flex-1 flex flex-col md:flex-row max-w-max gap-x-2 text-white/60 items-center"
                  key={itemIndex}
                >
                  <div className="font-light md:mb-0"> {item.title}</div>
                  <div className="hidden md:flex ">-</div>
                  <div> {item.stage} </div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => (
                      <div
                        className="text-2xl hover:text-accent text-white"
                        key={itemIndex}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;