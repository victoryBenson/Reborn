import React from 'react'

export const CreateProduct = () => {

  return (
    <div className=" text-blue  w-full flex justify-center">
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
  )
}
