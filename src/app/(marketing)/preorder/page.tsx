import { Wrapper } from "@/components";
import Showcase from "@/components/showcase";
import PreorderHero from "@/components/ui/preorder-hero";
import React from "react";

const PreOrder = () => {
  return (
    <>
      <Wrapper>
        <PreorderHero />

        <Showcase />
      </Wrapper>
    </>
  );
};

export default PreOrder;
