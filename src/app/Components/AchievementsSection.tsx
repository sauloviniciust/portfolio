"use client";
import React from "react";
import dynamic from "next/dynamic";


const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Certificates",
    value: "7",
  },
  {
    metric: "Top10 Student",
    value: "5",
  },
  {
    metric: "Years",
    value: "1",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-2 border-orange-700 bg-neutral-950 rounded-md 
      py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-stone-300 text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="pt-BR"
                  className="text-stone-300 text-4xl font-bold"
                 
                />
                {achievement.postfix}
              </h2>
              <p className="text-cyan-600 text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
