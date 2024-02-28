import React from "react";
import { DiscoverMore } from "../component/DiscoverMore";
import { GetProducts } from "../component/GetProducts";
import { Testimonial } from "../component/Testimonial";

export const LandingPage = () => {
  return (
    <>
      {/* <DiscoverMore /> */}
      <GetProducts />
      <Testimonial />
    </>
  );
};
