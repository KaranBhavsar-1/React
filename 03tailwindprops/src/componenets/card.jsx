import React from "react";

export default function Card({ nfts }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {nfts.map((nft) => (
        <div
          key={nft.index}
          className="flex flex-col rounded-xl p-4 max-w-sm"
          style={{
            border: "0.88px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "saturate(180%) blur(14px)",
            WebkitBackdropFilter: "saturate(180%) blur(14px)",
            background: "rgba(255, 255, 255, 0.05)",
          }}
        >
          <div>
            <img
              src={nft.src}
              alt={nft.name}
              width="350"
              height="350"
              className="rounded-xl object-cover"
            />
          </div>
          <div className="flex flex-col rounded-b-xl py-4">
            <div className="flex justify-between items-center mb-2">
              <h1 className="font-bold text-lg">{nft.desc}</h1>
              <h1 className="font-bold text-lg">Price</h1>
            </div>
            <div className="flex justify-between font-mono text-sm text-gray-300">
              <p>{nft.index}</p>
              <p>{nft.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
