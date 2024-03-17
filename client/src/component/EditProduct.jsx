import React from 'react'
import { TbShoppingBagEdit } from "react-icons/tb";

export const EditProduct = () => {
  return (
    <div className=" text-blue w-full flex justify-center">
        <form action="#" className=" w-full flex flex-col items-center space-y-2">
            <label htmlFor="" className="font-bold p-3 text-2xl flex items-center">
                <TbShoppingBagEdit />
                Edit Product
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
                <div className="flex space-x-2 py-2">
                    <div className="w-full ">
                        <label htmlFor="name" className="block">
                        Select Category:
                        </label>
                        <select name=""id="" className="p-2 border border-gray/10 rounded outline-none w-full"
                        >
                        <option value="Beauty">Beauty</option>
                        <option value="Beauty">Fashion</option>
                        <option value="Beauty">Digital</option>
                        <option value="Beauty">Sport</option>
                        </select>
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
            </div>
            <div className="flex w-full items-center space-x-2">
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
            <div className="w-full">
                <p className="w-full flex flex-col my-3">
                    <label htmlFor="name">Description</label>
                    <textarea name="" id="" cols="40" rows="5" placeholder="Enter product description" className="border border-gray/20 rounded outline-none p-2"></textarea>
                </p>
            </div>
            <div className="mx-2 my-6 w-full">
                <button type="submit" className="bg-lightBrown text-ivory p-2 rounded shadow w-full">UPDATE</button>
            </div>
        </form>
    </div>
  )
}
