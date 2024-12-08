// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowDown, Camera } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/ui/craft";
import { Button } from "@/components/ui/button";

// Asset imports

const PreorderHero = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center justify-center text-center min-h-screen">
        <h1 className="!mb-0 text-2xl md:text-4xl">
          <Balancer>Pre-Order Your Next-Gen 8K Smart TV</Balancer>
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            Be among the first to own our cutting-edge 65" television and gain
            opportunity to be an early investor. Elevate your home entertainment
            and invest in Efficient LLC’s vision for the future.
          </Balancer>
        </h3>
        <div className="not-prose mt-6 flex gap-2 md:mt-12">
          <Button asChild>
            <Link href="#preorder-main">
              <ArrowDown className="mr-2" />
              Know More{" "}
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default PreorderHero;
