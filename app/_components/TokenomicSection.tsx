import React from 'react'
import Image from 'next/image'
import tokenomicImage from '@/public/images/tokenomic/tokenomic.png'
const TokenomicSection: React.FC = () => {

  const transactionleft = [
    "5% Reflections to holders", "2% Liquidity for price stability"
  ]
  const transactionright = [
    "% Burn to reduce supply", "1% Charity for global causes"
  ]

  return (
    <section id="tokenomics" className="bg-[#231106] text-white ">
      <div className="container max-w-5xl mx-auto py-16 px-4 lg:px-0">
        <div className="text-center mb-8 ">
          <h2 className="font-[700] text-[49px] text-[#94571C]">Tokenomics</h2>
          <span className="font-[500] text-[20px] md:text-[30px]">1 Trillion SGLOW</span>
        </div>

        {/* ========== content area ========== */}
        <div className="grid gap-0">
          <Image
            src={tokenomicImage}
            height={500}
            width={600}
            alt="Tokenomic Image"
            className="w-full h-auto scale-80"
          />
          <h4 className='text-xl text-center mb-4'>Transaction Fees:</h4>


          <div className="grid md:grid-cols-2 max-w-[620px] justify-between gap-5 mx-auto">
            <ol className="list-disc">
              {transactionleft.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {item}
                </li>
              ))}
            </ol>

            <ol className='list-disc'>
              {transactionright.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {item}
                </li>
              ))}
            </ol>
          </div>
          <ol>

          </ol>

        </div>
      </div>
    </section>
  )
}

export default TokenomicSection