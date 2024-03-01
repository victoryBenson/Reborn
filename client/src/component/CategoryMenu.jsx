import React from "react";
import { FaComputerMouse } from "react-icons/fa6";
import { MdDashboard, MdSportsTennis } from "react-icons/md";
import { TbPerfume } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import gift from "../assets/image/gift-unscreen.gif";
import { PiDressFill } from "react-icons/pi";

export const CategoryMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 my-10 gap-4">
      <p className="flex flex-wrap items-center font-bold md:text-3xl text-xl sm:p-5 text-brown">
        Discover more.
        <span className="text-lightBrown font-light flex flex-warp items-center">
          Good things are waiting for you
          <img src={gift} alt="image" className="w-14 h-10 rounded" />
        </span>
      </p>
      <div className=" mx-auto w-[90%] flex justify-center">
        <div className="overflow-x-scroll md:overflow-hidden p-4 md:p-3 md: mx-auto flex font-light text-lg transition-all space-x-14 text-brown bg-[#ffffff] shadow-lg rounded-lg">
          <NavLink
            to={`/category/all-category`}
            className={({ isActive }) =>
              isActive
                ? "flex items-center font-bold cursor-pointer"
                : `cursor-pointer hover:underline decoration-2 underline-offset-4 flex items-center`
            }
          >
            <MdDashboard className="mx-1" />
            All
          </NavLink>
          <NavLink
            to={`/category/fashion`}
            className={({ isActive }) =>
              isActive
                ? "flex items-center font-bold cursor-pointer"
                : `cursor-pointer hover:underline decoration-2 underline-offset-4 flex items-center`
            }
          >
            <PiDressFill className="mx-1" />
            Fashion
          </NavLink>
          <NavLink
            to={`/category/beauty`}
            className={({ isActive }) =>
              isActive
                ? "flex items-center font-bold cursor-pointer"
                : `cursor-pointer hover:underline decoration-2 underline-offset-4 flex items-center`
            }
          >
            <TbPerfume className="mx-1" />
            Beauty
          </NavLink>
          <NavLink
            to={`/category/sports`}
            className={({ isActive }) =>
              isActive
                ? "flex items-center font-bold cursor-pointer"
                : `cursor-pointer hover:underline decoration-2 underline-offset-4 flex items-center`
            }
          >
            <MdSportsTennis className="mx-1" />
            Sports
          </NavLink>
          <NavLink
            to={`/category/digital`}
            className={({ isActive }) =>
              isActive
                ? "flex items-center font-bold cursor-pointer"
                : `cursor-pointer hover:underline decoration-2 underline-offset-4 flex items-center`
            }
          >
            <FaComputerMouse className="mx-1" />
            Digital
          </NavLink>
        </div>
      </div>
    </div>
  );
};
