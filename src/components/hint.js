import React from 'react'
import { useSelector } from 'react-redux';

const Hint = () => {
  const {
    hint
  } = useSelector((state) => state.hint)

  return (
    <div>{hint}</div>
  )
}

export default Hint
