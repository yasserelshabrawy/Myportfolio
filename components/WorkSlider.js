// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Weather",
          path: "/WheatherApi.png",
          link: "https://yasserelshabrawy.github.io/weatherApi/",
        },
        {
          title: "FreshCart",
          path: "/FreshCart.png",
          link: "https://e-commerce-seven-ecru.vercel.app/",
        },
        {
          title: "Login-System",
          path: "/Login-System.png",
          link: "https://yasserelshabrawy.github.io/Login-system/",
        },
        {
          title: "Meal",
          path: "/Meal-site.png",
          link: "https://yasserelshabrawy.github.io/mealsWebsite/",
        },
      ],
    },
    {
      images: [
        {
          title: "Jquery ",
          path: "/Jquery.png",
          link: "https://yasserelshabrawy.github.io/egyptionParty/",
        },
        {
          title: "Quiz ",
          path: "/Quizapp.png",
          link: "https://yasserelshabrawy.github.io/Quiz-app/",
        },
        {
          title: "Portfolio",
          path: "/Portofolio.png",
          link: "https://yasserelshabrawy.github.io/Portfolio/",
        },
        {
          title: "Bookmarker",
          path: "/Bookmarker.png",
          link: "https://yasserelshabrawy.github.io/Bookmarker/",
        },
      ],
    },
  ],
};

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[350px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative group rounded-lg overflow-hidden flex items-center justify-center"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image alt="" src={image.path} width={500} height={300} />
                      {/* OverLay */}
                      <Link
                        href={`${image.link}`}
                        target="blank"
                        className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                      >
                      <div className="ps-2 absolute bottom-0 translate-y-full group-hover:-translate-y-12 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[.2rem]">
                          <div className="delay-100">{image.title}</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            LIVE
                          </div>
                          <div>
                            <RxArrowTopRight className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 " />
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
