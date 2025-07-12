import React from "react";
import { Button } from "@/components/ui/button"
import benefitImg from "@/public/images/benefits/benefits_01.png"
import Image from "next/image";



const BenefitSection: React.FC = () => {
  const benefits = [
    {
      title: "Passive Income",
      description: "Earn reflections automatically.",
    },
    {
      title: "Deflationary Growth:",
      description: "Token burns increase value.",
    },
    {
      title: "Community Voice:",
      description: "Influence key decisions.",
    },
    {
      title: "Security:",
      description: "Liquidity locked, regular audits.",
    },
    {
      title: "Charitable Impact:",
      description: "Support global causes with every transaction.",
    },
    
  ];

  return (
    <section id="benefits" className="bg-[#231106] text-white ">
      <div className="container max-w-5xl mx-auto py-16 px-8 lg:px-0">
        <div className="text-center mb-8 ">
          <h2 className="font-[700] text-[32px] md:text-[49px] text-[#94571C]">
            Holders&apos; Benefits
          </h2>
        </div>

        {/* ========== content area ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
                {benefits.map((benefit, index) => (
                    <div key={index} className="mb-5">
                        <h4 className="text-2xl font-semibold text-[#94571C] mb-1">{benefit.title}</h4>
                        <p className="">{benefit.description}</p>
                    </div>
                ))}
                <p>Connect your wallet to join shibaglow&apos;s presale</p>
                <Button className="bg-slate-50 text-slate-700 cursor-pointer hover:bg-slate-200 uppercase mt-1 font-semibold">Connect Wallet</Button>
                
            </div>
            <div className="order-1 md:order-2">
            <Image src={benefitImg} 
            alt="Benefit Image" 
            height={500}
            width={500}

            blurDataURL={benefitImg.blurDataURL} className="rounded-2xl" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
