import React from 'react'
import { NotfoundGif } from '../component/Spinner'

export const NotFound = () => {
  return (
    <div className='text-3xl font-bold p-4 flex flex-col justify-center items-center h-[100vh]'>
        <NotfoundGif/>
        Page Not Found!
    </div>
  )
}
