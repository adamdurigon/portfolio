// Work.js
import Image from "next/image";
import { data } from "../data/data";

const Work = () => {
  const project = data;

  return (
    <div name="work" className="w-full text-gray-300 bg-[#000d1a]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#01fffb]">
            Mes projets
          </p>
          <p className="py-6">
            Vous trouverez dans cette section mes dernières réalisations
          </p>
        </div>

        {/* Container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 h-[100%] gap-12">
          {/* Grid Item */}
          {project.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="relative shadow-md shadow-[#01fffb] rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="responsive"
                  width={500}
                  height={300}
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="hover:opacity-80 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Voir le code
                      </button>
                    </a>
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className=" hover:opacity-80 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Voir le site
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
