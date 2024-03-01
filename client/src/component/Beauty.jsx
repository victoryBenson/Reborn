import React from 'react'
import 'react-responsive-modal/styles.css';
import { BeautyDetails } from './BeautyDetails';
import { Link } from 'react-router-dom';
import { TbArrowBearLeft } from "react-icons/tb";
import { Loader } from './Loader';
import { useFetchItemsQuery } from '../redux/features/product/generalApi';

export const Beauty = () => {
    const {data, error, isLoading, isError} = useFetchItemsQuery()
    console.log(data)
   
    if(isLoading) return <div className='flex justify-center'><Loader/></div>
    if(isError) return <div>Error:{error.message}</div>
    return (
        <div className=''>
            {data.length && (
                <div className='flex justify-center items-center'>
                    {
                        data.filter(product => product.category == "fragrances").map((product) => {
                            return (
                                <BeautyDetails key={product._id} product={product}/>
                            )
                        })
                    }             
                </div>
            )}
        </div>
     )
}

