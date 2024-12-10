import { Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-8 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-16">
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-start justify-start md:max-w-[200px]">
          <span className="text-neutral-200 text-sm flex items-center">
            Built in USA.
            <Heart className="w-3.5 h-3.5 ml-1 fill-primary text-primary" />
          </span>
          <span className="text-neutral-200 text-sm mt-2">
            Efficient LLC.
            <br />
            Los Angeles, CA
          </span>
        </div>

        <div className="mt-10 md:mt-0 flex flex-col justify-between w-full max-w-[200px]">
          <h3 className="text-base font-medium text-white">Company</h3>
          <ul className="mt-4 text-sm text-muted-foreground">
            <li className="">
              <Link
                href=""
                className="hover:text-foreground transition-all duration-300"
              >
                About Us
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href=""
                className="hover:text-foreground transition-all duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href=""
                className="hover:text-foreground transition-all duration-300"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <p className="text-sm text-muted-foreground mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} Pelican Holdings. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
