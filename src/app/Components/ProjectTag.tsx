import React from "react";

interface IProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: IProps) => {
  const buttonStyles = isSelected
    ? "text-orange-500 border-cyan-500"
    : "text-cyan-400 border-cyan-950 hover:border-orange-700";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
