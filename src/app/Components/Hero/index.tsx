"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiVite,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const HeroSection = () => {
  return (
    <section className="lg:py-16 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center sm:text-left">
          <h1 className="text-stone-300 mb-4 text-4xl sm:text-5xl 
                        lg:text-6xl lg:leading-normal font-extrabold">
            
          <span className="text-transparent bg-clip-text 
            bg-gradient-to-r from-cyan-300 to-cyan-800">
              Hello, I&apos;m
          </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Saulo",
                1000,
                "a Brazilian",
                1000,
                "a Student",
                1000,
                "a Full-stack Developer",
                1000,
                "a Dreamer",
                1000,
               
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex flex-col gap-2 text-orange-600 mb-6 mr-2">
            <p className="text-sm sm:text-lg lg:text-xl">
              React | Next | Vite | Typescript | Node | Tailwind | JavaScript |
              HTML5 | CSS | Bootstrap
            </p>
            <div className="flex gap-2 text-3xl md:text-4xl lg:text-5xl">
              <FaReact />
              <TbBrandNextjs />
              <SiVite />
              <SiTypescript />
              <FaNodeJs />
              <SiTailwindcss /> <SiJavascript />
              <FaHtml5 />
              <FaCss3Alt />
              <FaBootstrap />
            </div>
          </div>
          <div>
            <Link
              href="https://github.com/sauloviniciust"
              target="blank"
              className="px-6 font-bold inline-block py-3 w-full rounded-full mr-4 sm:w-fit  
              from-primary-500 to-secondary-500 bg-gradient-to-r from-cyan-800 to-cyan-400
            text-black hover:bg-gradient-to-l"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/sauloviniciust/"
              target="blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full 
                 mt-3"
            >
              <span
                className="px-6 font-bold inline-block py-3 w-full rounded-full mr-4 sm:w-fit  
              from-primary-500 to-secondary-500 bg-gradient-to-r from-cyan-400 to-cyan-800
            text-black hover:bg-gradient-to-l"
              >
                Linkedin
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div
            className="rounded-full w-[250px] h-[250px] lg:w-[400px] 
            lg:h-[400px] relative"
          >
            <Image
              src="/image01.png"
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
