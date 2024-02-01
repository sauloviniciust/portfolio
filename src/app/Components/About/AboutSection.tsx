"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React.js</li>
        <li>Next.js</li>
        <li>Vite.js</li>
        <li>Node.js</li>
        <li>TypeScript </li>
        <li>Tailwind </li>
        <li>JavaScript</li>
        <li>Zustand</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack on CoderHouse School</li>
        <li>TypeScript on Udemy</li>
        <li>Tailwind on Udemy</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>Web-Developer</li>
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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/aiphoto.png" width={500} height={500} alt={""} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-stone-400 mb-4">About Me</h2>
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
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
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
