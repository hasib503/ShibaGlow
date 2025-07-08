import React from "react";

export default function Home() {
  const aboutLeftContent = [
    {
      title: "Introduction",
      content:
        "ShibaGlow (SGLOW) isn’t just another meme coin—it’s a movement combining viral meme culture with financial rewards and global impact. Built on the Binance Smart Chain (BSC), ShibaGlow is your gateway to a community-focused, hyper-deflationary token that rewards holders and gives back to meaningful causes.",
    },
    {
      title: "Vision",
      content:
        "To redefine meme coins by blending fun, financial inclusion, and charitable impact, creating a community where everyone can laugh, earn, and make a difference.",
    },
  ];

  const aboutRightContent = [
    {
      title: "Hyper-Deflationary Mechanics",
      content:
        "ShibaGlow aims to create a vibrant community that thrives on humor, financial growth, and social responsibility. By leveraging the power of memes, we aim to make cryptocurrency accessible and enjoyable for everyone while supporting charitable initiatives.",
    },
    {
      title: "Core Values",
      content:
        "Community, Transparency, Fun, Financial Growth, Social Responsibility",
    },
  ];

  return (
    <div className="">
      <section className="container max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2
            className="font-[700] text-[49px]">
            About Us
          </h2>
          <span className="font-[500] text-[30px]">Welcome to ShibaGlow!</span>
        </div>

        {/* ========== content area ========== */}
        <div className="grid grid-cols-2 gap-8">
          <div className="">
            {aboutLeftContent.map((item, index) => (
              <div key={index}>
                <h3 className="font-bold text-[32px]">{item.title}</h3>
                <p className="font-[400] text-md">{item.content}</p>
              </div>
            ))}
          </div>

          <div className="">
            {aboutRightContent.map((item, index) => (
              <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
