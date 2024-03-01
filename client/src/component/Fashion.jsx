import React from 'react'
import 'react-responsive-modal/styles.css';
import { Link } from 'react-router-dom';
import { TbArrowBearLeft } from "react-icons/tb";
import { Loader } from './Loader';
import { useFetchItemsQuery } from '../redux/features/product/generalApi';
import { FashionDetails } from './FashionDetails';

export const Fashion = () => {
    const {data, error, isLoading, isFetching, isError,isSuccess} = useFetchItemsQuery()
    // console.log(data)
   
    if(isLoading) return <div className='flex justify-center'><Loader/></div>
    if(isError) return <div>Error:{error.message}</div>
    return (
        <div className=''>
            {data.length && (
                <div className='flex flex-wrap justify-center items-center'>
                    {
                        data.filter(product => product.category == "Fashion").map((product) => {
                            return (
                                <FashionDetails key={product._id} product={product}/>
                            )
                        })
                    }             
                </div>
            )}
        </div>
     )
}

