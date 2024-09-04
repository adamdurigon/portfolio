import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-300 bg-[#000d1a] ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#01fffb]">
              A propos
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Salut c&apos;est Adam, je suis ravi de vous présenter mon
              portfolio.
            </p>
          </div>
          <div>
            <p>
              Adam Durigon, développeur full-stack passionné depuis un an, à
              l&apos;aise en React, NodeJS et Tailwind. Agile avec la méthode
              SCRUM, je favorise la collaboration pour des solutions créatives
              et efficaces. Disponible pour votre projet !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
