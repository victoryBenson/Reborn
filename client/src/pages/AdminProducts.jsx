import React, { useEffect, useState } from "react";
import { Loader } from "../component/Loader";
import { FaUsersViewfinder } from "react-icons/fa6";
import { BsCartCheck, BsPlusLg } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import { truncateString } from "../utils";
import Modal from "react-responsive-modal";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getTotalProduct } from "../redux/features/product/productAction";

export const AdminProducts = () => {
  const dispatch = useDispatch()
  const {errMessage, isLoading, isError, items} = useSelector(state => state.products)
    // const product = useSelector(state => state.products)
//   console.log(items)

  useEffect(() => {
    dispatch(getProducts()),
    dispatch(getTotalProduct())
  }, [])
  
  
  const [open, setOpen] = useState(false);
  const [radioColor, setRadioColor] = useState("As Seen")

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleColor = (e) => {
    setRole(e.target.value)
  }

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
  );
  
  if (isError) return <div className="flex justify-center">Error:{errMessage}</div>;

  return (
    <section className="max md:w-full mx-2 shadow">
      <div className="flex flex-wrap justify-evenly items-center py-5 space-y-4">
        <div className="cursor-pointer bg-lightBrown hover:shadow-lg transition-all w-60 p-3 rounded flex flex-col justify-center items-center font-bold text-xl text-ivory">
          <p onClick={onOpenModal} className="flex items-center">
            <BsPlusLg />
            Create new Product
          </p>
          <Modal
            onClose={onCloseModal}
            center
            open={open}
            classNames={{
              overlay: "bg-black/60 customOverlay ",
              modal:
                " md:w-full w-5/6 mx-auto h-[30rem] no-scrollbar transition-all shadow rounded-xl ",
              overlayAnimationIn: "customEnterOverlayAnimation",
              overlayAnimationOut: "customLeaveOverlayAnimation",
              modalAnimationIn: "customEnterModalAnimation",
              modalAnimationOut: "customLeaveModalAnimation",
            }}
            animationDuration={100}
          >
            <div className=" text-blue h-full w-full flex justify-center">
              <form action="#" className=" w-full flex flex-col items-center ">
                <label htmlFor="" className="font-bold p-3 text-2xl">
                  Create a new Product
                </label>
                <div className="md:flex w-full items-center space-x-2 py-3">
                  <div className="w-full">
                    <label htmlFor="name">Product name</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter product name"
                      className="w-full p-2 outline-none border border-gray/10 rounded"
                    />
                  </div>
                  <div className="w-full ">
                    <label htmlFor="name" className="block">
                      Select Category:
                    </label>
                    <select
                      name=""
                      id=""
                      className="p-2 border border-gray/10 rounded outline-none w-full"
                    >
                      <option value="Beauty">Beauty</option>
                      <option value="Beauty">Fashion</option>
                      <option value="Beauty">Digital</option>
                      <option value="Beauty">Sport</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label htmlFor="name">Brand</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter product brand"
                      className="w-full p-2 outline-none border border-gray/10 rounded"
                    />
                  </div>
                </div>
                <div className="flex w-full items-center space-x-2 py-3">
                  <div className="w-full">
                    <label htmlFor="name">Price</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter product price"
                      className="w-full p-2 outline-none border border-gray/10 rounded"
                    />
                  </div>
                  <div className="w-full ">
                    <label htmlFor="name">Old Price</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter product price"
                      className="w-full p-2 outline-none border border-gray/10 rounded"
                    />
                  </div>
                  <div className="w-full ">
                    <label htmlFor="name">Quantity</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter product quantity"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                      className="w-full p-2 outline-none border border-gray/10 rounded"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap w-full items-center space-x-2">
                  <div className="w-full flex flex-col">
                    <label htmlFor="name">Description</label>
                    <textarea name="" id="" cols="10" rows="5" placeholder="Enter product description" className="border border-gray/20 rounded outline-none p-2"></textarea>
                  </div>
                  <div className="w-full py-2">
                    <div className="flex space-x-3">
                        <label htmlFor="name">Select Color:</label>
                        <div className="flex space-x-3">
                            <p className="flex">
                                <input
                                type="radio"
                                name="color"
                                id=""
                                value= "As Seen"
                                className=""
                                onChange={handleColor}
                                checked = {radioColor === "As Seen"}
                                />
                                <label htmlFor="asSeen">As Seen</label>
                            </p>
                            <p className="flex">
                                <input
                                type="radio"
                                name="color"
                                id=""
                                value= "color"
                                className=""
                                onChange={handleColor}
                                // checked = {radioColor === "As Seen"}
                                />
                                <label htmlFor="asSeen">Use Hex Code</label>
                            </p>
                        </div>
                    </div>
                    {
                        radioColor &&
                        <div className="flex space-x-3 py-2">
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="color code"
                                className="w-full p-2 outline-none border border-gray/10 rounded"
                            />
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="color code"
                                className="w-full p-2 outline-none border border-gray/10 rounded"
                            />
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="color code"
                                className="w-full p-2 outline-none border border-gray/10 rounded"
                            />
                        </div>
                    }
                  </div>
                </div>
                <div className="flex w-full items-center space-x-2">
                  <div className="w-full">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="product name"
                      className="w-full p-2 outline-none border border-gray/10 rounded"
                    />
                  </div>
                  <div className="w-full ">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="product name"
                      className="w-full p-2 outline-none border border-gray/10 rounded"
                    />
                  </div>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>
      <div>
        <h1 className="p-2 font-bold text-2xl">Products</h1>
        <div className="">
          {items?.map((item) => {
            return (
              <div
                key={item._id}
                className="md:h-20 w-full my-4 group transition-all "
              >
                <div className="h-full flex flex-wrap justify-between items-center bg-white md:px-5 p-3 md:mx-5 rounded shadow relative">
                  <div className="absolute right-0 left-0 top-0 h-full w-full bg-brown/10 group-hover:flex hidden rounded items-center justify-center">
                    <p className="space-x-4">
                      <button
                        type="button"
                        className="bg-brown mx-1 p-2 px-4 text-ivory rounded"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="bg-red mx-1 p-2 px-4 text-ivory rounded"
                      >
                        Delete
                      </button>
                    </p>
                  </div>
                  <p className="flex items-center space-x-2">
                    <span>
                      <img
                        src={item.image[0]}
                        alt="image"
                        className="w-10 h-10"
                      />
                    </span>
                    <p className="text-center">
                      <span className="font-bold">Name:</span>
                      <p>{truncateString(item.name, 20)}</p>
                    </p>
                  </p>
                  <p className="text-center">
                    <span className="font-bold">Quantity:</span>
                    <p>{item.quantity.toLocaleString()}</p>
                  </p>
                  <p className="text-center">
                    <span className="font-bold">Category:</span>
                    <p className="capitalize">{item.category}</p>
                  </p>
                  <p className="text-center">
                    <span className="font-bold">Brand:</span>
                    <p className="capitalize">{item.brand}</p>
                  </p>
                  <p className='text-center space-x-4 p-3'>
                        <button className=''>Edit</button>
                        <button className='text-red'>Delete</button>
                </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="p-2 font-bold text-2xl">Orders</h1>
      </div>
    </section>
  );
};
