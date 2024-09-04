import Link from "next/link";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export async function generateMetadata() {
  return {
    title: "Portfolio Adam Durigon",
    description: "Portfolio of Adam Durigon",
  };
}

const HomePage = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#000d1a]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#01fffb]">Hello, je suis</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          ADAM DURIGON
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Développeur Full Stack
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Développeur Full Stack, je me spécialise dans la création
          d&apos;applications web et mobiles en utilisant React, NodeJS, et
          Tailwind.
        </p>
        <div className="flex items-center">
          <Link
            href="#work"
            scroll={true}
            className="text-white group border-2 border-white px-6 py-3 my-2 flex items-center justify-center hover:border-[#000d1a] hover:text-[#000d1a] hover:bg-[#01fffb] duration-300"
          >
            <span className="flex-shrink-0">Voir mes réalisations</span>
            <span className="group-hover:rotate-90 duration-300 ml-3">
              <HiArrowNarrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
