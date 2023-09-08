import React from 'react'
import { useSelector } from 'react-redux';

const Hint = () => {
  const {
    hint
  } = useSelector((state) => state.hint)

  return (
    <div className="self-end text-xs sm:text-sm m-2 p-2 w-[80%] sm:w-[400px] rounded bg-gray-100 shadow-md">
      {hint}
    </div>
  )
}

export default Hint
