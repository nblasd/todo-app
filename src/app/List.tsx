import React from 'react'
import { MdDeleteOutline } from "react-icons/md";


function List() {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 w-2/3 rounded-md">
            <p className="w-11/12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ad.</p>
            <button className="text-red-500 text-[1.5rem]"><MdDeleteOutline /></button>
          </div>
  )
}

export default List