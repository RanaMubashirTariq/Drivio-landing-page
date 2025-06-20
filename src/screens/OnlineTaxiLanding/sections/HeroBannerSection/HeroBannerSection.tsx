'use client'
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export const HeroBannerSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[795px] bg-[#f3f3f3] overflow-hidden">
      {/* Background elements - responsive adjustments */}

      <div className="container   max-w-[1440px] relative z-10">
        {/* Header Section - responsive adjustments */}
        <header className="flex flex-row items-center justify-between pt-5 md:pt-[41px] px-[87px]  max-[1030px]:px-[30px]   max-[1000px]:px-[0px]">
          <div className="flex items-center gap-[4.17px] shrink-0">
            <div className="relative w-[60px] min-[320px]:w-[65px] min-[428px]:w-[82.09px] h-[36px] min-[320px]:h-[40px] min-[428px]:h-[50px] shrink-0">
              <div className="relative w-full h-full">
                <div className="absolute w-8 min-[320px]:w-9 min-[428px]:w-11 h-7 min-[320px]:h-8 min-[428px]:h-10 top-2 min-[320px]:top-2.5 left-[28px] min-[320px]:left-[32px] min-[428px]:left-[38px] bg-[url(/clip-path-group-1.png)] bg-[100%_100%]" />
                <img
                  className="absolute w-[56px] min-[320px]:w-[62px] min-[428px]:w-[78px] h-[36px] min-[320px]:h-[40px] min-[428px]:h-[50px] top-0 left-0"
                  alt="Vector"
                  src="/vector.svg"
                />
              </div>
            </div>
            <div className="relative w-fit [-webkit-text-stroke:0.83px_#0095fe] [font-family:'Nico_Moji-Regular',Helvetica] font-normal text-[#0095fe] text-[16px] min-[320px]:text-[18px] min-[428px]:text-[20px] sm:text-[22px] min-[767px]:text-[24px] lg:text-[29.2px] tracking-[0] leading-[normal] whitespace-nowrap shrink-0">
              Drivio
            </div>
          </div>

          {/* Menu Toggle Button - shows below 1000px */}
          <button 
            className="min-[1000px]:hidden p-2 shrink-0 ml-4 w-[36px] min-[320px]:w-[40px] min-[428px]:w-[48px] h-[36px] min-[320px]:h-[40px] min-[428px]:h-[48px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? 
              <X className="w-5 h-5 min-[320px]:w-6 min-[320px]:h-6 min-[428px]:w-7 min-[428px]:h-7" /> : 
              <Menu className="w-5 h-5 min-[320px]:w-6 min-[320px]:h-6 min-[428px]:w-7 min-[428px]:h-7" />
            }
          </button>

          {/* Desktop Navigation - shows above 1000px */}
          <NavigationMenu className="hidden min-[1000px]:block">
            <NavigationMenuList className="flex space-x-4 lg:space-x-10 text-base lg:text-[18px] font-normal font-['poppins'] text-[#001422]">
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="hover:text-[#0095fe]">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="hover:text-[#0095fe]">About Us</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="hover:text-[#0095fe]">Pricing</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="hover:text-[#0095fe]">Team</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="hover:text-[#0095fe]">Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation Menu - shows below 1000px */}
          <div className={`min-[1000px]:hidden w-full ${isMenuOpen ? 'block' : 'hidden'} absolute top-[90px] left-0 bg-white shadow-lg py-4 px-6 z-50`}>
            <NavigationMenu className="w-full">
              <NavigationMenuList className="flex flex-col space-y-4 text-base font-normal text-[#001422]">
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="hover:text-[#0095fe] block py-2">Home</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="hover:text-[#0095fe] block py-2">About Us</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="hover:text-[#0095fe] block py-2">Pricing</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="hover:text-[#0095fe] block py-2">Team</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="hover:text-[#0095fe] block py-2">Contact</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button className="bg-[#0095fe] text-white font-bold rounded-xl h-[52px] w-full">
                    Sign In
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Sign In Button - shows above 1000px */}
          <Button className="hidden min-[1000px]:block bg-[#0095fe] text-white font-bold rounded-xl h-[52px] w-40">
            Sign In
          </Button>
        </header>


               <div className="absolute w-[444px] h-[444px] top-[181px] left-[910px] max-[1030px]:left-[700px] bg-[#0095fe] rounded-[222px] blur-[167px] hidden lg:block" />
        <img  className="absolute w-[736px] h-[639px] top-[124px] left-[726px] max-[1030px]:left-[500px] max-[1030px]:w-[500px] max-[1030px]:h-[600px] max-[1030px]:ml-[50px] object-fit hidden lg:block"  alt="Blue isolated car"  src="/blue-isolated-car-1.png"  />
  
      {/* Mobile-friendly car image for smaller screens */}
      <img className="w-full max-w-md mx-auto mt-10 lg:hidden  object-contain" alt="Blue isolated car" src="/blue-isolated-car-1.png"  />
        {/* Hero Content - responsive adjustments */}
        <div className="mt-10 2xl:mt-5 lg:absolute top-[215px] left-[120px] w-full max-w-[570px] space-y-4 md:space-y-6 text-center lg:text-left max-[1030px]:w-[450px] max-[1030px]:left-[70px] max-[1022px]:w-[100%] max-[1022px]:mx-[auto]">


          
          <h1 className="font-['poppins] font-bold text-[#001422] text-2xl min-[767px]:text-3xl lg:text-[42px] xl:text-[56px] leading-[1.2] min-[767px]:leading-[1.3] lg:leading-[1.4] xl:leading-[72px] max-[1030px]:w-[450px] max-[1022px]:w-[100%]">
            Be The First With The Convenience Of Drivio
          </h1>
          <p className="font-['poppins'] font-normal text-[#636262] text-[14px] sm:text-[15px] min-[767px]:text-[16px] leading-[1.5] min-[767px]:leading-[1.6] lg:leading-10 mx-auto lg:mx-0 max-w-md">
            Comes with a very great service, friendly and of course comfortable
            at a very affordable price by all groups, both bottom and top
          </p>
          <div className="mt-16 flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-4 bg-white p-4 rounded-xl shadow-md max-w-lg mx-auto lg:mx-0 max-[1030px]:w-[450px] max-[1000px]:w-[100%]">
            <Input
              type="text"
              placeholder="From"
              className="flex-1 border-none focus:ring-0 w-full font-['poppins']"
            />
            <Input type="text"  placeholder="To" className="flex-1 border-none focus:ring-0 w-full font-['poppins']"  />
            <Button className="bg-[#0095fe] text-white font-bold rounded-xl h-[52px] px-8 w-full sm:w-auto">
              Search
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
