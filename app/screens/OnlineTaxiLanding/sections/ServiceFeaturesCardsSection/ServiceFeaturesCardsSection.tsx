import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServiceFeaturesCardsSection = (): JSX.Element => {
  // Feature cards data
  const featureCards = [
    {
      id: 1,
      title: "Fast And Simple",
      description:
        "You can manage all your tasks in our first and very helpful feature for your task",
      iconSrc: "/group-1.png",
      ellipseSrc: "/ellipse-12-1.svg",
    },
    {
      id: 2,
      title: "Booking",
      description:
        "Can help you to make detailed planning and also very real time for yout time work",
      iconSrc: "/vector-1.svg",
      ellipseSrc: "/ellipse-12.svg",
      isComplex: true,
    },
    {
      id: 3,
      title: "Comfortable",
      description:
        "We will find out what you are working on or there is a problem with your task manager",
      iconSrc: "/48.svg",
      ellipseSrc: "/ellipse-12.svg",
    },
    {
      id: 4,
      title: "3m Very Happy",
      description:
        "Create a team online and you can discuss with our professional team",
      iconSrc: "/group-1708.png",
      ellipseSrc: "/ellipse-12-1.svg",
    },
  ];

  return (
    <section className="relative bg-[#F5F5F5] pt-16 md:pt-24  min-[767px]:px-[25px] overflow-hidden">
      <div className="container max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center lg:justify-between text-center lg:text-left">
          {/* Left side content */}
          <div className="w-full lg:w-[539px]">
            <div className="mb-10">
              <h2 className="font-['Sora',Helvetica] font-semibold text-[#001422] text-2xl min-[767px]:text-3xl lg:text-[42px] xl:text-[48px] leading-[1.2] min-[767px]:leading-[1.3] lg:leading-[1.4] xl:leading-[72px] mb-6">
                We Will Make You Very Special With Our Service
              </h2>
              <p className="font-['Sora',Helvetica] font-normal text-[#9a9a9a] text-[14px] sm:text-[15px] min-[767px]:text-[16px] leading-[1.5] min-[767px]:leading-[1.6] lg:leading-10 mb-8 max-w-lg mx-auto lg:mx-0">
                There are many benefits that you will get at Drivio, and for
                sure you will be comfortable and safe with us with great
                facilities and benefits
              </p>
              <Button className="bg-[#0095fe] text-white font-bold rounded-xl h-[40px] min-[767px]:h-[52px] w-32 min-[767px]:w-40 text-[14px] min-[767px]:text-[16px] mx-auto lg:mx-0">
                Book now
              </Button>
            </div>
          </div>

          {/* Right side grid of cards */}
          <div className="w-full lg:w-[585px] grid grid-cols-1 min-[767px]:grid-cols-2 gap-4 min-[767px]:gap-6">
            {featureCards.map((card) => (
              <Card
                key={card.id}
                className="bg-white rounded-[30px] overflow-hidden h-[280px] min-[767px]:h-72"
              >
                <CardContent className="p-4 min-[767px]:p-6">
                  <div className="relative w-[80px] min-[320px]:w-[85px] min-[370px]:w-[90px] min-[767px]:w-[100px] h-[80px] min-[320px]:h-[85px] min-[370px]:h-[90px] min-[767px]:h-[100px] mb-6 min-[767px]:mb-10 mx-auto lg:mx-0">
                    <div className="absolute w-full h-full top-0 left-0 bg-[#0095fe] rounded-[50px] opacity-20" />
                    <img
                      className="absolute w-full h-[50%] top-[50%] left-0"
                      alt="Ellipse"
                      src={card.ellipseSrc}
                    />
                      
                    {card.isComplex ? (
                      <div className="absolute w-10 min-[320px]:w-11 min-[370px]:w-12 min-[767px]:w-12 h-10 min-[320px]:h-11 min-[370px]:h-12 min-[767px]:h-12 top-[26px] left-[26px]">
                        <div className="relative w-[32px] min-[320px]:w-[35px] min-[370px]:w-[38px] min-[767px]:w-[42px] h-8 min-[320px]:h-8.5 min-[370px]:h-9 min-[767px]:h-9 top-1.5 left-1">
                          <img
                            className="absolute w-full h-8 top-[3px] left-0"
                            alt="Vector"
                            src="/vector-1.svg"
                          />
                          <img
                            className="absolute w-full h-0.5 top-[11px] left-0"
                            alt="Vector"
                            src="/vector-3.svg"
                          />
                          <img
                            className="absolute w-[16px] min-[320px]:w-[18px] min-[370px]:w-[19px] min-[767px]:w-[21px] h-[7px] min-[320px]:h-[7.5px] min-[370px]:h-[8px] min-[767px]:h-[9px] top-0 left-2.5"
                            alt="Group"
                            src="/group-2.png"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="absolute w-[42px] min-[320px]:w-[45px] min-[370px]:w-[48px] min-[767px]:w-[52px] h-[42px] min-[320px]:h-[45px] min-[370px]:h-[48px] min-[767px]:h-[52px] top-6 left-6">
                        <img
                          className="w-full h-full object-contain"
                          alt={card.title}
                          src={card.iconSrc}
                        />
                      </div>
                    )}
                  </div>

                  <h3 className="font-['Sora',Helvetica] font-semibold text-[#001422] text-base min-[767px]:text-lg lg:text-2xl mb-2 min-[767px]:mb-3 text-center lg:text-left">
                    {card.title}
                  </h3>
                  <p className="font-['Sora',Helvetica] font-normal text-[#9a9a9a] text-[13px] min-[767px]:text-sm leading-[1.4] min-[767px]:leading-6 text-center lg:text-left">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
