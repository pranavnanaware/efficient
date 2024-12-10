"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function ShowcaseCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-[#25a3eb]">
        <div className="max-w-full">
          <h2 className="text-left text-balance text-xl lg:text-2xl font-semibold text-white">
            Pre-Order Strategy: Validating the Big Idea
          </h2>
          <p className="mt-2 text-left text-neutral-200 text-sm">
            Support our pre-order to validate Efficient’s vision for a
            streamlined, American-made smart TV bundle.
          </p>
          <ul className="mt-2 text-left text-neutral-200 text-sm list-disc list-inside">
            <li className="font-semibold">
              Show market interest in our innovative approach.
            </li>
            <li className="font-semibold">
              Demonstrate traction to secure larger funding.
            </li>
            <li className="font-semibold">
              Accelerate our vision for connected home entertainment.
            </li>
          </ul>
          <p className="mt-2 text-left text-neutral-200 text-sm">
            Your pre-order is a commitment to shaping the future of home
            entertainment.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="text-left text-xl font-semibold text-white">
          Future Equity Opportunity
        </h2>
        <p className="mt-2 text-neutral-200 text-sm">
          By purchasing an Efficient TV:
        </p>
        <div className="mt-2 text-neutral-200 text-sm list-disc list-inside">
          <span>
            You receive a SAFE agreement, valuing your $3,000.00 purchase at a
            percentage ownership in a future funding round.
          </span>
          <br />
          <span>
            Enjoy a 20% discount on the post-money valuation of shares in that
            funding round.
          </span>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-600 min-h-[300px]">
        <div className="max-w-full">
          <h2 className="text-left text-xl font-semibold text-white">
            What you will get.
          </h2>
          <ul className="mt-2 text-neutral-200 text-sm list-disc list-inside">
            <li>A 65 inch 8K Internet-Enabled Smart Television.</li>
            <li>
              Bundled Subscription for $139.99/month (requires one registration
              for access to all included content and services).
            </li>
            <li>1-year manufacturer warranty.</li>
            <li>
              A SAFE agreement will be issued in conjunction with this purchase,
              as described.
            </li>
          </ul>
        </div>
      </WobbleCard>
    </div>
  );
}
