// Navbar.tsx
import { images } from "@/assets/images";
import { Button } from "./ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FiMenu } from "react-icons/fi"; // Import only the hamburger icon

// Define the props type for Navbar
interface NavbarProps {
  className?: string; // Optional className prop
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="container-padding">
        <nav className="w-full flex justify-between flex-row md:flex-col sm:flex-row lg:flex-row items-center">
          <div className="flex gap-2 items-center">
            <img src={images.logo} alt="logo" className="h-12 w-auto sm:h-20" />
          </div>

          <ul className="hidden md:flex justify-between items-center gap-5">
            <li>
              <a href="" className="text-base font-medium bg-transparent  sm:mr-4">Home</a>
            </li>
            <li>
              <NavigationMenu className="!p-0">
                <NavigationMenuList>
                  <NavigationMenuItem className="relative group">
                    <NavigationMenuTrigger className="text-base font-medium bg-transparent ">About Us</NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 mt-1 group-hover:block w-[20vw] p-4 transition-opacity duration-200 ease-in-out">
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">Our Mission</NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">Our Vision</NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">Our History</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="relative group">
                    <NavigationMenuTrigger className="text-base font-medium bg-transparent ">Admission</NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 mt-1 group-hover:block w-[20vw] p-4 transition-opacity duration-200 ease-in-out">
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">How to Apply</NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">Tuition Fees</NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">Scholarships</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="relative group">
                    <NavigationMenuTrigger className="text-base font-medium bg-transparent ">News</NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 mt-1 group-hover:block w-[20vw] p-4 transition-opacity duration-200 ease-in-out">
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">Latest Updates</NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">Events</NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">Announcements</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <a href="" className="text-base font-medium bg-transparent  sm:mr-4">Contact</a>
            </li>
          </ul>

          <a href="">
            <Button className="bg-primary rounded-full sm:block hidden">Join Now</Button>
          </a>
          <div className="md:hidden flex items-center">
            <button aria-label="Menu">
              <FiMenu size={24} className="" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
