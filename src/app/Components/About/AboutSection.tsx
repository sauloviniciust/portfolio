"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../TabButton";
import { Items } from "../StylePresset/Items";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-wrap justify-center list-none gap-2 px-2">
        <li>
          <Items>React</Items>
        </li>
        <li>
          <Items>Next.js</Items>
        </li>
        <li>
          <Items>Vite.js</Items>
        </li>
        <li>
          <Items>Node.js</Items>
        </li>
        <li>
          <Items>TypeScript</Items>
        </li>
        <li>
          <Items>Tailwind CSS</Items>
        </li>
        <li>
          <Items>JavaScript</Items>
        </li>
        <li>
          <Items>Zustand</Items>
        </li>
        <li>
          <Items>HTML</Items>
        </li>
        <li>
          <Items>CSS</Items>
        </li>
        <li>
          <Items>VsCode</Items>
        </li>
        <li>
          <Items>Front-End</Items>
        </li>
        <li>
          <Items>Web Development</Items>
        </li>
        <li>
          <Items>Git</Items>
        </li>
        <li>
          <Items>Bash</Items>
        </li>
        <li>
          <Items>Figma</Items>
        </li>
        <li>
          <Items>Photoshop</Items>
        </li>
        <li>
          <Items>Illustrator</Items>
        </li>
        <li>
          <Items>Premiere</Items>
        </li>
        <li>
          <Items>After Effects</Items>
        </li>
        <li>
          <Items>Ableton</Items>
        </li>
        <li>
          <Items>VCV Rack</Items>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="flex flex-wrap justify-center list-none gap-2 px-2">
        <li>
          <Items>Full-Stack Development</Items>
        </li>
        <li>
          <Items>Generative AI</Items>
        </li>
        <li>
          <Items>TypeScript</Items>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="flex flex-wrap justify-center list-none gap-2 px-2">
        <li>
          <Items>React</Items>
        </li>
        <li>
          <Items>JavaScript</Items>
        </li>
        <li>
          <Items>Web Development</Items>
        </li>
        <li>
          <Items>Foundations of generative AI</Items>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-stone-300" id="about">
      <div
        className="lg:grid lg:grid-cols-2 gap-8 items-center 
                      py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <Image
          className="hidden lg:block"
          src="/aiphoto.png"
          width={500}
          height={500}
          alt={""}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-cyan-600 mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            I am currently a front-end developer who has successfully created
            high-performance and responsive web applications using HTML,
            Bootstrap, and JavaScript. I have progressed to using the React
            library, along with the Next.js and Vite.js frameworks, while
            styling applications with Tailwind CSS. I operate independently in
            the design domain, proficiently creating and editing images and
            logos with Illustrator and Photoshop. Additionally, I possess skills
            in video editing and motion graphics using Premiere and After
            Effects. In my professional journey, I&apos;ve collaborated with
            sales teams and undertaken responsibilities in the formatting and
            maintenance of computers, including software configurations. I have
            experience in electrical maintenance and logistics within large
            companies. Currently, I am expanding my skill set by studying
            Backend development and SQL at Coberhouse.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content || "Content not found"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
