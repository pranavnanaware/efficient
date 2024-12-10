"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll>
        <Image
          src={`/tv.png`}
          alt="hero"
          height={1294}
          width={2624}
          className="mx-auto rounded-2xl object-scale-down  h-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
