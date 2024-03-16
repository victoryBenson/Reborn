import React from "react";
import { GetProducts } from "../component/GetProducts";
import { Testimonial } from "../component/Testimonial";
import { Hero } from "../component/Hero";

export const LandingPage = () => {
  return (
    <>
      {/* <DiscoverMore /> */}
      <GetProducts />
      <Testimonial />
    </>
  );
};
