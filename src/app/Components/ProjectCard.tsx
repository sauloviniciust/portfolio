import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface IProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: IProps) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0
        left-0 w-full h-full bg-stone-950 bg-opacity-0 transition-all 
        group-hover:flex group-hover:bg-opacity-80 duration-500 hidden">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full 
            border-cyan-600 hover:border-cyan-600 group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-cyan-300 absolute 
            top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  
            cursor-pointer group-hover/link:text-orange-500" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full 
            border-cyan-600 hover:border-cyan-600 group/link"
          >
            <EyeIcon className="h-10 w-10 text-cyan-300 absolute 
            top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  
            cursor-pointer group-hover/link:text-orange-500" /></Link>
        </div>
      </div>
      <div className="text-cyan-700 rounded-b-xl mt-3 bg-stone-950 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-stone-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
