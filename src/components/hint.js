import React from 'react'
import getHint from '../services/hintService';

const Hint = (props) => {
  return (
    <div>
      <button onClick={() => getHint(props.question)}>Get hint!</button>
    </div>
  )
}

export default Hint
