import React from "react";
import HeroImage from "./hero.svg";

export default function Hero() {
  return (
    <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
          Scrape Linkedin Email
        </h1>
        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
          Supercharge your LinkedIn networking with our Email Finder. Instantly
          uncover email addresses for enhanced connections. Elevate your
          outreach game effortlessly.
        </p>
      </div>
      <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
        <img
          className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
          src={HeroImage}
        />
      </div>
    </div>
  );
}
