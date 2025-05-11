
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Brain } from "lucide-react";
import { Button } from "./ui/button";

const MainNavigation = () => {
  return (
    <header className="border-b border-neural-800/30 py-4 px-4 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-neural-900/70 border border-neural-700/30 rounded-md flex items-center justify-center">
            <Brain className="w-6 h-6 text-neural-400" />
          </div>
          <span className="text-lg font-semibold hidden sm:block">Peak Performers Program</span>
        </Link>

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Program</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-neural-900/50 to-neural-800/30 p-6 no-underline outline-none focus:shadow-md"
                        to="/about"
                      >
                        <Brain className="h-6 w-6 text-neural-400" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          About the Program
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          A transformational odyssey designed to expand your inner bandwidth and sharpen your outer edge.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        to="/methodology"
                      >
                        <div className="text-sm font-medium leading-none">Methodology</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Our unique approach to leadership transformation
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        to="/testimonials"
                      >
                        <div className="text-sm font-medium leading-none">Testimonials</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Real stories from executives who've experienced our program
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        to="/offerings"
                      >
                        <div className="text-sm font-medium leading-none">Offerings</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explore our specialized programs and experiences
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className={cn(navigationMenuTriggerStyle())}>
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/offerings" className={cn(navigationMenuTriggerStyle())}>
                Offerings
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/testimonials" className={cn(navigationMenuTriggerStyle())}>
                Testimonials
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* CTA */}
        <div className="hidden sm:block">
          <Button 
            size="sm"
            className="bg-neural-600 hover:bg-neural-700 text-white"
            onClick={() => document.getElementById('consultation')?.scrollIntoView({behavior: 'smooth'})}
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
