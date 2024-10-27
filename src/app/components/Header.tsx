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
     
      <div className="bg-blue-400 flex justify-between items-center px-4 text-white h-14">
   
        <h2 className="font-semibold ml-5 text-xl">
          SPECIAL GIFT FOR MY OUTSTANDING INSTRUCTOR 💎🤍
        </h2>

        <ul className="hidden md:flex gap-6 text-xs">
          <NavItem href="#letter">Letter</NavItem>
          <NavItem href="#reasons">Reasons Why I Admire You</NavItem>
          <NavItem href="#memory">Best Moment</NavItem>
          <NavItem href="#wishes">Gratitude</NavItem>
        </ul>


        <div className="md:hidden">
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
  <li className="bg-slate-500 text-white rounded-md p-2">
    <Link href={href}>{children}</Link>
  </li>
);   
