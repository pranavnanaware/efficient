import {
  Monitor,
  TrendingUp,
  UserCheck,
  Users,
  Share2,
  Wand,
  Film,
  MessageCircleQuestionIcon,
} from "lucide-react";
import React from "react";
import { useId } from "react";

const grid = [
  {
    title: "8K Ultra HD",
    description:
      "Immerse yourself in stunning 8K resolution for crystal-clear visuals.",
  },
  {
    title: "AI Assistant",
    description:
      "Utilize our cutting-edge AI assistant to explore life's questions through film, television, news, and sports. Leveraging advanced video processing and natural language understanding models, we deliver personalized and insightful content recommendations.",
  },
  {
    title: "Household Communication",
    description:
      "Engage in seamless two-way communication with friends and family through our smart television. Use video messages to let your loved ones know you're thinking of them. Share your watchlist, no more texting to ask what to watch next.",
  },
  {
    title: "Web3 Integration",
    description:
      "Enjoy a new way of streaming content that is secure and transparent, giving you more control over what you watch.",
  },
  {
    title: "Interactive Viewing",
    description:
      "Enhance your watching experience by asking questions about your content and receiving instant, insightful answers.",
  },
];

export function FeaturesSectionDemo() {
  return (
    <div className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Row: 3 Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {grid.slice(0, 3).map((feature) => (
            <div
              key={feature.title}
              className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden flex flex-col justify-start"
            >
              <Grid size={20} />
              <p className="text-base font-bold text-white relative z-20">
                {feature.title}
              </p>
              <p className="text-neutral-400 mt-4 text-base font-normal relative z-20">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row: 2 Features Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-center">
          {grid.slice(3, 5).map((feature) => (
            <div
              key={feature.title}
              className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden flex flex-col justify-start"
            >
              <Grid size={20} />
              <p className="text-base font-bold text-white relative z-20">
                {feature.title}
              </p>
              <p className="text-neutral-400 mt-4 text-base font-normal relative z-20">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-900/30 to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/10 stroke-white/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
