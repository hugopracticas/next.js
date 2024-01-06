'use client'
import React from "react";
import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 5 }: Props) => {

  const [count, setCount] = useState(value)

  const counterPlus = () => {
    setCount( count + 1 )
  }

  const counterLess = () => {
    setCount( count - 1)
  }

  return (
    <>
      <span className="text-9xl"> {count} </span>

      <div className="flex">
        <button
          onClick={counterPlus}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>

        <button
          onClick={counterLess}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
