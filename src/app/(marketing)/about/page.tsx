import { Container, Wrapper } from "@/components";
import { AboutCard } from "@/components/ui/about-team";
import SectionBadge from "@/components/ui/section-badge";
import React from "react";

const About = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center py-12 relative">
      <Container>
        <div className="max-w-md mx-auto text-start md:text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mt-6">
            About The Team
          </h2>
        </div>
      </Container>
      <Container>
        <div className="flex items-center justify-center mx-auto mt-8">
          <AboutCard />
        </div>
      </Container>

      <Container>
        <div className="max-w-md mx-auto text-start md:text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mt-12">
            Our Mission
          </h2>
        </div>
        <Container>
          <div className="flex items-center justify-center mx-auto mt-8">
            <p className="text-xl lg:text-2xl font-semibold">
              To build the ‘everything bundle’ for the entertainment industry
            </p>
          </div>
        </Container>
      </Container>
    </Wrapper>
  );
};

export default About;
