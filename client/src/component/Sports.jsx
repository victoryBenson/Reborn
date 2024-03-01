import React from 'react'
import 'react-responsive-modal/styles.css';
import { Link } from 'react-router-dom';
import { TbArrowBearLeft } from "react-icons/tb";
import { Loader } from './Loader';
import { SportsDetails } from './SportsDetails';
import { useFetchItemsQuery } from '../redux/features/product/generalApi';

export const Sports = () => {
    const {data, error, isLoading, isFetching, isError,isSuccess} = useFetchItemsQuery()
    // console.log(data)
   
    if(isLoading) return <div className='flex justify-center'><Loader/></div>
    if(isError) return <div>Error:{error.message}</div>
    return (
        <div className=''>
            {data.length && (
                <div className='flex justify-center items-center'>
                    {
                        data.filter(product => product.category == "Sport").map((product) => {
                            return (
                                <SportsDetails key={product._id} product={product}/>
                            )
                        })
                    }             
                </div>
            )}
        </div>
     )
}

