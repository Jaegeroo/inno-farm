import {
  IconChevronRight,
  IconCheck,
  IconBrandX,
  IconBrandDiscord,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { Logo, BrandName, navLinks } from "./header";
import { Input } from "../ui/input";
import { AnimatedSubscribeButton } from "../ui/subscribe-button";
import { memo } from "react";
import Link from "next/link";
import LanguageDropdown from "../ui/language-dropdown";

function Footer() {
  const socials = [
    {
      label: "X",
      href: "",
      icon: <IconBrandX strokeWidth={1.5} className="size-4" />,
    },
    {
      label: "Discord",
      href: "",
      icon: <IconBrandDiscord strokeWidth={1.5} className="size-4" />,
    },
    {
      label: "Linkedin",
      href: "",
      icon: <IconBrandLinkedin strokeWidth={1.5} className="size-4" />,
    },
    {
      label: "Telegram",
      href: "",
      icon: <IconBrandTelegram strokeWidth={1.5} className="size-4" />,
    },
    {
      label: "Youtube",
      href: "",
      icon: <IconBrandYoutube strokeWidth={1.5} className="size-4" />,
    },
  ];

  return (
    <footer className="container mx-auto mt-20 border-t">
      <div className="py-5 flex flex-wrap  justify-between space-x-5 gap-y-5 px-4">
        {/* Logo and news letter */}
        <div>
          <div className="flex items-center gap-2">
            <Logo />
            <BrandName />
          </div>
          <h2 className="text-xl font-bold pt-5">Stay Connected</h2>
          <p className="text-muted-foreground text-sm">
            Join our newsletter for the latest updates and exclusive offers.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <Input
              name="email"
              type="email"
              placeholder="youremail@gmail.com"
              className=""
              required
            />
            <AnimatedSubscribeButton>
              <span className="group inline-flex items-center">
                <IconChevronRight className="size-5" strokeWidth={2} />
              </span>
              <span className="group inline-flex items-center px-2">
                <IconCheck className="size-5 mr-1" strokeWidth={2} />
              </span>
            </AnimatedSubscribeButton>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col">
          <div>
            <h3 className="font-semibold text-lg">Links</h3>
            <ul className="space-y-1 pt-2">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Socials Icons */}
        <div className="flex flex-col  ">
          <div>
            <h3 className="font-semibold text-lg text-left">Socials</h3>
            <div className="flex flex-col gap-1 pt-2">
              {socials.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center gap-2 hover:text-primary text-muted-foreground"
                >
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* SEttings */}
        <div className="flex flex-col  ">
          <div>
            <h3 className="font-semibold text-lg text-left">Language</h3>
            <div className="pt-2 flex flex-col gap-2">
              <LanguageDropdown />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-5 grid grid-cols-1 md:grid-cols-2 gap-y-2 justify-between px-4">
        <h5 className="text-center md:text-left text-sm text-muted-foreground">
          © {new Date().getFullYear()} Inno Farm. All rights reserved.
        </h5>
        <div className="flex items-center justify-center text-sm text-muted-foreground md:justify-end gap-4">
          <Link href="#" className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-primary">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-primary">
            Cookie Setting
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
