import React from "react";

const AboutSection: React.FC = () => {
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
        "Every transaction reduces the total supply, making SGLOW increasingly scarce and valuable.",
    },
    {
      title: "Core Values",
      content:
        "Earn passive income with 5% reflections from every transaction.",
    },
    {
      title: "Charitable Impact",
      content: "Support global causes through community-chosen donations.",
    },
    {
      title: "Community Governance",
      content:
        "Participate in key decisions, including burns and charity initiatives.",
    },
    {
      title: "Scalability & Low Fees",
      content:
        "Fast and cost-effective transactions on the Binance Smart Chain",
    },
  ];
  return (
    <section id="about" className="bg-[#231106] text-white ">
      <div className="container max-w-5xl mx-auto py-16 px-4 lg:px-0">
        <div className="text-center mb-8 ">
          <h2 className="font-[700] text-[49px] text-[#94571C]">About Us</h2>
          <span className="font-[500] text-[20px] md:text-[30px]">Welcome to ShibaGlow!</span>
        </div>

        {/* ========== content area ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            {aboutLeftContent.map((item, index) => (
              <div key={index} className="mb-6">
                <h3 className="font-bold text-[32px] text-[#94571C]">
                  {item.title}
                </h3>
                <p className="font-[300] text-md">{item.content}</p>
              </div>
            ))}
          </div>

          <div className="">
            <h3 className="font-bold text-[32px] text-[#94571C] mb-4">
              Core Features
            </h3>
            {aboutRightContent.map((item, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold text-[20px] text-[#94571C]">
                  {item.title}
                </h3>
                <p className="font-[300] text-md">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
