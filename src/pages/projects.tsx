import { type NextPage } from "next";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IconLink } from "~/components/IconLink";
import { projects } from "data/data";
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
        {/* <SwiperSlide>
            <div className="bg-slate-600/40 text-center shadow-lg mt-4">
              <img className="mb-3 shadow-lg w-full opacity-60 h-60" src="https://res.cloudinary.com/dciqdps03/image/upload/v1685792269/MBA_PLACEMENTS_-_Google_Chrome_03-06-2023_17_06_38_ftijhr.png" alt="placement portal"/>
              <h1 className="text-lg"> John Doe </h1>
              <p className="text-sm mt-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <p className="bg-gradient-to-t from-purple-700 to-purple-500 p-2 m-3 rounded-md text-lg font-semibold flex flex-row flex-wrap justify-center">ReactJS,MongoDB,Express,NodeJS</p>
              <div className="flex flex-row justify-center">
                <IconLink url="www.github.com/PradeepRaoK" icon="github"></IconLink>
              </div>
            </div>
        </SwiperSlide> 
        <SwiperSlide>
            <div className="bg-slate-600/40 text-center shadow-lg mt-4">
              <img className="mb-3 shadow-lg w-full opacity-60 h-60" src="https://res.cloudinary.com/dciqdps03/image/upload/v1685791077/Pradeep_Rao_K_-_Google_Chrome_03-06-2023_16_46_22_zoaadr.png" alt="product designer"/>
              <h1 className="text-lg"> John Doe </h1>
              <p className="text-sm mt-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <p className="bg-gradient-to-t from-purple-700 to-purple-500 p-2 m-3 rounded-md text-lg font-semibold flex flex-row flex-wrap justify-center">ReactJS,MongoDB,Express,NodeJS</p>
              <div className="flex flex-row justify-center">
                <IconLink url="www.github.com/PradeepRaoK" icon="github"></IconLink>
              </div>
            </div>
        </SwiperSlide>  */}
        {projects.projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-slate-600/40 text-center shadow-lg mt-4">
              <img className="mb-3 shadow-lg w-full opacity-60 h-60" src={project.img} alt={project.title} />
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
