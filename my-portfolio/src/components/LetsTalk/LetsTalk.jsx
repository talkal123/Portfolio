import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import ContactForm from "./ContactForm";

const LetsTalk = () => {
  return (
    <div>
          <div className="border-solid border-gray-100 border pr-2 pl-2 p-2 rounded-r-full gap-1 rounded-l-full flex  items-center justify-center bg-black text-white ">
            <span className="cursor-pointer font-semibold text-center">
              Let's Talk
            </span>
            <div className="flex items-center justify-center">
              <FiArrowUpRight className="w-4 h-4" />
            </div>
          </div>
    </div>
  );
};

export default LetsTalk;
