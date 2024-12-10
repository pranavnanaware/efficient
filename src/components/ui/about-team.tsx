"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function AboutCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-full md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-52 lg:h-52 sm:rounded-tr-lg sm:rounded-tl-lg object-contain object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-white"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.h3
                      layoutId={`description-${active.mail}-${id}`}
                      className="font-bold text-white"
                    >
                      {active.mail}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-black"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-blue-600 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4 max-h-96 overflow-y-auto">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-black text-xs md:text-sm lg:text-base pb-10 flex flex-col items-start gap-4 dark:text-neutral-400"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-800 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white text-center md:text-left"
                >
                  {card.title}
                </motion.h3>

                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-white text-center md:text-left text-sm"
                >
                  {card.description}
                </motion.p>
                <motion.h3
                  layoutId={`title-${card.mail}-${id}`}
                  className="font-medium text-white text-center md:text-left text-sm"
                >
                  {card.mail}
                </motion.h3>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-blue-600 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "CEO/Founder",
    title: "Joseph Proffitt",
    src: "/joseph.png",
    mail: "jp@efficient-tv.com",
    ctaText: "Know More",
    ctaLink: "https://www.linkedin.com/in/joseph-g-proffitt/",
    content: () => {
      return (
        <p className="text-black">
          He then joined Lionsgate Studios, one of the most reputable film and
          television studios in the world, to build a streaming television
          business, focusing on operating all aspects of the business including
          financial planning and analysis, marketing strategy, data synthesis,
          and cross-functional team leadership. At the core of Joseph&apos;s
          leadership philosophy is understanding human psychology and
          motivation. <br />
          Joseph’s vision for his company is not just about creating a valuable
          business but about innovating the media and entertainment landscape
          through a blend of creativity, technology, and human-centric
          leadership. <br /> While Joseph brings many strengths to the table, he
          is also aware of areas for improvement. Joseph works hard to address
          tendencies toward emotional impulses overshadowing objective analysis,
          and he recognizes the importance of setting realistic, near-term goals
          while pursuing long-term ambitions.
          <br /> Joseph enjoys spending time with his wife and two children in
          Los Angeles, staying physically active, surfing and giving back to the
          community and church through volunteering and community service.
        </p>
      );
    },
  },
  {
    description: "CTO/Co-Founder",
    title: "Pranav Nanaware",
    mail: "pn@efficient-tv.com",
    src: "/pranav.JPG",
    ctaText: "Know More",
    ctaLink: "https://pranav.wiki/",
    content: () => {
      return (
        <p className="text-black">
          Pranav Nanaware is a skilled software engineer with a Master’s in
          Computer Science from the University of Massachusetts, Dartmouth
          (2024), and a Bachelor’s in Computer Engineering from Pune University,
          India. He has extensive experience in software development, cloud
          computing, and DevOps, leading teams to build scalable architectures
          for products like e-commerce marketplaces and esports platforms.{" "}
          <br /> An entrepreneur at heart, Pranav excels at solving real-world
          problems with technology, as demonstrated by his wins in hackathons
          and startup weekends. His strong technical skills and leadership
          potential make him a standout in software engineering and innovation.
        </p>
      );
    },
  },
];
