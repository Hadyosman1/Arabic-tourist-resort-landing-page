import Image from "next/image";
import { Fragment } from "react";

import heroRightPic1 from "@/../public/hero/right-1.png";
import heroRightPic2 from "@/../public/hero/right-2.png";
import heroRightPic3 from "@/../public/hero/right-3.png";
import logoPic from "@/../public/logo.png";
import expert1 from "@/../public/hero/experts/1.png";
import expert2 from "@/../public/hero/experts/2.png";
import expert3 from "@/../public/hero/experts/3.png";
import miniBusPic from "@/../public/hero/mini-bus.png";
import calendarIcon from "@/../public/calendar-icon.png";
import userIcon from "@/../public/user-icon.png";
import searchIcon from "@/../public/search-icon.png";

const bannerItems = [
  {
    icon: calendarIcon,
    title: "تسجيل الدخول",
    subtitle: "حدد تاريخك",
  },
  {
    icon: calendarIcon,
    title: "تحقق من ذلك",
    subtitle: "حدد تاريخك",
  },
  {
    icon: userIcon,
    title: "المسافرون",
    subtitle: "إضافة ضيف",
  },
];

const Hero = () => {
  return (
    <section className="pt-10">
      <div className="container">
        <header className="flex flex-wrap items-end justify-between gap-y-8">
          <div className="text-brown flex shrink-0 basis-full gap-x-12 text-xl font-semibold max-sm:*:basis-1/4 max-sm:*:flex-wrap max-sm:*:justify-center sm:text-5xl md:text-6xl lg:basis-3/12 lg:flex-col lg:gap-2">
            <div className="flex items-center gap-2 md:gap-5">
              <span>أجد</span>
              <Image
                priority
                src={heroRightPic1}
                alt="hero-right-pic-1"
                width={160}
                height={65}
                className="shrink-[2] overflow-hidden"
              />
            </div>
            <div className="flex items-center gap-2 md:gap-5">
              <Image
                priority
                src={heroRightPic2}
                alt="hero-right-pic-3"
                width={80}
                height={65}
                className="lg:order-1-[2] order-2 shrink overflow-hidden"
              />
              <span className="order-1 lg:order-2">نفسك</span>
            </div>
            <div className="flex items-center gap-2 md:gap-5">
              <span>هنا</span>
              <Image
                priority
                src={heroRightPic3}
                alt="hero-right-pic-3"
                width={160}
                height={65}
                className="shrink-[2] overflow-hidden"
              />
            </div>
          </div>
          <div className="flex shrink basis-full items-center gap-3 md:basis-8/12 lg:basis-6/12 lg:flex-col lg:gap-5">
            <Image
              priority
              src={logoPic}
              alt="logo"
              className="shrink overflow-hidden"
              width={150}
              height={150}
            />
            <p className="text-lg text-balance md:text-2xl md:font-semibold lg:text-center">
              اجعلوا عطلتكم الخاصة مصممة لتتمكنوا من الغوص واستكشاف أفضل ما في
              منتجع السلام.
            </p>
          </div>
          <div className="flex basis-full flex-wrap items-center gap-3 md:basis-4/12 lg:basis-3/12">
            <p className="shrink font-semibold">تعرَّفوا علي الخبراء</p>
            <div className="border-primary flex max-w-full shrink items-center gap-2 border-b pb-2.5 max-sm:mx-auto">
              <Image
                priority
                src={expert1}
                alt="expert-1"
                width={60}
                height={60}
                className="shrink overflow-hidden"
              />
              <Image
                priority
                src={expert2}
                alt="expert-2"
                width={60}
                height={60}
                className="shrink overflow-hidden"
              />
              <Image
                priority
                src={expert3}
                alt="expert-3"
                width={60}
                height={60}
                className="shrink overflow-hidden"
              />
              <Image
                priority
                src={expert2}
                alt="expert-2"
                width={60}
                height={60}
                className="shrink overflow-hidden"
              />
            </div>
          </div>
        </header>
      </div>

      <div className="mt-10">
        <div className="container">
          <div className="relative flex aspect-video">
            <Image src={miniBusPic} fill alt="mini bus" />
            <div className="relative w-full translate-y-1/2 self-end px-1.5">
              <div className="mx-auto flex gap-5 bg-white px-4 py-6 sm:max-w-[97%] md:px-6 md:py-12 lg:max-w-[76.5%] lg:gap-8 lg:px-9">
                <div className="flex grow justify-between gap-x-3 gap-y-5 lg:gap-x-5">
                  {bannerItems.map(({ icon, title, subtitle }, idx) => (
                    <Fragment key={title}>
                      <div className="flex items-center gap-x-5 gap-y-2 max-md:flex-col max-md:text-center max-sm:text-xs md:items-start">
                        <Image
                          src={icon}
                          alt={`${title}-icon`}
                          className="mt-1 shrink-0"
                        />
                        <div>
                          <h2 className="text-primary font-medium sm:font-semibold lg:text-lg">
                            {title}
                          </h2>
                          <p className="text-brown font-medium">{subtitle}</p>
                        </div>
                      </div>
                      {idx !== bannerItems.length - 1 && (
                        <div className="bg-brown h-8 w-[1.5px] self-center" />
                      )}
                    </Fragment>
                  ))}
                </div>
                <button className="self-start transition-all duration-300 hover:brightness-75">
                  <Image src={searchIcon} alt="search icon" />
                  <span className="sr-only">search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary py-18" />
      </div>
    </section>
  );
};

export default Hero;
