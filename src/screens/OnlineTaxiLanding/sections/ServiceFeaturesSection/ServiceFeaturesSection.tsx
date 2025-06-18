import React from "react";
import { Button } from "../../../../components/ui/button";

// Define user profile images data for mapping
const profileImages = [
  { src: "/unsplash-nimeltctnyy.png", alt: "User profile", top: "2%", left: "42%" },
  { src: "/unsplash-ohkelokq3re.png", alt: "User profile", top: "21%", left: "17%" },
  { src: "/unsplash-ifgrcqhznqg.png", alt: "User profile", top: "21%", left: "67%" },
  { src: "/unsplash-mez3pofgs-k-1.png", alt: "User profile", top: "41%", left: "0%" },
  { src: "/unsplash-nimeltctnyy-1.png", alt: "User profile", top: "41%", left: "85%" },
  { src: "/unsplash-d1upkifd04a.png", alt: "User profile", top: "42%", left: "42%" },
  { src: "/unsplash-sibvworyqs0.png", alt: "User profile", top: "65%", left: "17%" },
  { src: "/unsplash-et-78qkmmqs.png", alt: "User profile", top: "65%", left: "67%" },
  { src: "/unsplash-mez3pofgs-k.png", alt: "User profile", top: "77%", left: "42%" },
];

export const ServiceFeaturesSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-10 min-[1030px]:py-20 bg-[#f3f3f3]">
      <div className="container flex flex-col min-[1030px]:flex-row items-center justify-center min-[1030px]:justify-between gap-8 max-w-[1200px] mx-auto text-center min-[1030px]:text-left px-4">
        {/* Visualization */}
        <div className="relative w-full md:w-[561px] aspect-square flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[555px] mx-auto rounded-full scale-[0.7] md:scale-100 transition-transform duration-300">
            {/* Background Ellipse */}
            <img
              className="absolute w-[78%] h-[78%] top-[11%] left-[11%]"
              alt="Ellipse"
              src="/ellipse-3.svg"
            />

            {/* Circle backgrounds */}
            <div className="absolute inset-0 bg-white/70 border-4 border-[#ededed] rounded-full" />
            <div className="absolute w-[39%] h-[39%] top-[30%] left-[30%] bg-[#0095fe] rounded-full" />
            <div className="absolute w-[19%] h-[19%] top-[40%] left-[40%] bg-white rounded-full" />

            {/* Profile images */}
            {profileImages.map((img, idx) => (
              <img
                key={idx}
                className="absolute w-[15%] h-[15%] object-cover rounded-full"
                style={{ top: img.top, left: img.left }}
                alt={img.alt}
                src={img.src}
              />
            ))}
          </div>
        </div>

        {/* Text content */}
        <div className="w-full min-[1030px]:w-[539px] flex flex-col gap-6 min-[1030px]:gap-10 items-center min-[1030px]:items-start">
          <div className="flex flex-col gap-4 min-[1030px]:gap-6">
            <h2 className="font-['poppins'] font-semibold text-[#001422] text-2xl min-[1030px]:text-5xl leading-[36px] min-[1030px]:leading-[72px]">
              Connected With All Circles And Wherever And Whenever
            </h2>

            <p className="font-['poppins'] font-normal text-[#9a9a9a] text-sm min-[1030px]:text-base leading-6 min-[1030px]:leading-10 max-w-[513px] mx-auto">
              Drivio reaches all people so that they can use the facilities that
              we provide, very special comfort and security
            </p>
          </div>

          <Button className="w-[140px] min-[1030px]:w-[159px] h-[45px] min-[1030px]:h-[52px] bg-[#0095fe] rounded-xl font-['poppins'] font-bold text-white text-sm min-[1030px]:text-base">
            Explore now
          </Button>
        </div>
      </div>
    </section>
  );
};
