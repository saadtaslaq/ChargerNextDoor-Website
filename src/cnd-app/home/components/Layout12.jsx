"use client";

import React from "react";
import { FaHome, FaCar, FaBolt } from "react-icons/fa";

export function Layout12() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden bg-white">
      {/* Background decorative elements - enhanced with more malachite elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-governor-bay/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-malachite/15 rounded-full blur-3xl"></div>
      <div className="absolute top-40 left-10 w-40 h-40 bg-malachite/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-malachite/10 rounded-full blur-xl"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-governor-bay/15 rounded-full">
              <span className="flex items-center text-governor-bay font-semibold">
                <FaBolt className="mr-2" /> Innovative EV Charging
              </span>
            </div>
            <h1 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl bg-gradient-to-r from-malachite to-governor-bay bg-clip-text text-transparent">
              Unlock the Power of Convenient EV Charging with Our Innovative
              Platform
            </h1>
            <p className="mb-6 md:mb-8 md:text-md text-french-gray">
              Our platform bridges the gap between EV owners and hosts with
              underutilized chargers. Enjoy seamless access to charging
              solutions right in your neighborhood.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div className="p-5 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-french-gray/10">
                <div className="mb-3 md:mb-4">
                  <div className="size-12 rounded-full bg-governor-bay/15 flex items-center justify-center">
                    <FaHome className="size-6 text-governor-bay" />
                  </div>
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  For Hosts
                </h6>
                <p className="text-french-gray">
                  Earn extra income by sharing your home charger with local EV
                  drivers.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-french-gray/10">
                <div className="mb-3 md:mb-4">
                  <div className="size-12 rounded-full bg-malachite/15 flex items-center justify-center">
                    <FaCar className="size-6 text-malachite" />
                  </div>
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  For EV Owners
                </h6>
                <p className="text-french-gray">
                  Access reliable charging options conveniently located near
                  you, anytime you need.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-full h-full bg-governor-bay/20 rounded-xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1593941707882-a56bbc8df48c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              className="w-full rounded-xl object-cover shadow-xl relative z-10"
              alt="EV charging station"
            />
            <div className="absolute -bottom-4 -right-4 p-3 bg-white rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-malachite flex items-center justify-center">
                  <FaBolt className="size-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold">Fast Charging</p>
                  <p className="text-xs text-french-gray">Available Nearby</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
