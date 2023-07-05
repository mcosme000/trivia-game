import TriviaContext from "../context/trivia";
import { useContext, useState } from "react";
import Categories from "./categories";
import Slider from "./slider";

const Form = () => {
  const [formData, setFormData] = useState({
    category: '',
    difficulty: ''
  })

  const { callApi, setCurrentQuestion, setIsPlaying, setScore } = useContext(TriviaContext)

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
    setScore(0)
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 flex flex-col items-center rounded-md shadow-lg">
        <img src={require('../media/quiz.png')} alt="trivia game logo"
        className="w-[80px] mb-4"></img>
        <form onSubmit={handleSubmit} className="p-5 flex flex-col">
          <div>
            <Categories onChange={handleChange}/>
            <Slider onChange={handleChange}/>
          </div>
          <button type="submit"
          className="bg-yellow hover:bg-yellow-dark text-sm px-8 py-2 rounded-md font-bold tracking-wide cursor-pointer">START</button>
        </form>
      </div>
    </div>
  )
}

export default Form;
