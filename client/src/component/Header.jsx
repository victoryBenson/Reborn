import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { CiUser, CiLogout, CiLogin, CiEdit, CiMenuFries, CiHome } from "react-icons/ci";
import { MdCategory, MdOutlineConnectWithoutContact } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiLightbulbFlashLine,
  RiUserFollowLine,
} from "react-icons/ri";
import { LuHelpCircle, LuLayoutDashboard, LuSunMoon } from "react-icons/lu";
import { IoArrowUndoOutline, IoListCircleOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { SocialMedia } from "./SocialMedia";
import { BsCartCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  ShowCustomer,
  ShowOnLogin,
  ShowOnLogout,
  ShowAdmin,
} from "./hiddenLinks";
import { LogoutUser } from "../redux/features/auth/authActions";
import { Reset_Auth } from "../redux/features/auth/authSlice";
import { LiaToggleOffSolid } from "react-icons/lia";
import { TbChecklist } from "react-icons/tb";
import { RxUpdate } from "react-icons/rx";
import { AiFillDashboard } from "react-icons/ai";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartItems, cartTotalQuantity } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false)

  const clickMobile = () => {
    setMobile(!mobile);
  };

  const displayCart = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = showCart ? "hidden" : "auto";
  }, [showCart]);

  const Logout = async () => {
    try {
        await dispatch(LogoutUser());
        await dispatch(Reset_Auth());
        navigate("/login");
    } catch (error) {
        console.log(error)
    }
  };


 useEffect( () => {
      window.addEventListener('scroll', () => {
          window.scrollY > 70 ? setIsActive(true) : setIsActive(false)
      });
  })

  return (
    <header className="">
        <div className={` bg-white transition-all flex justify-between items-center h-20 md:px-10 px-2  shadow`}>
            <div>
                <NavLink to={`/`}>
                <Logo />
                </NavLink>
            </div>
            {/* mobile */}
            <div className="flex flex-cols md:hidden px-3 order-last">
                <CiMenuFries
                size={20}
                onClick={clickMobile}
                className="cursor-pointer "
                />
                {mobile && (
                    <div className="z-50">
                        <div onClick={clickMobile} className="bg-black/70 backdrop-blur fixed top-0 left-0 right-0 h-screen w-full transition-all z" ></div>
                        <div data-aos="fade-right" className="hamburger-menu sm:w-2/4 w-4/5 bg-white fixed shadow-lg left-0 md:-left-0 top-0 h-screen duration-500 transition-all">
                            <div onClick={clickMobile} className="relative bg-white h-screen ">
                                {/* header */}
                                <div className="py-4 flex items-center justify-between relative shadow right-1">
                                    <div className="p-2 flex items-center">
                                        <Logo />
                                    </div>
                                    <p onClick={clickMobile} className=" flex items-end justify-end p-2 ">
                                        <IoArrowUndoOutline size={20} />
                                    </p>
                                </div>
                                <div className="p-2">
                                    {/* profile */}
                                    <div className=" p-2 flex">
                                        <p className="rounded-full h-14 w-14 flex items-center justify-center">
                                            <img
                                            src={
                                                userInfo
                                                ? userInfo.profilePicture
                                                : `https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg`
                                            }
                                            alt="image"
                                            />
                                        </p>
                                        <p className="flex flex-col px-2">
                                            <span className="font-bold capitalize">
                                            {userInfo ? userInfo.username : "user"}
                                            </span>
                                            <span className="font-light">Nigeria</span>
                                        </p>
                                    </div>
                                    {/* lists */}
                                    <Link
                                    to={`/`}
                                    className="flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                    >
                                    <CiHome className="mx-1" />
                                    Home Page
                                    </Link>
                                    <Link
                                    to={`/categories`}
                                    className="flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                    >
                                    <IoListCircleOutline className="mx-1" />
                                        Categories
                                    </Link>
                                    <Link
                                    to={`/dashboard/profile`}
                                    className="flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                    >
                                    <CiUser className="mx-1" />
                                    My Account
                                    </Link>
                                    <Link
                                    to="/dashboard/orders"
                                    className=" flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                    >
                                    <BiPurchaseTag className="mx-1" />
                                    My Order
                                    </Link>
                                    <ShowAdmin>
                                        <Link
                                        to={`/dashboard/home-dashboard`}
                                        className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                        >
                                        <CiEdit className="mx-1" />
                                        Admin Dashboard
                                        </Link>
                                    </ShowAdmin>
                                    <ShowOnLogout>
                                        <Link
                                        to={`login`}
                                        className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                        >
                                        <CiLogin className="mt-1 mx-1" />
                                        Login
                                        </Link>
                                    </ShowOnLogout>
                                    <ShowOnLogin>
                                        <p
                                        onClick={Logout}
                                        className="flex items-center text-red font-bold p-2 cursor-pointer hover:underline underline-offset-4"
                                        >
                                        <CiLogout className="mt-1 mx-1" />
                                        Logout
                                        </p>
                                    </ShowOnLogin>
                                </div>
                                <div className="p-2">
                                    <h1 className="px-4 font-bold text-lg flex items-center">
                                        <MdOutlineConnectWithoutContact />
                                        Connect with us
                                    </h1>
                                    <div className="flex items-center justify-between px-2">
                                        <SocialMedia />
                                        <p className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4 bg-gray/20 rounded-full">
                                            <LuSunMoon className="mx-1" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="md:flex flex-inline hidden text-lg">
                <NavLink
                to="categories"
                className={({ isActive }) =>
                    isActive
                    ? "flex rounded-full items-center p-2 cursor-pointer underline underline-offset-4 decoration-brown decoration-2 font-bold"
                    : "flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                }
                >
                <MdCategory className="mx-1" />
                Categories
                </NavLink>
                <ShowCustomer>
                <div className=" p-2 flex">
                    <NavLink
                    to="/dashboard/orders"
                    className={({ isActive }) =>
                        isActive
                        ? "flex rounded-full items-center p-2 cursor-pointer underline underline-offset-4 decoration-brown decoration-2 font-bold"
                        : "flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                    }
                    >
                    <BiPurchaseTag className="mx-1" />
                    My Order
                    </NavLink>
                </div>
                </ShowCustomer>
                <ShowAdmin>
                <div className=" p-2 flex">
                    <NavLink
                    to={`/dashboard/home-dashboard`}
                    className={({ isActive }) =>
                        isActive
                        ? "flex rounded-full items-center p-2 cursor-pointer underline underline-offset-4 decoration-green decoration-2 font-bold"
                        : "flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                    }
                    >
                    <AiFillDashboard className="mx-1" />
                    Dashboard
                    </NavLink>
                </div>
                </ShowAdmin>
            </div>
            <div className="items-center space-x-2 flex z-[999]">
                <div className="px-2 relative items-center space-x-4 hidden  md:flex">
                    <div
                        onClick={() => setMenu(!menu)}
                        className="flex items-center cursor-pointer space-x-3 transition-all"
                    >
                        <ShowOnLogout>
                        <CiUser className="text-xl" />
                        </ShowOnLogout>
                        <ShowOnLogin>
                        <RiUserFollowLine className="text-xl" />
                        </ShowOnLogin>
                        <h1 className="capitalize">
                        Hi,{userInfo ? userInfo.username : "user"}
                        </h1>
                        {menu ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
                    </div>
                    <div className="absolute top-10 right-0">
                        {menu && (
                        <div className="drop-shadow w-80 rounded-xl p-4 bg-white">
                            <div className="border-b border-gray/20 p-2 flex">
                                <p className="rounded-full h-14 w-14 flex items-center justify-center">
                                    <img
                                    src={
                                        userInfo
                                        ? userInfo.profilePicture
                                        : `https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg`
                                    }
                                    alt="image"
                                    />
                                </p>
                                <p className="flex flex-col px-2">
                                    <span className="font-bold capitalize">
                                    {userInfo ? userInfo.username : "user"}
                                    </span>
                                    <span className="font-light">Nigeria</span>
                                </p>
                            </div>
                            <ShowCustomer>
                                <div className="">
                                    <Link
                                    to={`/dashboard/profile`}
                                    className="flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                    >
                                    <CiUser className="mx-1" />
                                    Account
                                    </Link>
                                    <Link
                                    to="/dashboard/orders"
                                    className=" flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                    >
                                    <BiPurchaseTag className="mx-1" />
                                    My Order
                                    </Link>
                                </div>
                            </ShowCustomer>
                            <ShowAdmin>
                                <div>
                                    <Link
                                    to={`/dashboard/home-dashboard`}
                                    className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                    >
                                    <CiEdit className="mx-1" />
                                    Dashboard
                                    </Link>
                                    <Link
                                    to={`/dashboard/products`}
                                    className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                    >
                                    <TbChecklist className="mx-1" />
                                    View Products
                                    </Link>
                                    <Link
                                    to={`dashboard/products`}
                                    className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                    >
                                    <RxUpdate className="mx-1" />
                                    Update Product
                                    </Link>
                                </div>
                            </ShowAdmin>
                            <div>
                            <p className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4">
                                <LuHelpCircle className="mx-1" />
                                Help
                            </p>
                            <div className="flex items-center justify-between">
                                <SocialMedia />
                                <p className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4 bg-gray/20 rounded-full">
                                    <LuSunMoon className="mx-1" />
                                </p>
                            </div>
                            <ShowOnLogout>
                                <Link
                                to={`login`}
                                className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                >
                                <CiLogin className="mt-1 mx-1" />
                                Login
                                </Link>
                            </ShowOnLogout>
                            <ShowOnLogin>
                                <p
                                onClick={Logout}
                                className="flex items-center p-2 text-red font-bold cursor-pointer hover:underline underline-offset-4"
                                >
                                <CiLogout className="mt-1 mx-1" />
                                Logout
                                </p>
                            </ShowOnLogin>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
                <NavLink to="/mycart" className="px-1 text-xl relative cursor-pointer ">
                    <p className="relative">
                        <BsCartCheck />
                        <span className="absolute -top-3 -right-3 px-1 text-sm bg-blue text-white rounded-full flex item-center justify-center ">
                        {cartTotalQuantity}
                        </span>
                    </p>
                </NavLink>
            </div>
        </div>
    </header>
  );
};
