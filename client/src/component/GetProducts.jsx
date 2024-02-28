import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Products } from './Products';
import AOS from 'aos'
import "aos/dist/aos.css"
import { Loader } from './Loader';
import { TbShoppingBagSearch } from "react-icons/tb";
import { Explore, NotfoundGif } from './Spinner';
import { useFetchItemsQuery } from '../redux/features/product/generalApi';
import hero from '../assets/image/herro.png'


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
    <div className='' id='search' >
        <div className='sm:p-5 lg:h-[50vh] md: h-[40vh] h- [20vh] transition-all px-3 flex flex-col justify-center items-center gap-4 bg-gradient-to-r from-lightBrown to-brown '>
            <div className='text-center flex flex-col justify-center items-center' data-aos="fade-down">
                <p className=' font-bold md:text-3xl text-xl text-ivory flex items-center'>
                    Explore, Shop, repeat again
                    <Explore/>
                </p>
                <p className='text-ivory sm:text-xl text-lg font-light'>Discover the most trending products in Reborn.</p>
            </div>
            <div className="search-wrapper p-2 w-full mx-auto" data-aos="fade-up">
                    <input
                        type="search"
                        name="search-form"
                        className="search-input p-3 flex w-full outline-none border border-gray/20 rounded"
                        placeholder="Search for Products, Category, Brands etc..."
                        value={q}
                        onChange={handleSearch}
                    />
            </div>
        </div>
        <div data-aos="fade-down" className='flex flex-wrap justify-between items-center mx-auto py-6 sm:px-10 px-5'>
            {/*  */}
            <div>
                <select
                    onChange={handleFilter}
                    className="outline-none p-3 rounded hover:shadow transition-all bg-white border border-gray/20">
                        <option value="All">All Product</option>
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
