import React from 'react'
import { useSelector } from 'react-redux';

const Hint = () => {
  const {
    hint
  } = useSelector((state) => state.hint)

  return (
    <div className="self-end text-sm m-2 w-[80%] md:w-[400px] p-3 rounded bg-gray-100">{hint}</div>
  )
}

export default Hint
