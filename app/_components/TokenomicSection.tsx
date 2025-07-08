import React from 'react'
import ChartPieLabel from './PiChart'

const TokenomicSection: React.FC = () => {
  return (
    <section className="bg-[#231106] text-white ">
      <div className="container max-w-5xl mx-auto py-16 px-4 lg:px-0">
        <div className="text-center mb-8 ">
          <h2 className="font-[700] text-[49px] text-[#94571C]">Tokenomics</h2>
          <span className="font-[500] text-[20px] md:text-[30px]">1 Trillion SGLOW</span>
        </div>

        {/* ========== content area ========== */}
        <div className="">
          <ChartPieLabel />
        </div>
      </div>
    </section>
  )
}

export default TokenomicSection