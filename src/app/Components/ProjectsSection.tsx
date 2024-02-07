"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "BodyLife_Shop",
    description: "This is an e-commerce project created on a fullstack course from coderhouse",
    image: "/images/projects/bodyl.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sauloviniciust/bodylife",
    previewUrl: "bodylife.vercel.app/",
  },
  {
    id: 2,
    title: "Koan dj page",
    description: "dj/producer webpage",
    image: "/images/projects/koan.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sauloviniciust/koan",
    previewUrl: "https://koan.vercel.app/",
  },
  {
    id: 2,
    title: "Spacechronix dj page",
    description: "dj/producer webpage",
    image: "/images/projects/spacechronix.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sauloviniciust/spcx",
    previewUrl: "https://spacechronix.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 5,
    title: "Weatherly",
    description: "This site provides meteorological informations",
    image: "/images/projects/weatherly.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sauloviniciust/weatherly",
    previewUrl: "https://appweatherlyapp.netlify.app/#/current-location",
  },
  {
    id: 6,
    title: "Gitsearchub",
    description: "Search for repositories from github",
    image: "/images/projects/gitsearch.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sauloviniciust/gitsearchub",
    previewUrl: "https://gitsearchub.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: React.SetStateAction<string>) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-cyan-700 mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-stone-500  flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
