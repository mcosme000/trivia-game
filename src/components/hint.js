import React from 'react'
import { useSelector } from 'react-redux';
import SyncLoader from "react-spinners/SyncLoader";

const Hint = () => {
  const {
    hint,
    status,
  } = useSelector((state) => state.hint)

  if (status === "loading") {
    return (
      <div className="flex items-center self-end text-xs m-2 p-2 w-[150px]">
        <p className="mr-3">Getting hint...</p>
        <SyncLoader
          size={5} color={"#FFCD00"}
        />
      </div>
    )
  }

  if (status === "failed") {
    return (
      <div className="self-end text-xs m-2 p-2 w-[200px] bg-gray-100">
        <p className="mr-3 text-rose-600 font-bold">Couldn't load the hint, try again later 🙁</p>
      </div>
    )
  }

  if (status === "succeeded") {
     return (
      <div className="self-end text-xs sm:text-sm m-2 p-2 w-[80%] sm:w-[400px] rounded bg-gray-100 shadow-md">
        {hint}
      </div>
    )
  }

}

export default Hint
