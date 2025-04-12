import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IconMenu } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { NavLinksT } from "@/lib/types";
import Link from "next/link";
import GetStartedButton from "../ui/get-started-button";
import ThemeToggler from "../themes/theme-toggler";

export default function NavDrawer({ links }: { links: NavLinksT }) {
  return (
    <Drawer>
      <DrawerTrigger asChild className="cursor-pointer flex md:hidden ml-auto">
        <Button size="icon" variant="ghost">
          <IconMenu strokeWidth={1} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="hidden">
          <DrawerTitle />
          <DrawerDescription />
        </DrawerHeader>
        <div className="p-4">
          <ul className="space-y-0.5 pb-1">
            {links.map((item, index) => (
              <li key={index} className="text-base hover:text-primary">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <ThemeToggler/>
          <GetStartedButton className="w-full" size="lg" />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
