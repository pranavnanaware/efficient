import { Container, Icons } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

import Link from "next/link";
const Navbar = () => {
  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="" height={60} width={120} />
            </Link>
          </div>
          <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center justify-center gap-8">
              <Link href="/about" className="hover:text-foreground/80 text-sm">
                About
              </Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">
                Contact
              </Link>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/preorder"
              className={buttonVariants({
                size: "sm",
                className: "hidden md:flex",
              })}
            >
              PreOrder
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
