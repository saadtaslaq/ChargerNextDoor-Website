"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useEffect } from "react";

export function Header1() {
  useEffect(() => {
    // Add fade-in animation to elements when component mounts
    const heading = document.querySelector('.header-heading');
    const description = document.querySelector('.header-description');
    const buttons = document.querySelector('.header-buttons');
    const image = document.querySelector('.header-image');
    
    if (heading) heading.classList.add('slide-in-left');
    if (description) description.classList.add('fade-in');
    if (buttons) buttons.classList.add('fade-in');
    if (image) image.classList.add('slide-in-right');
  }, []);

  return (
    <section id="chargeNDrive" className="bg-gradient-subtle px-[5%] py-16 md:py-24 lg:py-28 text-white pt-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="header-heading mb-5 text-6xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Charge Your EV with Local Hosts Today
            </h1>
            <p className="header-description md:text-md text-french-gray">
              Discover a seamless way to power your electric vehicle by
              connecting with homeowners who have chargers available. Join our
              community and never worry about finding a charging station again!
            </p>
            <div className="header-buttons mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button 
                title="Learn More" 
                className="bg-accent hover:bg-malachite text-governor-bay font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Learn More
              </Button>
              <Button 
                title="Sign Up" 
                variant="secondary"
                className="bg-transparent text-white font-bold border-2 border-accent rounded-lg transition-all duration-300 hover:bg-accent/10 hover:shadow-lg hover:-translate-y-1"
              >
                Sign Up
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1647500660175-2576dd2a7282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              className="header-image w-full rounded-xl object-cover shadow-xl floating"
              alt="Electric vehicle charging"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
