import { memo } from "react";
import { NavLinksT } from "@/lib/types";
import Link from "next/link";
import NavDrawer from "./nav-drawer";
import GetStartedButton from "../ui/get-started-button";
import ThemeToggler from "../themes/theme-toggler";

// Move navLinks outside component to prevent recreation on each render
export const navLinks: NavLinksT = [
  { label: "Hire Talent", href: "#" },
  { label: "Find Work", href: "#" },
  { label: "Learn", href: "#" },
  { label: "Community", href: "#" },
  { label: "Support", href: "#" },
];

// Extract logo component for better reusability
export const Logo = () => (
  <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-sm text-white">
    Logo
  </div>
);

// Extract brand name component
export const BrandName = () => (
  <h1 className="text-2xl font-bold font-space-grotesk text-primary">
    Inno Farm
  </h1>
);

// Optimize nav link rendering
const NavItems = ({ links }: { links: NavLinksT }) => (
  <ul className="flex items-center gap-4">
    {links.map((item) => (
      <li key={item.label} className="text-sm hover:text-primary">
        <Link href={item.href}>{item.label}</Link>
      </li>
    ))}
  </ul>
);

function Header() {
  return (
    <header className="fixed top-0 z-20 w-full border-b bg-transparent backdrop-blur-lg p-4">
      <div className="container mx-auto flex items-center">
        <div className="flex items-center gap-2">
          <Logo />
          <BrandName />
        </div>
        <nav className="ml-auto hidden md:flex items-center gap-4">
          <NavItems links={navLinks} />
          <ThemeToggler />
          <GetStartedButton />
        </nav>
        <NavDrawer links={navLinks} />
      </div>
    </header>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(Header);
