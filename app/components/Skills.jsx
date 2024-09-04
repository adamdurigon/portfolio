import React from "react";
import Image from "next/image";
import HTML from "@/public/html.png";
import CSS from "@/public/css.png";
import JavaScript from "@/public/javascript.png";
import ReactImg from "@/public/react.png";
import Node from "@/public/node.png";
import Tailwind from "@/public/tailwind.png";
import Mongo from "@/public/mongo.png";
import TypeScript from "@/public/typescript.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full md:h-screen bg-[#000d1a] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#01fffb]">
            Skills
          </p>
          <p className="py-4">Voici les technologies que j&apos;utilise</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#01fffb] hover:scale-110 duration-500">
            <Image
              className="w-20 mx-auto"
              src={HTML}
              alt="HTML logo"
              width={80}
              height={80}
            />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#01fffb] hover:scale-110 duration-500">
            <Image
              className="w-20 mx-auto"
              src={CSS}
              alt="CSS logo"
              width={80}
              height={80}
            />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#01fffb] hover:scale-110 duration-500">
            <Image
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript logo"
              width={80}
              height={80}
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#01fffb] hover:scale-110 duration-500">
            <Image
              className="w-20 mx-auto"
              src={ReactImg}
              alt="React logo"
              width={80}
              height={80}
            />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#01fffb] hover:scale-110 duration-500">
            <Image
              className="w-20 mx-auto"
              src={Node}
              alt="Node.js logo"
              width={80}
              height={80}
            />
            <p className="my-4">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#01fffb] hover:scale-110 duration-500">
            <Image
              className="w-20 mx-auto"
              src={Mongo}
              alt="MongoDB logo"
              width={80}
              height={80}
            />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#01fffb] hover:scale-110 duration-500">
            <Image
              className="w-20 mx-auto"
              src={Tailwind}
              alt="Tailwind CSS logo"
              width={80}
              height={80}
            />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[#01fffb] hover:scale-110 duration-500">
            <Image
              className="w-20 mx-auto"
              src={TypeScript}
              alt="TypeScript logo"
              width={80}
              height={80}
            />
            <p className="my-4">TypeScript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
