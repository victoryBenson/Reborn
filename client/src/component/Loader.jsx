import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import { Circles } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <div className='flex justify-center '>
        <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
        />
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