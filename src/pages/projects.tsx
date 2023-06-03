import { type NextPage } from "next";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IconLink } from "~/components/IconLink";
import { projects } from "data/data";
import Image from "next/image";
const Projects: NextPage = () => {

  return (
    <>
      <div className="container mx-auto max-w-md px-2">
        <h1 className="text-4xl text-purple-300">Projects</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        speed={2000}
        autoplay={{
          delay: 2000,
        }}
        modules={[Autoplay]}
      >
        {projects.projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-slate-600/40 text-center shadow-lg mt-4">
              <Image className="mb-3 shadow-lg w-full opacity-60 h-60" src={project.img} alt={project.title} width={1366} height={648}/>
              <h1 className="text-lg">{project.title}</h1>
              <p className="text-sm mt-2">{project.description}</p>
              <p className="bg-gradient-to-t  from-indigo-700 to-blue-500 p-2 m-3 rounded-md text-lg font-semibold flex flex-row flex-wrap justify-center">{project.tags.join('')}</p>
              <div className="flex flex-row justify-center">
                <IconLink url={project.github} icon="github"></IconLink>
              </div>
            </div>
          </SwiperSlide>
))}

      </Swiper>
      </div>
    </>
  );
};

export default Projects;
