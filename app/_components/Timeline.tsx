const Timeline = () => {
  const items = [
    {
      title: "Phase 1: Launch (Q1 2025)",
      points: [
        "Official Launch On BSC",
        "Liquidity Lock For 5 Years",
        "Community Channels Live",
        "First Burn Event (1%)",
      ],
      side: "right",
    },
    {
      title: "Phase 2: Growth (Q2 2025)",
      points: [
        "Listings On PancakeSwap, CoinMarketCap, And CoinGecko",
        "Viral Marketing Campaigns",
        "Community-Voted Charitable Donation",
      ],
      side: "left",
    },
    {
      title: "Phase 3: Expansion (Q3 2025)",
      points: [
        "Launch ShibaGlow Dashboard",
        "Introduce Staking Pools",
        "Begin CEX Listing Discussions",
      ],
      side: "right",
    },
    {
      title: "Phase 4: Utility (Q4 2025)",
      points: [
        "Launch ShibaGlow Wallet",
        "Gamification And Mini-Games",
        "Partner With Merchants For SGLOW Payment Adoption",
      ],
      side: "left",
    },
  ];

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-16">
      {/* Vertical line */}
      <div className="absolute left-8  md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] w-[2px] bg-white z-0"></div>

      <div className="space-y-16 relative z-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center md:justify-between relative"
          >
            {/* Left content */}
            {item.side === "left" && (
              <div className="w-4/5 ml-10 md:ml-0 md:w-1/2 md:pr-8 text-right z-10">
                <div className="bg-[#ffcbcb1a] border border-white text-white text-start p-6 rounded-[10px]">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Center Dot */}
            <div className="absolute left-4 md:left-1/2 transform  -translate-x-1/2 z-20">
              <div className="w-5 h-5 bg-yellow-400 rounded-full border-4 border-white shadow-[0_0_16px_0_rgba(253,224,71,0.7)]"></div>
            </div>

            {/* Right content */}
            {item.side === "right" && (
              <div
                className="w-4/5 ml-10 md:ml-0 md:w-1/2 md:pl-8 md:absolute text-left"
                style={{ left: "50%" }}
              >
                <div className="bg-[#ffcbcb1a] border border-white text-white p-6 rounded-[10px]">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
