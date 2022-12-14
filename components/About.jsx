import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-x-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className=" uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600"> I am not your normal developer</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            nesciunt incidunt aliquam, dolor ratione ex. Nulla ut maiores soluta
            esse, hic aliquid fugit a! Eius officia odio possimus iure ipsam
            assumenda consequuntur! Neque saepe, necessitatibus, dolorum iusto
            molestiae maxime, ea praesentium impedit autem corrupti illo! Nemo
            eveniet quibusdam nam quos.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            nesciunt incidunt aliquam, dolor ratione ex. Nulla ut maiores soluta
            esse, hic aliquid fugit a! Eius officia odio possimus iure ipsam
            assumenda consequuntur! Neque saepe, necessitatibus, dolorum iusto
            molestiae maxime, ea praesentium impedit autem corrupti illo! Nemo
            eveniet quibusdam nam quos.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/../public/assets/about.jpg"
            width="100%"
            height="100%"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
