import React, { useState } from "react";
import { Loader } from "../component/Loader";
import { FaUsersViewfinder } from "react-icons/fa6";
import { BsCartCheck, BsPlusLg } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import { truncateString } from "../utils";
import Modal from "react-responsive-modal";
import { useFetchItemsQuery } from "../redux/features/product/generalApi";


export const AdminProducts = () => {
  const { data = [], error, isLoading, isError } = useFetchItemsQuery();
//   console.log(data);
const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  if (isLoading)
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  if (isError) return <div className="flex justify-center">Error:{error}</div>;

  return (
    <section className="max md:w-full mx-2 shadow">
      <div className="flex flex-wrap justify-evenly items-center py-5 space-y-4">
        <div className="cursor-pointer bg-lightBrown hover:shadow-lg transition-all w-60 p-3 rounded flex flex-col justify-center items-center font-bold text-xl text-ivory">
          <p onClick={()=> onOpenModal()} className="flex items-center">
            <BsPlusLg />
            Create new Product
          </p>
          <Modal 
            onClose={onCloseModal} 
            center 
            classNames={{
                overlay: 'bg-black/60 customOverlay ', 
                modal: ' md:w-full w-5/6 mx-auto h-[26rem] no-scrollbar transition-all shadow rounded-xl ',
                overlayAnimationIn: 'customEnterOverlayAnimation',
                overlayAnimationOut: 'customLeaveOverlayAnimation',
                modalAnimationIn: 'customEnterModalAnimation',
                modalAnimationOut: 'customLeaveModalAnimation',
                }}
                animationDuration={100}
                >
                    <div className="bg-white text-blue h-full w-full">hello</div>
            </Modal>
        </div>
      </div>
      <div>
        <h1 className="p-2 font-bold text-2xl">Products</h1>
        <div className="">
          {data.map((user) => {
            return (
              <div key={user._id} className="md:h-20 w-full my-4 group transition-all ">
                <div className="h-full flex flex-wrap justify-between items-center bg-white md:px-5 p-3 md:mx-5 rounded shadow relative">
                  <div className="absolute right-0 left-0 top-0 h-full w-full bg-brown/10 group-hover:flex hidden rounded items-center justify-center">
                    <p className="space-x-4">
                        <button type="button" className="bg-green mx-1 p-2 text-ivory rounded">Edit</button>
                        <button type="button" className="bg-red mx-1 p-2 text-ivory rounded">Delete</button>
                    </p>
                  </div>
                  <p className="flex items-center space-x-2">
                    <span>
                      <img
                        src={user.image[0]}
                        alt="image"
                        className="w-10 h-10"
                      />
                    </span>
                    <p className="text-center">
                      <span className="font-bold">Name:</span>
                      <p>{truncateString(user.name, 20)}</p>
                    </p>
                  </p>
                  <p className="text-center">
                    <span className="font-bold">Quantity:</span>
                    <p>{user.quantity}</p>
                  </p>
                  <p className="text-center">
                    <span className="font-bold">Category:</span>
                    <p className="capitalize">{user.category}</p>
                  </p>
                  <p className="text-center">
                    <span className="font-bold">Brand:</span>
                    <p className="capitalize">{user.brand}</p>
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
