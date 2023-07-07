import { useState } from "react"

const Slider = ({onChange}) => {

  const [difficulty, setDifficulty] = useState(1)
  const [label, setLabel] = useState("Easy")

  const updateLabel = (e) => {
    let value = ''
    switch (e) {
      case "1": value = "Easy"
        break;
      case "2": value = "Medium"
        break;
      case "3": value = "Hard"
        break;
      default: value = label
        break;
    }
    setLabel(value)
  }

  const handleSliderChange = (e) => {
    setDifficulty(parseInt(e.target.value))
    updateLabel(e.target.value)
    onChange(e)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <label htmlFor="difficulty" className="inline-block mb-2 font-bold text-md">{label}</label>
      <input
        id="difficulty"
        className="m-auto w-full md:w-2/5 h-3 bg-gray-200 rounded appearance-none cursor-pointer range-lg mb-5"
        type="range"
        min="1"
        max="3"
        step="1"
        name="difficulty"
        value={difficulty}
        onChange={handleSliderChange}
      />
    </div>
  )
}

export default Slider;
