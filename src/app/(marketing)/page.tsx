"use client";

import { Container, Icons, Wrapper } from "@/components";
import Model from "@/components/model";
import { HeroScrollDemo } from "@/components/tv-scroll";
import { Button } from "@/components/ui/button";
import { FeaturesSectionDemo } from "@/components/ui/feature-section";
import { Input } from "@/components/ui/input";
import { LampContainer } from "@/components/ui/lamp";
import { SparklesText } from "@/components/ui/magic-text";
import SectionBadge from "@/components/ui/section-badge";
import { homePageData } from "@/constants";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
// Import the JSON content

const HomePage = () => {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      {/* hero */}
      <Wrapper>
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

        <Container>
          <div className="flex flex-col items-center justify-center py-20 h-full">
            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                <Image
                  src="/icons/sparkles-dark.svg"
                  alt="✨"
                  width={24}
                  height={24}
                  className="w-4 h-4"
                />
                {homePageData.hero.buttonText}
              </span>
            </button>

            <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
              <h1 className="text-2xl md:text-5xl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                <SparklesText
                  key={homePageData.hero.heading}
                  text={homePageData.hero.heading}
                  className="text-white text-2xl md:text-5xl"
                />
              </h1>
              <p className="text-base md:text-md text-foreground/80 mt-6 text-center">
                {homePageData.hero.description}
              </p>
            </div>
          </div>
        </Container>
      </Wrapper>
      {/* TV Section */}
      <Wrapper className="hidden md:flex flex-col items-center justify-center py-12 relative">
        <Spline scene="https://prod.spline.design/h4HLC1qc65aBLAba/scene.splinecode" />
      </Wrapper>
      {/* Features Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title={homePageData.featuresSection.badgeTitle} />
            <h2 className="text-xl lg:text-2xl font-semibold mt-6">
              {homePageData.featuresSection.heading}
            </h2>
          </div>
        </Container>
        <Container>
          <div className="flex items-center justify-center mx-auto mt-8">
            <Icons.feature className="w-auto h-80" />
          </div>
        </Container>
        <FeaturesSectionDemo />
      </Wrapper>
      {/* Smart TV Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <LampContainer>
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <h2 className="text-3xl lg:text-4xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                {homePageData.smartTvSection.heading}
              </h2>
              <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                {homePageData.smartTvSection.description}
              </p>
            </div>
          </LampContainer>
        </Container>

        {/* Waitlist Form */}
        <Container className="relative z-[999999]">
          <div className="flex items-center justify-center w-full -mt-40">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
              <div className="flex flex-col items-start gap-4 w-full">
                <h4 className="text-xl md:text-2xl font-semibold">
                  {homePageData.waitlist.heading}
                </h4>
                <p className="text-base text-muted-foreground">
                  {homePageData.waitlist.description}
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                <form
                  action="#"
                  className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs"
                >
                  <Input
                    required
                    type="email"
                    placeholder={homePageData.waitlist.inputPlaceholder}
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    variant="secondary"
                    className="w-full md:w-max"
                  >
                    {homePageData.waitlist.submitButtonText}
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  {homePageData.waitlist.privacyPolicyText}{" "}
                  <Link href="#">
                    {homePageData.waitlist.privacyPolicyLinkText}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default HomePage;
