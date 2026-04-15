import React, { useState } from 'react'
import Ux from '../../../public/ProjectsPhotos/Cart2.png' 
import Booking from '../../../public/ProjectsPhotos/BookingClone.png' 
import MyTorHomePage from '../../../public/ProjectsPhotos/MyTorHomePage.png' 
import SapirSkincare3 from '../../../public/ProjectsPhotos/SapirSkincare3.png' 
import ServiceCard from './ServiceCard'

const Service = () => {
    const [serviceName,setServiceName] = useState("")

    const services = [
        {
            value: "item-1",
            title: "UIUX DESIGN",
            subtitle:"Designing clear mobile apps and website",
            image: Ux
        },
        {
            value: "item-2",
            title: "WEB DESIGN",
            subtitle:"Building responsive, high-performing, and modern websites.",
            image: Booking
        },
        {
            value: "item-3",
            title: "BRANDING",
            subtitle:"Creating unique visual identities that tell your story",
            image: SapirSkincare3
        },
        {
            value: "item-4",
            title: "MOTIONS & ANIMATIONS",
            subtitle:"Bringing static designs to life with dynamic movement",
            image: MyTorHomePage
        }
    ]
  return (
    <div className='md:p-10 flex flex-col gap-10' >
        <div>
            <h1 className="text-3xl font-semibold text-center">/SERVICE</h1>
        </div>
        <div>
            <ServiceCard services={services} setServiceName={setServiceName} serviceName={serviceName}/>
        </div>
    </div>
  )
}

export default Service