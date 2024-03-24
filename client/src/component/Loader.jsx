import React from 'react'
import { Blocks } from 'react-loader-spinner'
import { Circles } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <div className=' justify-center flex flex-col items-center '>
        <Blocks
            visible={true}
            width="200"
            color="#45382c"
            ariaLabel="infinity-spin-loading"
        />
        <p className='font-bold text-xl'>Please Wait...</p>
    </div>
  )
}

export const Loader2 = () => {
  return (
    <div>
      <Circles
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}