import { type NextPage } from "next";
import { Typewriter } from "react-simple-typewriter"
import { motion } from "framer-motion"
import Image from "next/image";

const Home: NextPage = () => {
  const words:Array<string> = ['Developer','Student']
  return (
    <>
      
      <motion.div
            animate={{y:[20,0],opacity:[0,1],repeatCount:1}}
            transition={{ delay: 1,duration:1/2 }}
            className="fade flex justify-center items-center flex-col h-full pb-20">
                <div className="overflow-hidden w-44 h-44 rounded-full border-2 border-slate-200 relative mx-auto cursor-pointer"><Image src="/profile.jpeg" alt="Profile Image" className="w-full h-full object-cover scale-[1.5] hover:scale-[1.6] sm:grayscale hover:grayscale-0 transition-all duration-500 ease-in-out" loading="eager" width={256} height={256} /></div>
                <h1 className="text-3xl text-white my-[20px] cursor-default">PRADEEP RAO K</h1>
                <a href="https://drive.google.com/file/d/1nqGoJ4w6xYhdRDVGgwbiwYjaVOm3bYI_/view?usp=drive_link" className="text-white p-2 bg-gradient-to-tl from-indigo-600 to-blue-500 rounded-md">Download Resume</a>
                <h3 className="text-xl mt-4  cursor-default">I am a <Typewriter words={words} loop={0} cursor /></h3>
      </motion.div>

    </>
  );
};

export default Home;
