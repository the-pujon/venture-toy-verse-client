import React from "react";

import { Gallery } from "react-grid-gallery";

import banner1 from "../../assets/Banner/banner1.jpg";
import banner2 from "../../assets/Banner/banner2.jpg";
import banner3 from "../../assets/Banner/banner3.jpg";

import AOS from "aos";

AOS.init();

const Gallery1 = () => {
  const images = [
    {
      src: `${banner2}`,
      width: 270,
      height: 320,
    },
    {
      src: `${banner2}`,
      width: 340,
      height: 190,
    },
    {
      src: `${banner2}`,
      width: 321,
      height: 148,
    },
    {
      src: `${banner2}`,
      width: 314,
      height: 213,
    },
    {
      src: `${banner2}`,
      width: 320,
      height: 213,
    },
    {
      src: `${banner2}`,
      width: 320,
      height: 190,
    },

    {
      src: `${banner2}`,
      width: 320,
      height: 113,
    },
    {
      src: `${banner2}`,
      width: 315,
      height: 320,
    },
    {
      src: `${banner2}`,
      width: 305,
      height: 340,
    },
    {
      src: `${banner2}`,
      width: 320,
      height: 190,
    },
    {
      src: `${banner2}`,
      width: 320,
      height: 148,
    },
    {
      src: `${banner2}`,
      width: 320,
      height: 213,
    },
    {
      src: `${banner2}`,
      width: 320,
      height: 213,
    },
    {
      src: `${banner2}`,
      width: 248,
      height: 320,
    },
    {
      src: `${banner2}`,
      width: 230,
      height: 113,
    },
  ];
  return (
    <div
      data-aos="fade-left"
      className="h-96 overflow-y-scroll shadow-2xl md:flex-1 flex-none md:w-12"
    >
      <Gallery images={images} enableImageSelection={false} />
    </div>
  );
};

export default Gallery1;
