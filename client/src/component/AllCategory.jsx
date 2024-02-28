import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import fashion from "../assets/image/welcome2.avif";
import beauty from "../assets/image/beauty.jpg";
import digital from "../assets/image/digital.jpg";
import sports from "../assets/image/sports.jpg";
import gift from "../assets/image/gift-unscreen.gif";

export const AllCategory = () => {
  return (
    <div className="relative my-5">
      <div className=" p-3 flex items-center justify-between relative">
            <p className="flex flex-wrap items-center font-bold md:text-3xl sm:p-5 text-brown">
            Discover more.
            <span className="text-lightBrown font-light flex flex-warp items-center">
                Good things are waiting for you
                <img src={gift} alt="image" className="w-14 h-10 rounded" />
            </span>
            </p>
      </div>
      <div className=" m-auto overflow-x-auto no-scrollbar  w-full h-full flex relative" >
        <div>
            <div className="relative transition-all group md:w-[30rem] mx-1 h-60 w-[20rem] inline-flex slide shadow-xl rounded-2xl">
                <div className="h-full w-full flex">
                <img
                    src={fashion}
                    alt="image"
                    className=" object-cover object-center w-full rounded-lg"
                />
                </div>
                <span className="group-hover:bg-black/30 absolute w-full h-full rounded"></span>
                <div className="absolute flex p-2 justify-center items-center h-full w-full">
                <Link className="">
                    <p className="text-gray text-lg animate-pulse">
                    Discover more!
                    </p>
                    <p className="text-ivory text-center sm:text-xl font-bold p-1 drop-shadow">
                    Fashion Collection
                    </p>
                    <Link
                    to="/category/fashion"
                    className="text-center flex flex-col"
                    >
                    <button className="bg-ivory w-full p-3 rounded-full mt-5 shadow-lg">
                        Explore
                    </button>
                    </Link>
                </Link>
                </div>
            </div>
            <div className="relative group md:w-[30rem] mx-1 h-60 w-[20rem] inline-flex slide shadow-xl rounded-2xl">
                <div className="h-full w-full flex">
                <img
                    src={beauty}
                    alt="image"
                    className=" object-cover object-center w-full rounded-lg"
                />
                </div>
                <span className="group-hover:bg-black/30 absolute w-full h-full rounded"></span>
                <div className="absolute flex p-2 justify-center items-center h-full w-full">
                <Link className="text-center">
                    <p className="text-gray text-lg animate-pulse">
                    Discover more!
                    </p>
                    <p className="text-ivory sm:text-xl font-bold p-1 drop-shadow">
                    Beauty Collection
                    </p>
                    <Link
                    to="/category/beauty"
                    className="text-center flex flex-col"
                    >
                    <button className="bg-ivory w-full p-3 rounded-full mt-5 shadow-lg">
                        Explore
                    </button>
                    </Link>
                </Link>
                </div>
            </div>
            <div className="relative group md:w-[30rem] mx-1 h-60 w-[20rem] inline-flex slide shadow-xl rounded-2xl">
                <div className="h-full w-full flex">
                <img
                    src={digital}
                    alt="image"
                    className=" object-cover object-center w-full rounded-lg"
                />
                </div>
                <span className="group-hover:bg-black/30 absolute w-full h-full rounded"></span>
                <Link className="absolute flex p-2 justify-center items-center h-full w-full">
                <div className="">
                    <p className="text-gray text-lg animate-pulse">
                    Discover more!
                    </p>
                    <p className="text-ivory sm:text-xl font-bold p-1 drop-shadow">
                    Digital Collection
                    </p>
                    <Link
                    to="/category/digital"
                    className="text-center flex flex-col"
                    >
                    <button className="bg-ivory w-full p-3 rounded-full mt-5 shadow-lg">
                        Explore
                    </button>
                    </Link>
                </div>
                </Link>
            </div>
            <div className="relative group md:w-[30rem] mx-1 h-60 w-[20rem] inline-flex slide shadow-xl rounded-2xl">
                <div className="h-full w-full flex">
                <img
                    src={sports}
                    alt="image"
                    className=" object-cover object-center w-full rounded-lg"
                />
                </div>
                <span className="group-hover:bg-black/30 absolute w-full h-full rounded"></span>
                <Link className="absolute flex p-2 justify-center items-center h-full w-full">
                <div className="flex flex-col">
                    <p className="text-gray text-lg animate-pulse">
                    Discover more!
                    </p>
                    <p className="text-ivory sm:text-xl font-bold p-1 drop-shadow">
                    Sports Collection
                    </p>
                    <Link to="/category/sports" className="text-center">
                    <button className="bg-ivory w-full p-3 rounded-full mt-5 shadow-lg">
                        Explore
                    </button>
                    </Link>
                </div>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};
