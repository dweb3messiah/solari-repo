import React from "react";

const LatestYouLove = () => {
  return (
    <div className="border-b-[0.1px] border-b-primary border-opacity-30">
      <div className="text-white p-4 font-normal pt-16">
        <h2 className="text-xl">Latest you love</h2>
        <div className="flex flex-wrap gap-3 pt-3">
          {latest.map((hash, i) => (
            <div key={i} className="border border-[#505050] rounded-md p-1">
              <p className="text-sm cursor-pointer">{hash.hashtag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestYouLove;

const latest = [
  {
    hashtag: "#MetalCore",
  },
  {
    hashtag: "Dev",
  },
  {
    hashtag: "#solana",
  },
  {
    hashtag: "#Blockchain",
  },
  {
    hashtag: "#Defi",
  },
  {
    hashtag: "#Tokenization",
  },
  {
    hashtag: "#NFT",
  },
  {
    hashtag: "#Web3",
  },
];
