import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";

// Define data for footer sections to make the code more maintainable
const aboutUsLinks = [
  { text: "Our taxi's", href: "#" },
  { text: "Our drivers", href: "#" },
  { text: "Contact us", href: "#" },
  { text: "Testimonial", href: "#" },
];

const infoLinks = [
  { text: "FAQ", href: "#" },
  { text: "Cookie & help", href: "#" },
  { text: "Privacy policy", href: "#" },
  { text: "Terms & conditions", href: "#" },
];

const socialLinks = [
  { icon: <InstagramIcon className="w-6 h-6" />, href: "#" },
  { icon: <LinkedinIcon className="w-6 h-6" />, href: "#" },
  { icon: <FacebookIcon className="w-6 h-6" />, href: "#" },
  { icon: <TwitterIcon className="w-6 h-6" />, href: "#" },
];

export const SiteFooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#0095fe] py-8 min-[320px]:py-10 min-[553px]:py-12 md:py-16 min-[320px]:px-6">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 min-[553px]:grid-cols-2 md:grid-cols-4 gap-6 min-[320px]:gap-8 text-center min-[553px]:text-left">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center justify-center min-[553px]:justify-start gap-1 mb-6 min-[320px]:mb-8 min-[553px]:mb-10 md:mb-12">
              <div className="relative w-[70px] min-[320px]:w-[75px] min-[553px]:w-[82px] h-[42px] min-[320px]:h-[45px] min-[553px]:h-[50px]">
                <div className="absolute w-9 min-[320px]:w-10 min-[553px]:w-11 h-8 min-[320px]:h-9 min-[553px]:h-10 top-2 min-[320px]:top-2.5 left-[32px] min-[320px]:left-[35px] min-[553px]:left-[38px] bg-[url(/clip-path-group.png)] bg-[100%_100%]" />
                <img
                  className="absolute w-[66px] min-[320px]:w-[72px] min-[553px]:w-[78px] h-[42px] min-[320px]:h-[45px] min-[553px]:h-[50px] top-0 left-0"
                  alt="Vector"
                  src="/vector.svg"
                />
              </div>
              <div className="relative w-fit [-webkit-text-stroke:0.83px_#0095fe] [font-family:'Nico_Moji-Regular',Helvetica] font-normal text-white text-[24px] min-[320px]:text-[26px] min-[553px]:text-[29.2px] tracking-[0] leading-[normal] whitespace-nowrap">
                Drivio
              </div>
            </div>
            <div className="[font-family:'Sora',Helvetica] font-normal text-white text-xs min-[320px]:text-sm min-[553px]:text-base leading-6 min-[320px]:leading-7 min-[553px]:leading-8 md:leading-10 max-w-[536px] mx-auto min-[553px]:mx-0">
              Comes with a very great service, friendly and of course
              comfortable at a very affordable price by all groups, both bottom
              and top
            </div>
          </div>

          {/* Office and Social Media */}
          <div className="col-span-1">
            <div className="mb-6 min-[320px]:mb-7 min-[553px]:mb-8">
              <h3 className="[font-family:'Sora',Helvetica] font-bold text-white text-base min-[767px]:text-lg mb-3 min-[320px]:mb-4 min-[553px]:mb-6">
                Office
              </h3>
              <p className="[font-family:'Sora',Helvetica] font-normal text-white text-xs min-[320px]:text-sm min-[553px]:text-base leading-5 min-[320px]:leading-6 min-[553px]:leading-normal">
                Jln.Galau terus no 23. <br />
                Jakarta selatan
              </p>
            </div>

            <div>
              <h3 className="[font-family:'Sora',Helvetica] font-bold text-white text-base min-[767px]:text-lg mb-3 min-[320px]:mb-4 min-[553px]:mb-6">
                Follow us
              </h3>
              <div className="flex justify-center min-[553px]:justify-start gap-4 min-[320px]:gap-5 min-[553px]:gap-6">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href} 
                    className="text-white transition-transform duration-300 hover:scale-110"
                  >
                    <div className="w-5 h-5 min-[320px]:w-6 min-[320px]:h-6">
                      {link.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* About Us */}
          <div className="col-span-1">
            <h3 className="[font-family:'Sora',Helvetica] font-bold text-white text-base min-[767px]:text-lg mb-3 min-[320px]:mb-4 min-[553px]:mb-6">
              About Us
            </h3>
            <nav>
              <ul className="space-y-2 min-[320px]:space-y-3 min-[553px]:space-y-4 md:space-y-5">
                {aboutUsLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="[font-family:'Sora',Helvetica] font-normal text-white text-xs min-[320px]:text-sm min-[553px]:text-base transition-colors duration-300 hover:text-white/80"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Info */}
          <div className="col-span-1">
            <h3 className="[font-family:'Sora',Helvetica] font-bold text-white text-base min-[767px]:text-lg mb-3 min-[320px]:mb-4 min-[553px]:mb-6">
              Info
            </h3>
            <nav>
              <ul className="space-y-2 min-[320px]:space-y-3 min-[553px]:space-y-4 md:space-y-5">
                {infoLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="[font-family:'Sora',Helvetica] font-normal text-white text-xs min-[320px]:text-sm min-[553px]:text-base transition-colors duration-300 hover:text-white/80"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
