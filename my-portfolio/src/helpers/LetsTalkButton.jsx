import React from 'react'
import { useContext } from 'react';
import { ScrollContext } from './ScrollContext';
import { FiArrowUpRight } from "react-icons/fi";

const LetsTalkButton = () => {
    const { scrollToContact } = useContext(ScrollContext);
  return (
    <div onClick={scrollToContact} className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
        <span className="font-semibold">Let's Talk</span>
        <FiArrowUpRight className="w-4 h-4" />
      </div>
  )
}

export default LetsTalkButton