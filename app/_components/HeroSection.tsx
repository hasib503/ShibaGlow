"use client";
import { Button } from "@/components/ui/button";
import React from "react";
const Grobold = localFont({ src: "../../font/Grobold.ttf" });
import heroImg from "@/public/images/hero/hero_img.png";
import Image from "next/image";
import Countdown from "./Countdown";
import localFont from "next/font/local";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-[#231106]  text-white">
      <div className="container max-w-4xl mx-auto py-16 lg:pt-36 px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 space-y-6 mb-8">
          <div className="lg:order-2 grid gap-4 ">
            <div className="relative w-full h-64 flex items-center justify-center">
              <Image src={heroImg} className=" lg:scale-130" alt="Image One" objectFit="cover" />
            </div>
            <Countdown targetDate="2025-12-31T23:59:59" />
          </div>
          <div className="lg:order-1">         
            <div className={Grobold.className}>
              <h1 className="text-3xl md:text-[45px] font-bold font-Grobold ">
                The Meme Coin <br /> for Community, Fun, and Financial Rewards
              </h1>
            </div>
            <p className="my-4 text-xl font-poppins">
              Fortune Favors the bold : ShibaGlow&apos;s Presale &apos; Turn 100$ into
              $100,000 with ShibaGlow — The 1000x meme coin that&apos;s about to make
              you laugh all the way to the bank !
            </p>
            <span>Connect your wallet to join shibaglow&apos;s presale</span> <br />
            <Button className="uppercase p-6 my-2 text-xl font-semibold bg-white hover:bg-slate-100 cursor-pointer text-slate-800">
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
