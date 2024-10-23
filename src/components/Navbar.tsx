import { images } from "@/assets/images";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FiMenu } from "react-icons/fi"; // Import only the hamburger icon

interface NavbarProps {
  className?: string; // Optional className prop
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
<div className={`w-full ${className} ${isScrolled ? 'dark:bg-gray-900' : 'dark:bg-transparent'} dark:bg-gray-900`}>
      <div className="container-padding ">
        <nav className="w-full flex justify-between flex-row md:flex-col sm:flex-row lg:flex-row items-center  dark:text-white">
          <div className="flex gap-2 items-center">
          <img
              src={isScrolled ? images.logoDark : images.logo}
              alt="logo"
              className={`h-12 w-auto sm:h-20 dark:hidden ${isScrolled ? 'dark:brightness-100' : 'dark:brightness-150'}`}
            />
             <img
              src={images.logo}
              alt="logo"
              className={`h-12 w-auto sm:h-20 dark:block hidden ${isScrolled ? 'dark:brightness-100' : 'dark:brightness-150'}`}
            />
          </div>

          <ul className="hidden md:flex justify-between items-center gap-5">
            <li>
              <a href="" className="text-base font-medium bg-transparent sm:mr-4 dark:hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <NavigationMenu className="!p-0">
                <NavigationMenuList>
                  <NavigationMenuItem className="relative group">
                    <NavigationMenuTrigger className="text-base font-medium bg-transparent dark:hover:text-gray-300">
                      About Us
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 mt-1 group-hover:block w-[20vw] p-4 transition-opacity duration-200 ease-in-out bg-white dark:bg-gray-800 dark:text-white">
                      <NavigationMenuLink className="flex items-center whitespace-nowrap dark:hover:text-gray-300">
                        Our Mission
                      </NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap dark:hover:text-gray-300">
                        Our Vision
                      </NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap dark:hover:text-gray-300">
                        Our History
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="relative group">
                    <NavigationMenuTrigger className="text-base font-medium bg-transparent dark:hover:text-gray-300">
                      Admission
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 mt-1 group-hover:block w-[20vw] p-4 transition-opacity duration-200 ease-in-out bg-white dark:bg-gray-800 dark:text-white">
                      <NavigationMenuLink className="flex items-center whitespace-nowrap dark:hover:text-gray-300">
                        How to Apply
                      </NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap dark:hover:text-gray-300">
                        Tuition Fees
                      </NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap dark:hover:text-gray-300">
                        Scholarships
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="relative group">
                    <NavigationMenuTrigger className="text-base font-medium bg-transparent dark:hover:text-gray-300">
                      News
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 mt-1 group-hover:block w-[20vw] p-4 transition-opacity duration-200 ease-in-out bg-white dark:bg-gray-800 dark:text-white">
                      <NavigationMenuLink className="flex items-center whitespace-nowrap dark:hover:text-gray-300">
                        Latest Updates
                      </NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap dark:hover:text-gray-300">
                        Events
                      </NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap dark:hover:text-gray-300">
                        Announcements
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <a href="" className="text-base font-medium bg-transparent sm:mr-4 dark:hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>

          <a href="">
            <Button className="bg-primary rounded-full lg:block hidden dark:hover:bg-blue-400 dark:text-gray-200">
              Join Now
            </Button>
          </a>

          <div className="md:hidden flex items-center">
            <button aria-label="Menu">
              <FiMenu size={24} className="dark:text-white" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
