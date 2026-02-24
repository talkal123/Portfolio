import React, { useState } from 'react'
import Ux from '../../../public/ProjectsPhotos/Cart2.png' 
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
            subtitle:"Designing clear mobile apps and websites",
            image: Ux
        },
        {
            value: "item-3",
            title: "BRANDING",
            subtitle:"Designing clear mobile apps and websites",
            image: Ux
        },
        {
            value: "item-4",
            title: "MOTIONS & ANIMATIONS",
            subtitle:"Designing clear mobile apps and websites",
            image: Ux
        }
    ]
  return (
    <div className='p-5 md:p-10 flex flex-col gap-10'>
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