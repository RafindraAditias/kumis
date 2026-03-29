import * as React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative z-[100] font-sans">
      <div className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-24 bg-white/80 backdrop-blur-md">
        <div>
          <h1 className="text-xl font-bold uppercase tracking-widest text-[#0f0f43]">riza portfolio</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  render={
                    <a href="#about" className="font-semibold text-[#0f0f43]">
                      About Me
                    </a>
                  }
                />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  render={
                    <a href="#experience" className="font-semibold text-[#0f0f43]">
                      Experience
                    </a>
                  }
                />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  render={
                    <a href="#projects" className="font-semibold text-[#0f0f43]">
                      Project
                    </a>
                  }
                />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  render={
                    <a href="#contact" className="font-semibold text-[#0f0f43]">
                      Contact
                    </a>
                  }
                />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Toggle Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#0f0f43] p-1 focus:outline-none transition-transform active:scale-95"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col py-2 px-6 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <a
          href="#about"
          onClick={() => setIsOpen(false)}
          className="block py-4 text-[15px] font-bold text-[#0f0f43] border-b border-gray-50 uppercase tracking-widest hover:text-purple-600 transition-colors"
        >
          About Me
        </a>
        <a
          href="#experience"
          onClick={() => setIsOpen(false)}
          className="block py-4 text-[15px] font-bold text-[#0f0f43] border-b border-gray-50 uppercase tracking-widest hover:text-purple-600 transition-colors"
        >
          Experience
        </a>
        <a
          href="#projects"
          onClick={() => setIsOpen(false)}
          className="block py-4 text-[15px] font-bold text-[#0f0f43] border-b border-gray-50 uppercase tracking-widest hover:text-purple-600 transition-colors"
        >
          Project
        </a>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="block py-4 text-[15px] font-bold text-[#0f0f43] uppercase tracking-widest hover:text-purple-600 transition-colors"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Nav;

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <a href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </a>
        }
      />
    </li>
  );
}
