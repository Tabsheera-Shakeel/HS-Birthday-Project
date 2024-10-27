import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

export default function Header() {
  return (
    <header className="font-sans">
      <div className="bg-blue-400 flex items-center justify-between px-3 md:px-4 text-white h-auto min-h-14 md:h-16">
      
        <h2 className="font-semibold text-lg md:text-xl leading-snug text-center md:text-left flex-grow mr-2">
          SPECIAL GIFT FOR MY OUTSTANDING INSTRUCTOR 💎
        </h2>
        
        <ul className="hidden md:flex gap-4 md:gap-6 text-xs md:text-sm">
          <NavItem href="#letter">Letter</NavItem>
          <NavItem href="#reasons">Reasons Why I Admire You</NavItem>
          <NavItem href="#memory">Best Moment</NavItem>
          <NavItem href="#gratitude">Gratitude</NavItem>
        </ul>

   
        <div className="md:hidden flex-shrink-0">
          <Sheet>
            <SheetTrigger>
              <Menu size={28} className="cursor-pointer" />
            </SheetTrigger>

            <SheetContent side="right" className="p-4">
              <ul className="flex flex-col gap-4">
                <NavItem href="#letter">Letter</NavItem>
                <NavItem href="#reasons">Reasons Why I Admire You</NavItem>
                <NavItem href="#memory">Best Memory</NavItem>
                <NavItem href="#gratitude">Gratitude</NavItem>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <li className="bg-slate-500 text-white rounded-md p-2 text-center">
    <Link href={href}>{children}</Link>
  </li>
);

