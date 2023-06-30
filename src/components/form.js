import TriviaContext from "../context/trivia";
import { useContext, useState } from "react";
import Categories from "./categories";
import Slider from "./slider";

const Form = () => {
  const [formData, setFormData] = useState({
    category: '',
    difficulty: ''
  })

  const { callApi, setCurrentQuestion, setIsPlaying } = useContext(TriviaContext)

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPlaying(true)
    callApi(formData)
    setCurrentQuestion(0)
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit}
      className="p-5 flex flex-col items-center">
        <div>
          <Categories onChange={handleChange}/>
          <Slider onChange={handleChange}/>
        </div>
        <button type="submit" className="bg-green px-8 py-2 rounded-md">Start</button>
      </form>
    </div>
  )
}

export default Form;
