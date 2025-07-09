import React from "react";
import Timeline from "./Timeline";

const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="bg-[#3f1d00] text-white ">
      <div className="container max-w-5xl mx-auto py-16">
        <div className="text-center mb-8">
          <h2 className="font-[700] text-[49px]">Roadmap</h2>
        </div>

        {/* ========== content area ========== */}
        <div className="py-6">
          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
