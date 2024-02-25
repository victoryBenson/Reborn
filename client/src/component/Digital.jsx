import React from 'react'
import 'react-responsive-modal/styles.css';
import { Link } from 'react-router-dom';
import { TbArrowBearLeft } from "react-icons/tb";
import { Loader } from './Loader';
import { useFetchItemsQuery } from '../redux/features/product/generalApi';
import { DigitalDetails } from './DigitalDetails';

export const Digital = () => {
    const {data, error, isLoading, isFetching, isError,isSuccess} = useFetchItemsQuery()
    // console.log(data)
   
    if(isLoading) return <div className='flex justify-center'><Loader/></div>
    if(isError) return <div>Error:{error.message}</div>
    return (
        <div className=''>
            <h1 className='text-gray text-3xl text-center p-14'>
                Digital Collections
            </h1>
            {data.length && (
                <div className='flex justify-center items-center'>
                    {
                        data.filter(product => product.category == "digital").map((product) => {
                            return (
                                <DigitalDetails key={product._id} product={product}/>
                            )
                        })
                    }             
                </div>
            )}
            <div className='flex justify-between items-center mx-14 mt-5 p-5 border-t border-blue/10'>
                <Link to='/landPage' className=' bg-[#f8f8ff] space-x-2 flex items-center justify-center px-4 p-2 rounded-full shadow transition-all cursor-pointer'>
                    <TbArrowBearLeft className=''/>
                    <span className=''>Go back</span>
                </Link> 
            </div>
        </div>
     )
}

