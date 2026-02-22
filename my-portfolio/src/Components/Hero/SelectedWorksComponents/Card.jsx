import React from 'react'
import  MyTorApp  from '../../../assets/ProjectsPhotos/MyTorHomePage.png';
import { Button } from "@/components/ui/button"

const Card = () => {
  return (
    <div className='min-h-[300px] max-h-[300px] min-w-[300px] max-w-[300px] bg-white  flex flex-col gap-2  border'>
        <div className='border flex-[2] flex flex-col'>
            <img src={ MyTorApp } className='min-h-[300px] max-h-[300px] min-w-[295px] max-w-[300px] object-cover  border' alt="" />
            </div>
        <div className='border flex-1 p-2'>
            <h1 className='text-lg font-semibold'>BloomCare-Mental Helth App Landing Page</h1>
        </div>
        <div className='border flex flex-1 p-2 gap-2'>
            <div className='border border-gray-400 p-1 rounded-r-full rounded-l-full'>
                <span>Landing</span>
            </div>
            <div className='border border-gray-400 p-1 rounded-r-full rounded-l-full'>
                <span>Mobile</span>
                
            </div>
        </div>
    </div>
  )
}

export default Card