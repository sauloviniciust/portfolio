import React from "react";
interface IProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: IProps) => {
  const buttonStyles = isSelected
    ? "text-orange-500 bg-neutral-950 border-cyan-500"
    : "text-cyan-400 bg-neutral-950 border-cyan-950 hover:border-orange-700";
  return (
    <button  onClick={() => onClick(name)} 
    className={`${buttonStyles} rounded-full border-2 
    px-6 py-3 text-xl cursor-pointer`}>
      {name}
    </button>
  );
};

export default ProjectTag;
