"use client";
import Container from "@/components/global/container";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="" height={60} width={120} />
            </Link>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/about" className="hover:text-foreground/80 text-sm">
                About
              </Link>
              <Link
                href="/preorder"
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Preorder
              </Link>
            </nav>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-14 left-0 w-full bg-background border-t border-border">
            <ul className="flex flex-col items-center gap-4 py-4">
              <Link href="/about" className="hover:text-foreground/80 text-sm">
                About
              </Link>
              <Link
                href="/preorder"
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Preorder
              </Link>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
