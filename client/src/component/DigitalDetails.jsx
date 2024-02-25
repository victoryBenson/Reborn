import React, {useState} from 'react'
import { TbCurrencyNaira } from "react-icons/tb";
import { BsBagCheck } from "react-icons/bs";
import { TiArrowMaximise } from "react-icons/ti";
import { CiCircleMinus, CiHeart } from "react-icons/ci";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { truncateString } from '../utils';
import { CiCirclePlus } from "react-icons/ci";
import { BsCartX } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";


export const DigitalDetails = ({product}) => {
    const {_id, image, name, description, color, section,sku, quantity, size, brand, price, oldPrice} = product
    const [open, setOpen] = useState(false);
    const [Color, setColor] = useState(product.color[1])
    const [Size, setSize] = useState(product.size[0])
    const [Image, setImage] = useState(product.image[0])


    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    
  return (
    <div className='shadow rounded-xl w-72 h-96 relative group mx-2 my-2'>
        <div className='bg-white h-2/3 flex justify-center relative overflow-hidden rounded-t-xl'>
            <div className='group-hover:flex hidden bg-ivory/30 transition-all absolute z-10 top-0 right-0 left-0 w-full h-full'>
                <p className='bottom-4 flex justify-center absolute w-full'>
                    <p className='flex '>
                        <button className='flex mx-2 items-center bg-brown p-2 px-3 rounded-full text-ivory'>
                            <BsBagCheck/> 
                            Add to bag
                        </button>
                        <button onClick={()=> onOpenModal(_id)} className='flex mx-2 items-center bg-ivory rounded-full p-2'>
                            <TiArrowMaximise/>
                            Quick view
                        </button>
                        <Modal open={open} 
                            onClose={onCloseModal} center 
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
                            <div className='sm:p-3 grid md:grid-cols-2 grid-cols-1 gap-4 '>
                                <div className='relative p-2'>
                                    <span className='absolute top-4 right-4 p-2 z-10 bg-gray/10 rounded-full cursor-pointer'>
                                        <CiHeart size={20} className='text-[#09d7bf77]'/>
                                    </span>
                                    <div className='h-72 w-full'>
                                        <img src={Image} className='object-cover w-full h-full rounded-lg' alt="image" />
                                    </div>
                                    <p className='flex pt-3  h-20 w-full justify-center'>
                                        {
                                            image.map((mImage, idx) => {
                                                return (
                                                    <div key={idx} onClick={()=> setImage(mImage)} className='cursor-pointer mx-1'>
                                                        <img src={mImage} alt="image" className='rounded object-cover h-full w-full' />
                                                    </div>
                                                )
                                            })
                                        }
                                    </p>
                                </div>
                                <div>
                                    <h1 className=' font-bold text-xl'>{name}</h1>
                                    <p className='p-1 text-green'>Sku: {sku}</p>
                                    <p className=' py-4 p-2 text-gray'>{description}</p>
                                    <p className='py-3  flex items-center' >
                                        Color: {
                                            color.length ? 
                                                color.map((mColor, index) => {
                                                    return (
                                                        <div key={index} onClick={()=> setColor(mColor)} className={` ${ Color == mColor && `outline-current`} "ring p-3 px-5 shadow-md mx-2 rounded border-1 border-blue/10 " `} style={{backgroundColor: mColor}}>
                                                            {Color == mColor && <FaCheck className='text-gray-light' />}
                                                        </div>
                                                    )
                                                })
                                                :
                                                "As seen"
                                        }
                                    </p>
                                    <p className='py-3  flex flex-wrap items-center' >
                                        Size: 
                                        {
                                            size.length ?
                                            size.map((mSize, index) => {
                                                return (
                                                    <div key={index} onClick={()=> setSize(mSize)} className={`${Size == mSize && `outline outline-2 outline-current uppercase`} " p-1 px-4 shadow mx-2 rounded cursor-pointer m-1 " `} >
                                                        {mSize}
                                                    </div>
                                                )
                                            })
                                            :
                                            " As seen"
                                        }
                                    </p>
                                    <div className='flex flex-wrap sm:flex-nowrap items-center pt-4'>
                                        <p className='space-x-3 sm:w-1/3 justify-center flex mx-2 items-center bg-gray-light/50 p-3 rounded-full'>
                                            <CiCircleMinus size={30} className='mx-1 cursor-pointer hover:opacity-10 transition-all'/> 
                                            10
                                            <CiCirclePlus size={30} className='mx-1 cursor-pointer hover:opacity-10 transition-all'/> 
                                        </p>
                                        <p className='w-full py-3'>
                                            {
                                                quantity > 0 ? (
                                                    <button className='hover:opacity-80 transition-all w-full justify-center flex items-center bg-blue p-3 rounded-full text-white'>
                                                        <BsBagCheck className='mx-1'/> 
                                                        Add to cart
                                                    </button>
                                                )
                                                    :
                                                    (
                                                    <button className='cursor-not-allowed transition-all hover:opacity-10 w-full justify-center flex mx-2 items-center bg-gray-light p-3 rounded-full text-white'>
                                                        <BsCartX className='mx-1 text-[#d94444]'/> 
                                                        Out of stock
                                                    </button>
                                                )
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </p>
                </p>
            </div>
            <span className='absolute top-2 right-2 p-2 z-10 bg-gray/10 text-green rounded-full cursor-pointer'>
                <CiHeart size={20}/>
            </span>
            <img src={image[0]} alt="image" className='group-hover:scale-110 object-cover w-full cursor-pointer overflow-hidden duration-100 transition-all ' />
        </div>
        <div className='p-3 fle flex-col h-full'>
            <p className='font-bold text-blue'>{truncateString(name, 20)}</p>
            <p className='text-gray py-2'>Brand: {brand}</p>
            <p className='flex p-1'>
                <span className='px-2 font-bold rounded flex items-center bg-brown text-ivory'>
                    <TbCurrencyNaira/>
                    {price?.toLocaleString()}
                </span>
                <span className='px-2 line-through text-gray flex items-center'>
                    <TbCurrencyNaira/>
                    {oldPrice}
                </span>
            </p>
        </div>
    </div>
  )
}
