import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Products } from './Products';
import AOS from 'aos'
import "aos/dist/aos.css"
import { Loader } from './Loader';
import { TbShoppingBagSearch } from "react-icons/tb";
import { Explore, NotfoundGif } from './Spinner';
import { useFetchItemsQuery } from '../redux/features/product/generalApi';

export const GetProducts = () => {
    const [q, setQ] = useState("")
    const [searchParam] = useState(["name", "category", "brand"])
    const [filterParam, setFilterParam] = useState(["All"])
    const {data = [], error, isLoading, isError} = useFetchItemsQuery()
    // console.log(data)

    useEffect(() => {
        AOS.init({
          duration: 500
        })    
    },[])

    // search function
    const search = (items) => {
        return items.filter((item) => {
            if (item.category == filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                    );
                });
            }else if(filterParam == "All"){
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }

    const handleSearch = (e) => {
        setQ(e.target.value)
    }

    const handleFilter = (e) => {
        setFilterParam(e.target.value);
    }

    if(isLoading) return <div className='flex justify-center'><Loader/></div>
    if(isError) return <div>Error:{error}</div>
  return (
    <div className=' mt-5 ' id='search' >
        <div className='sm:p-5 my-10 px-3' data-aos="fade-right">
            <p className=' font-bold md:text-3xl text-xl text-brown flex items-center'>
                Start exploring
                <Explore/>
            </p>
            <span className='text-lightBrown sm:text-xl text-lg font-light'>Discover the most trending products in Reborn.</span>
        </div>
        <div data-aos="fade-down" className='flex flex-wrap justify-between items-center mx-auto py-6 sm:px-10 px-5'>
            <div className="search-wrapper w-96 my-2">
                <label htmlFor="search-form">
                    <input
                        type="search"
                        name="search-form"
                        className="search-input p-2 flex w-full outline-none bg-lightBrown/10 text-blue rounded"
                        placeholder="Search for products, category, brands etc..."
                        value={q}
                        onChange={handleSearch}
                    />
                </label>
            </div>
            {/*  */}
            <div>
                <select
                    onChange={handleFilter}
                    className="border-none p-2 rounded shadow bg-lightBrown/10">
                        <option value="All">Filter By Category</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Sport">Sports</option>
                        <option value="Fashion">Fashion</option>
                        <option value="digital">Digital</option>
                </select>
            </div>
        </div>
        <div >
            {!isLoading && data.length && (
                <>
                <div>
                    {
                        (q.length && search(data).length) ? (
                            <p className='flex items-center p-3 text-2xl'>search result! - <TbShoppingBagSearch /></p> 
                        ): 
                        null
                    }
                </div>
                <div className='flex flex-wrap justify-center items-center '>
                    {
                        (search(data).length)?
                            search(data).map((product) => {
                                return (
                                    <Products key={product._id} product={product}/>
                                )
                            })
                        :
                        <div className='p-5 font-bold text-3xl'>
                            <span className='flex items-center text-brown'>
                                <NotfoundGif/>
                                No match found!
                            </span>
                        </div>
                    } 
                </div>
                </>
            )}
        </div>
    </div>
  )
}
