import TriviaContext from "../context/trivia";
import { useContext } from "react";
import Categories from "./categories";
import Slider from "./slider";

const Form = () => {
  const { formData, setFormData, callApi, setCurrentQuestion, setIsPlaying, setScore } = useContext(TriviaContext)

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
      <div className="bg-white py-8 px-2 flex flex-col items-center rounded-md shadow-lg relative">
        <div className="absolute top-[-80px] w-[150px] h-[150px] rounded-full bg-white flex justify-center items-center">
          <img src={require('../media/quiz.png')} alt="trivia game logo"
          className="w-[130px] m-0 p-0"></img>
        </div>
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
