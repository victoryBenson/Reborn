import React, { useEffect, useState } from "react";
import { Loader } from "../component/Loader";
import { FaUsersViewfinder } from "react-icons/fa6";
import { BsCartCheck, BsPlusLg } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import { truncateString } from "../utils";
import Modal from "react-responsive-modal";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getTotalProduct } from "../redux/features/product/productAction"; 
import { EditProduct } from "../component/EditProduct";
import { CreateProduct, PreviewProduct } from "../component/CreateProduct";

const initialState = {
    name:"",
    category: "",
    quantity: "",
    price:"",
    oldPrice:  "",
    brand:"",
    description: ""
}

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
      <div className="flex justify-center items-center h-screen w-full">
        <Loader />
      </div>
  );
  
  if (isError) return <div className="flex justify-center ">Error:{errMessage}</div>;

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
              modal:" md:w-full w-5/6 mx-auto sm:h-[30rem] no-scrollbar transition-all shadow rounded-xl",
              overlayAnimationIn: "customEnterOverlayAnimation",
              overlayAnimationOut: "customLeaveOverlayAnimation",
              modalAnimationIn: "customEnterModalAnimation",
              modalAnimationOut: "customLeaveModalAnimation",
            }}
            animationDuration={100}
          >
            <CreateProduct/>
          </Modal>
        </div>
      </div>
      <div>
        <h1 className="p-2 font-bold text-2xl">Products</h1>
        <div className="">
          {items?.map((item) => {
            return (
                <Items key={item._id} item={item} PreviewProduct={item}/>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export const Items = ({item}) => {
    const {_id, image, name, quantity, category, brand, description} = item
    const [open, setOpen] = useState(false);
    const [updateBtn, setUpdateBtn] = useState(false)
    const [formData, setFormData] = useState(initialState) 


    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const toggleEdit = () => setUpdateBtn(!updateBtn)

    return(
        <div  className=" my-4 group transition-all ">
            <div className="flex h-full justify-center gap-4 items-center bg-white md:px-5 p-3 md:mx-5 rounded shadow relative">
                <div className="flex justify-center space-x-2 items-center w-full ">
                    <div className="w-40 h-[16vh] flex justify-center items-center">
                        <div className=" flex justify-center ">
                            <img
                                src={image[0]}
                                alt="image"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                    <div className="h-[16vh] flex items-center">
                        <div className="w-full space-y-2">
                            <p className="text-center gap-1 flex items-center">
                                <span className="font-bold">Name:</span>
                                <p className="capitalize">{truncateString(name, 20)}</p>
                            </p>
                            <p className="text-center flex items-center gap-4">
                                <p className="flex items-center gap-1">
                                    <span className="font-bold">Quantity:</span>
                                    <p>{quantity.toLocaleString()}</p>
                                </p>
                                <p className="text-center gap-1 flex items-center">
                                    <span className="font-bold">Category:</span>
                                    <p className="capitalize">{category}</p>
                                </p>
                            </p>
                            <p className="text-center gap-1 flex items-center">
                                <span className="font-bold">Brand:</span>
                                <p className="capitalize">{brand}</p>
                            </p>
                            <p className=' space-x-2 sm:space-x-4'>
                                <button onClick={onOpenModal} className='shadow border border-gray/10 rounded-lg p-2 px-4 bg-ivory'> Preview</button>
                                <Modal open={open} 
                                    center 
                                    onClose={onCloseModal}
                                    classNames={{
                                    overlay: 'bg-black/10 customOverlay ', 
                                    modal: ' md:w-1/2 w-5/6 mx-auto h-1/2 md:h-1/2 no-scrollbar transition-all shadow rounded-xl ',
                                    overlayAnimationIn: 'customEnterOverlayAnimation',
                                    overlayAnimationOut: 'customLeaveOverlayAnimation',
                                    modalAnimationIn: 'customEnterModalAnimation',
                                    modalAnimationOut: 'customLeaveModalAnimation',
                                    }}
                                    animationDuration={100}
                                    >
                                    <div className='flex items-center justify-center w-full'>
                                        <div className='flex-col flex items-center '>
                                            <p className="h-40 w-full flex">
                                                <img src={image[0]} alt="image" className="w-full h-full object-contain"/>
                                            </p>
                                            <p className="h-full">
                                                <h1 className="capitalize font-bold">{name}</h1>
                                                <p className=''>{description}?</p>                                    
                                            </p>
                                        </div>
                                    </div>
                                </Modal>
                                <button onClick={toggleEdit} className='shadow-lg rounded-lg p-2 px-4 bg-lightBrown text-ivory'>Edit</button>
                                <Modal
                                    onClose={toggleEdit}
                                    center
                                    open={updateBtn}
                                    classNames={{
                                    overlay: "bg-black/60 customOverlay ",
                                    modal:
                                        " md:w-full w-5/6 mx-auto sm:h-[30rem] no-scrollbar transition-all shadow rounded-xl ",
                                    overlayAnimationIn: "customEnterOverlayAnimation",
                                    overlayAnimationOut: "customLeaveOverlayAnimation",
                                    modalAnimationIn: "customEnterModalAnimation",
                                    modalAnimationOut: "customLeaveModalAnimation",
                                    }}
                                    animationDuration={100}
                                >
                                    <EditProduct/>
                                </Modal>
                                <button className='bg-red shadow-lg rounded-lg p-2 px-4 text-ivory'>Delete</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}