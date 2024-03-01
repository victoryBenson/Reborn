import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import fashion from "../assets/image/welcome2.avif";
import beauty from "../assets/image/beauty.jpg";
import digital from "../assets/image/digital.jpg";
import sports from "../assets/image/sports.jpg";


export const AllCategory = () => {
  return (
    <div className="relative my-5 flex items-center transition-all">
        <div className=" m-auto relative flex flex-wrap justify-center gap-8 md:gap-4" >
            <div className="relative group md:w-1/3 mx-1 h-60 w-3/4 inline-flex slide shadow-xl rounded-2xl">
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
            <div className="relative group md:w-1/3 mx-1 h-60 w-3/4 inline-flex slide shadow-xl rounded-2xl">
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
            <div className="relative group md:w-1/3 mx-1 h-60 w-3/4 inline-flex slide shadow-xl rounded-2xl">
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
            <div className="relative group md:w-1/3 mx-1 h-60 w-3/4 inline-flex slide shadow-xl rounded-2xl">
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
  );
};
