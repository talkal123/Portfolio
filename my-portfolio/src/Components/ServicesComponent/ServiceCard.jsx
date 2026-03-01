import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.jsx";

const ServiceCard = ({services,setServiceName, serviceName}) => {
  return (
    <div className="">
      <Accordion className="p-5" type="single" collapsible>
        {services.map((service,index) => (
        <AccordionItem onClick={() => setServiceName(service.title)} className={serviceName === service.title ? "bg-gray-600 text-amber-50 p-3 rounded-lg relative" : " text-black p-3 rounded-lg"} key={index} value={service.value}>
          <AccordionTrigger className="text-xl md:text-3xl">{service.title}</AccordionTrigger>
          <AccordionContent className="">
            <div className="flex w-full justify-between">
                <div><span>{service.subtitle}</span></div>
                <div className="max-w-[200px] max-h-[50px] rotate-5 absolute top-0 left-3/4 md:rotate-15 max-h-[100px]">
                  <img src={service.image} className="max-w-[200px] max-h-[50px] md:max-h-[100px] mt-2" alt="" />
                </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        ))}
        
      </Accordion>
    </div>
  );
};

export default ServiceCard;
