/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import {motion} from 'framer-motion'

type EducationProp = {
    timeline:string,
    name:string,
    percentage:string,
    designation:string
  }
  
  const education:Array<EducationProp>=[
    {
      timeline:'2014-2018',
      name:'St.Paul English Medium High School, Naravi',
      percentage:'98.08%',
      designation:'High-School'
    },{
      timeline:'2018-2020',
      name:'Jain PU College, Moodbidri',
      percentage:'95.83%',
      designation:'Pre-University'
    },{
      timeline:'2020-Present',
      name:'NMAM Institute of Technology, Nitte',
      percentage:'CGPA - 9.44',
      designation:'B.E.'
    },
  ]


const About: NextPage = () => {
    

  return (
    <>

      <div className="container mx-auto max-w-2xl px-2">
        <h1 className="text-4xl text-purple-300">About me</h1>
        <p className="mt-2">
        I'm a 20-year-old computer science and engineering undergraduate at NMAMIT Nitte in Karnataka, India. I'm passionate about programming, web, and mobile app development, bringing ideas to life through coding. Collaboration is my driving force, thriving in environments where innovative solutions are born from shared ideas. In my free time, I enjoy immersing myself in captivating TV series, movies, and web series, as well as watching cricket matches and playing volleyball. With expertise in HTML, CSS, JavaScript, and experience in React, I continuously update my skills to stay current with the latest technologies. My goal is to contribute to impactful projects that positively influence people's lives. Let's connect and create something extraordinary together!
        </p>
        <h2 className="text-3xl text-purple-300 mt-4">Education</h2>
        <div className="flex flex-col">
            <div>
              {education?.map((item, index) => (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  key={index}
                  className={`mt-4 ml-2 border-l-2 pl-2 py-2`}
                >
                  <h1 className="text-lg text-slate-200 m-0 text-left">{item.name}</h1>
                  <p className="w-full text-sm text-slate-400/50 gap-4 flex">
                    <span>{item.timeline}</span>
                    <span>{item.percentage}</span>
                    <span>{item.designation}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
    </>
  );
};

export default About;