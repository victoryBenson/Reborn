import React, { useEffect, useState } from "react";
import { Loader } from "../component/Loader";
import "react-responsive-modal/styles.css";
import { DisplayCategory } from "../component/DisplayCategory";
import gift from "../assets/image/gift-unscreen.gif";
import { FaComputerMouse } from "react-icons/fa6";
import { MdSportsTennis } from "react-icons/md";
import { TbPerfume } from "react-icons/tb";
import { PiDressFill } from "react-icons/pi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getTotalProduct } from "../redux/features/product/productAction";


export const Categories = () => {
  const dispatch = useDispatch()
  const [click, setClick] = useState();
  const [toggle, setToggle] = useState(false);
  const {isLoading,items, isError, errMessage } = useSelector(state => state.products);
  


  const handleClick = (e) => {
    setClick(e.target.value);
    setToggle(!toggle);
  };

  if (isLoading) {
    return <div>{<Loader/>}</div>;
  }

  if (isError) {
    return <div> Error: {errMessage}</div>;
  }

  return (
    <div className="">
        <div className="md:bg-hero bg-hero2  bg-center relative sm:p-5 lg:h-[60vh h-[40vh] transition-all px-3 flex flex-col justify-center items-center gap-4">
            <div className="absolute bg-black/30 top-0 right-0 left-0 h-full flex justify-center flex-col">
                <p className="flex flex-wrap items-center justify-center font-bold md:text-3xl text-xl p-5">
                    <span className="text-ivory drop-shadow-sm">Discover more.</span>
                    <span className="text-lightBrown font-light flex flex-warp items-center">
                        Good things are waiting for you
                    <img src={gift} alt="image" className="w-14 h-10 rounded" />
                    </span>
                </p>
                {/* buttons */}
                <div className="mx-auto w-[90%] flex justify-center items-center">
                    <div className="overflow-x-scroll md:overflow-hidden p-4 md:p-3 mx-auto flex transition-all space-x-14 text-brown bg-[#ffffff] shadow-lg rounded-lg">
                        <button
                            type="button"
                            onClick={handleClick}
                            value={"men"}
                            className={"flex items-center"}
                        >
                            <TbPerfume className="mx-1" />
                            Men
                        </button>
                        <button
                            type="button"
                            onClick={handleClick}
                            value={"women"}
                            className={"flex items-center"}
                            // style={toggle && { background: color, color: textColor }}
                        >
                            <PiDressFill className="mx-1" />
                            Women
                        </button>
                        <button
                            type="button"
                            onClick={handleClick}
                            value={"unisex"}
                            className="flex items-center"
                        >
                            <PiDressFill className="mx-1" />
                            Unisex
                        </button>
                        <button
                            type="button"
                            onClick={handleClick}
                            value={"fragrances"}
                            className="flex items-center"
                        >
                            <TbPerfume className="mx-1" />
                            Fragrance
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="mx-4 mt-10">
            {!isLoading && items.length && (
            <div>
                {click ? (
                <div className="flex flex-wrap justify-center items-center">
                    {items
                    .filter((item) => item.category === click)
                    .map((product) => {
                        return (
                        <DisplayCategory key={product._id} product={product} />
                        );
                    })}
                </div>
                ) : (
                <div className="flex flex-wrap justify-center items-center">
                    {items.map((product) => {
                    return (
                        <DisplayCategory key={product._id} product={product} />
                    );
                    })}
                </div>
                )}
            </div>
            )}
        </div>
    </div>
  );
};
