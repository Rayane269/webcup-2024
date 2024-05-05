import React from "react";
import brand1 from "$/storage/brand/br-1.png";
import brand2 from "$/storage/brand/br-2.svg";
import brand3 from "$/storage/brand/br-3.svg";
import brand4 from "$/storage/brand/br-4.webp";


const Partners = () => {
  return (
    <div
      data-aos="zoom-out"
      className="py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10"
    >
      <div className="container">
        <div className="grid grid-cols-4 gap-3 place-items-center opacity-50">
          <img src={brand1} alt="brand" className="w-[80px] dark:invert" />
          <img src={brand2} alt="brand" className="w-[80px] dark:invert" />
          <img src={brand3} alt="brand" className="w-[80px] dark:invert" />
          <img src={brand4} alt="brand" className="w-[80px] dark:invert" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
