import React from "react";
import sponsorOne from "@/public/images/sponsors/sponsors_01.png";
import sponsorTwo from "@/public/images/sponsors/sponsors_02.png";
import sponsorThree from "@/public/images/sponsors/sponsors_03.png";
import sponsorFour from "@/public/images/sponsors/sponsors_04.png";
import Image from "next/image";

const sponsorCollection = [
  {
    id: 1,
    image: sponsorOne,
    name: "FaZe Banks",
    description: "Youtuber",
  },
  {
    id: 2,
    image: sponsorTwo,
    name: "TJR Trades",
    description: "Community member",
  },
  {
    id: 3,
    image: sponsorThree,
    name: "TJR Trades",
    description: "Sponsor",
  },
  {
    id: 4,
    image: sponsorFour,
    name: "Davinci Jeremie",
    description: "Educator",
  },
];

const SponsorSection: React.FC = () => {
  return (
    <section id="sponsors" className="bg-[#3f1d00] text-white ">
      <div className="container max-w-5xl mx-auto py-16">
        <div className="text-center mb-8">
          <h2 className="font-[700] text-[49px] text-[#94571C]">Sponsors</h2>
          <span className="font-[500] lg:text-3xl">
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
                  className="w-[258px] h-[367px]"
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
