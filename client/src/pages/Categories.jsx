import React, { useState } from "react";
import { useFetchItemsQuery } from "../redux/features/product/generalApi";
import { Loader } from "../component/Loader";
import "react-responsive-modal/styles.css";
import { DisplayCategory } from "../component/DisplayCategory";
import gift from "../assets/image/gift-unscreen.gif";
import { FaComputerMouse } from "react-icons/fa6";
import { MdSportsTennis } from "react-icons/md";
import { TbPerfume } from "react-icons/tb";
import { PiDressFill } from "react-icons/pi";
import { IoPhonePortraitOutline } from "react-icons/io5";

export const Categories = () => {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState();
  const {
    data = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useFetchItemsQuery();

  const handleClick = (e) => {
    setClick(e.target.value);
  };

  if (isLoading) {
    return <div>{<Loader />}</div>;
  }

  if (isError) {
    return <div> Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 my-10 gap-4">
      <p className="flex flex-wrap items-center font-bold md:text-3xl text-xl sm:p-5 text-brown">
        Discover more.
        <span className="text-lightBrown font-light flex flex-warp items-center">
          Good things are waiting for you
          <img src={gift} alt="image" className="w-14 h-10 rounded" />
        </span>
      </p>
      {/* buttons */}
      <div className="mx-auto w-[90%] flex justify-center items-center my-10">
        <div className="overflow-x-scroll md:overflow-hidden p-4 md:p-3 mx-auto flex lg:font-light text-lg transition-all space-x-14 text-brown bg-[#ffffff] shadow-lg rounded-lg">
          <button
            type="button"
            onClick={handleClick}
            value={"fragrances"}
            className="flex items-center"
          >
            <TbPerfume className="mx-1" />
            Beauty
          </button>
          <button
            type="button"
            onClick={handleClick}
            value={"Fashion"}
            className="flex items-center"
          >
            <PiDressFill className="mx-1" />
            Fashion
          </button>
          <button
            type="button"
            onClick={handleClick}
            value={"digital"}
            className="flex items-center"
          >
            <FaComputerMouse className="mx-1" />
            Accessories
          </button>
          <button
            type="button"
            onClick={handleClick}
            value={"smartphones"}
            className="flex items-center"
          >
            <IoPhonePortraitOutline className="mx-1" />
            Phones
          </button>
          <button
            type="button"
            onClick={handleClick}
            value={"Sport"}
            className="flex items-center"
          >
            <MdSportsTennis className="mx-1" />
            Sports
          </button>
        </div>
      </div>
      <div>
        {!isLoading && data.length && (
            <div>
                {/* <div>
                {data
                    .filter((item) => item.category === click)
                    .map((product) => {
                        return <p key={product._id}>{product.category}</p>;
                    })}
                </div> */}
                <div className="flex flex-wrap justify-center items-center">
                    {data
                    .filter((item) => item.category === click)
                    .map((product) => {
                        return <DisplayCategory key={product._id} product={product} />;
                    })}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};