import {
  Check,
  Tv,
  Leaf,
  Film,
  Globe,
  Users,
  DollarSign,
  Zap,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NumberTicker from "./ui/number-ticker";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ShowcaseCard } from "./showcase-card";
import ShineBorder from "./ui/shine-border";
import { PurchaseForm } from "./purchase-form";

export default function EfficientTVShowcase() {
  return (
    <div className="min-h-screen bg-transparent" id="#preorder-main">
      <div className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Invest in the future of entertainment.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            By Investing in us, you are investing in the future of entertainment
            and in America.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {[
            {
              icon: Tv,
              title: "American Production",
              description: "Expanding American production capacity",
            },
            {
              icon: Leaf,
              title: "Sustainable",
              description:
                "Promoting sustainable and environmentally conscientious manufacturing",
            },
            {
              icon: Film,
              title: "Hollywood's Best",
              description: "Advancing Hollywood's greatest entertainment",
            },
            {
              icon: Globe,
              title: "Global Internet",
              description: "Expanding global internet access",
            },
            {
              icon: Users,
              title: "Fostering Connections",
              description:
                "Fostering connections among homes, culture, and communities",
            },
            {
              icon: Zap,
              title: "All-in-One Solution",
              description: "Seamless access to your favorite content",
            },
          ].map((feature, index) => (
            <Card key={index} className="bg-transparent p-0">
              <CardHeader className="flex flex-col items-center">
                <feature.icon className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle className="text-center text-md">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="bg-transparent rounded-lg shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            What&apos;s Included
          </h2>
          <ul className="space-y-4">
            {[
              `State-of-the-art <b>65 inch 8K Display</b> Internet-Enabled Smart Television`,
              "One registration",
              "One monthly subscription of $139.99",
              "One access point",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-white">
                <Check className="w-6 h-6 text-white mr-2" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </section>

        <section className="text-center mb-8 animate-pulse">
          <h2 className="text-2xl font-bold mb-2">
            Premium Entertainment Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              "Paramount",
              "NBCUniversal",
              "Warner Bros. Discovery",
              "Lionsgate",
              "Sony",
              "Netflix",
              "Amazon",
              "Apple",
              "Disney",
            ].map((partner, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm"
              >
                {partner}
              </span>
            ))}
          </div>
        </section>
        <section>
          <ShowcaseCard />
        </section>

        <ShineBorder
          className="relative flex h-auto mt-8 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl"
          color={"white"}
        >
          <section className="bg-transparent text-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Preorder Now</h2>
              <p className="text-xl">A premium product with unmatched value</p>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <div className="text-4xl font-bold">
                $
                <NumberTicker value={3000} className="text-white" delay={0.1} />
              </div>
            </div>
            <p className="text-center mt-4 text-xs">
              Future plans include bundling with T-Mobile 5G and Starlink
              Satellite Internet for even greater value.
            </p>
            <div className="mt-8 space-y-12">
              <div className="mb-4">
                <PurchaseForm />
              </div>
            </div>
          </section>
        </ShineBorder>
      </div>
    </div>
  );
}
