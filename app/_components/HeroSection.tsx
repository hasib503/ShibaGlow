"use client";

import { Button } from "@/components/ui/button";
import React from "react";

import imgOne from "@/public/images/imgOne.png";
import Image from "next/image";
import Countdown from "./Countdown";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#231106]  text-white">
      <div className="container max-w-4xl mx-auto py-16 pt-36">
        <div className="grid grid-cols-2 gap-12 mb-8">
          <div className="">
            <h1 className="text-5xl font-bold font-Grobold ">
              The Meme Coin for Community, Fun, and Financial Rewards
            </h1>
            <p className="my-4 text-xl font-poppins">
              Fortune Favors the bold : ShibaGlow’s Presale " Turn 100$ into
              $100,000 with ShibaGlow — The 1000x meme coin that’s about to make
              you laugh all the way to the bank !
            </p>
            <span>Connect your wallet to join shibaglow's presale</span> <br />
            <Button className="uppercase p-6 my-2 text-xl font-semibold bg-white hover:bg-slate-100 cursor-pointer text-slate-800">
              Connect Wallet
            </Button>
          </div>
          <div className="grid gap-4">
            <div className="relative w-full h-64 flex items-center justify-center">
              <Image src={imgOne} alt="Image One" objectFit="cover" />
            </div>
            <Countdown targetDate="2025-12-31T23:59:59" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
