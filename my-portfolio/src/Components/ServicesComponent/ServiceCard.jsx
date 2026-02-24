import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServiceCard = ({services,setServiceName, serviceName}) => {
  return (
    <div className="">
      <Accordion className="p-5" type="single" collapsible defaultValue="item-1">
        {services.map((service,index) => (
        <AccordionItem onClick={() => setServiceName(service.title)} className={serviceName === service.title ? "bg-gray-600 text-amber-50 p-3 rounded-lg relative" : "bg-white text-black p-3 rounded-lg"} key={index} value={service.value}>
          <AccordionTrigger>{service.title}</AccordionTrigger>
          <AccordionContent className="">
            <div className="flex w-full">
                <div><span>{service.subtitle}</span></div>
                <div className="max-w-[200px] max-h-[125px] absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2  rotate-10 "><img src={service.image} className="max-w-[200px] max-h-[125px]" alt="" /></div>
            </div>
          </AccordionContent>
        </AccordionItem>
        ))}
        
      </Accordion>
    </div>
  );
};

export default ServiceCard;
