import React from "react";
import { HiOutlineLogin } from "react-icons/hi";

const CustomButton = ({ children }: any) => {
  return (
    <span className="sm:ml-3">
      <button
        type="button"
        className="hover:opacity-1 
                    hover:opacity-1 
                    hover:opacity-3 
                    inline-flex 
                    items-center 
                    rounded-md 
                    border 
                    border-transparent 
                    bg-gray-900
                    px-4 py-2 
                    text-sm 
                    font-medium 
                    text-white
                    shadow-sm 
                    hover:bg-gray-700
                    hover:text-white 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-indigo-500 
                    focus:ring-offset-2"
      >
        <HiOutlineLogin className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        {children}
      </button>
    </span>
  );
};

export default CustomButton;
