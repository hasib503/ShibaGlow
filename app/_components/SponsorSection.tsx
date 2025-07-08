import React from "react";

import imgOne from "@/public/images/imgOne.png";
import Image from "next/image";

const sponsorCollection = [
  {
    id: 1,
    image: imgOne,
    name: "FaZe Banks",
    description: "Youtuber",
  },
  {
    id: 2,
    image: imgOne,
    name: "TJR Trades",
    description: "Community member",
  },
  {
    id: 3,
    image: imgOne,
    name: "TJR Trades",
    description: "Sponsor",
  },
  {
    id: 4,
    image: imgOne,
    name: "Davinci Jeremie",
    description: "Educator",
  },
];

const SponsorSection: React.FC = () => {
  return (
    <section className="bg-[#3f1d00] text-white ">
      <div className="container max-w-5xl mx-auto py-16">
        <div className="text-center mb-8">
          <h2 className="font-[700] text-[49px] text-[#94571C]">Sponsors</h2>
          <span className="font-[500] text-[30px]">
            Trusted by a growing network of sponsors and <br /> partners in the
            crypto space:
          </span>
        </div>

        {/* ========== content area ========== */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sponsorCollection.map((item) => (
              <div key={item.id}
              className="flex flex-col items-center justify-center">
                <Image
                  className="w-[258px] h-[367px] opacity-100 border-[3px] border-solid rounded-tl-[1000px] rounded-tr-[500px] rounded-br-[1000px] rounded-bl-[500px] border-[#3f1f00] shadow-[#FFC124] shadow-[0px_0px_16px_0px]"
                  src={item.image}
                  alt={item.name}
                  blurDataURL={item.image.blurDataURL}
                />
                <div className="text-center mt-3">
                  <h3 className="font-[600] text-[24px]">{item.name}</h3>
                  <p className="font-[400] text-[16px]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
