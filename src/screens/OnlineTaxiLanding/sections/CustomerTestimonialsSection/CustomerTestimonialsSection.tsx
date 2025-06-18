import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

// Testimonial data for mapping
const testimonials = [
  {
    id: 1,
    name: "Jane Cooper",
    role: "gorgy kste",
    text: "This Drivio is very cool, very friendly, fast and very friendly and good service.",
    avatarSrc: "/ellipse-4-2.png",
    featured: false,
  },
  {
    id: 2,
    name: "Leslie Alexander",
    role: "jmma jijm",
    text: "A very comfortable and safe taxi, with super friendly and clear service at a very affordable price.",
    avatarSrc: "/ellipse-4.png",
    featured: false,
  },
  {
    id: 3,
    name: "Cody Fisher",
    role: "bassjd wesh",
    text: "It must have been very comfortable with this Drivio service, cheap, friendly, affordable.",
    avatarSrc: "/ellipse-4-1.png",
    featured: false,
  },
];

export const CustomerTestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full py-10 md:py-20 bg-[#f3f3f3] px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-8 min-[770px]:mb-10 md:mb-16 text-center">
          <h2 className="font-semibold text-2xl min-[767px]:text-3xl md:text-[40px] text-[#001422] leading-[1.2] min-[767px]:leading-[1.3] md:leading-[72px] [font-family:'poppins']">
            What Our Customers
            <br />
            Have To Say
          </h2>
          <p className="mt-3 min-[320px]:mt-4 font-normal text-xs min-[320px]:text-sm min-[770px]:text-base text-[#9a9a9a] [font-family:'poppins'] leading-5 min-[320px]:leading-6 min-[770px]:leading-7 md:leading-8 max-w-[504px]">
            Here's what our customers say with CareHealth
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 min-[770px]:grid-cols-2 lg:grid-cols-3 gap-4 min-[320px]:gap-5 min-[770px]:gap-6 justify-items-center">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={`w-full max-w-[462px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group ${
                testimonial.featured
                  ? "bg-[#0095fe] text-white shadow-[10px_24px_54px_#0000000f] min-h-[300px] min-[320px]:min-h-[320px] min-[770px]:min-h-[340px]"
                  : "bg-white text-[#9a9a9a] border border-solid border-[#ededed] hover:bg-[#0095fe] hover:text-white min-h-[260px] min-[320px]:min-h-[280px] min-[770px]:min-h-[300px]"
              } rounded-[16px] min-[320px]:rounded-[18px] min-[770px]:rounded-[20px] ${
                testimonial.featured ? "" : "md:mt-[31px]"
              }`}
            >
              <CardContent className="p-4 min-[320px]:p-5 min-[770px]:p-6 md:p-8">
                <div className="flex items-center">
                  <Avatar
                    className={`w-7 h-7 min-[320px]:w-8 min-[320px]:h-8 min-[770px]:w-10 min-[770px]:h-10 ${
                      testimonial.featured ? "md:w-12 md:h-12" : ""
                    } rounded-full border-2 border-white shadow-md transition-transform duration-300 hover:scale-110`}
                  >
                    <AvatarImage
                      src={testimonial.avatarSrc}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-[#c4c4c4] text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-3 min-[320px]:ml-4">
                    <p
                      className={`font-bold transition-colors duration-300 ${
                        testimonial.featured
                          ? "text-white text-sm min-[320px]:text-base"
                          : "text-[#001422] group-hover:text-white text-xs min-[320px]:text-sm"
                      } tracking-[0.50px] [font-family:'poppins']`}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className={`transition-colors duration-300 ${
                        testimonial.featured
                          ? "text-white/90 text-xs min-[320px]:text-sm"
                          : "text-[#9a9a9a] group-hover:text-white/90 text-[10px] min-[320px]:text-xs"
                      } font-normal tracking-[0.50px] [font-family:'poppins']`}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p
                  className={`transition-colors duration-300 ${
                    testimonial.featured
                      ? "text-white mt-6 min-[320px]:mt-7 min-[770px]:mt-8 md:mt-10"
                      : "text-[#9a9a9a] group-hover:text-white mt-4 min-[320px]:mt-5 min-[770px]:mt-6"
                  } font-normal text-xs min-[320px]:text-sm min-[770px]:text-base tracking-[0.50px] leading-5 min-[320px]:leading-6 min-[770px]:leading-7 md:leading-10 [font-family:'poppins']`}
                >
                  {testimonial.text}
                </p>

                <div className="flex mt-4 min-[320px]:mt-5 min-[770px]:mt-6 md:mt-8 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`${
                        testimonial.featured 
                          ? "w-5 h-5 min-[320px]:w-6 min-[320px]:h-6 min-[770px]:w-7 min-[770px]:h-7" 
                          : "w-4 h-4 min-[320px]:w-5 min-[320px]:h-5"
                      } flex items-center justify-center transition-transform duration-300 hover:scale-110`}
                    >
                      {testimonial.featured ? (
                        <img
                          className="w-3 h-[12px] min-[320px]:w-4 min-[320px]:h-[15px]"
                          alt="Star"
                          src="/star-1-1.svg"
                        />
                      ) : (
                        <img
                          className={`w-[8px] h-[8px] min-[320px]:w-[9px] min-[320px]:h-[9px] transition-opacity duration-300 ${
                            !testimonial.featured && "group-hover:opacity-80"
                          }`}
                          alt="Star"
                          src="/star-1.svg"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
