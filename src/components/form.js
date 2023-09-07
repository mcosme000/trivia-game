import { startGame, updateFormData, fetchTriviaData } from "../slices/triviaSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Categories from "./categories";
import Slider from "./slider";

const Form = () => {
  const dispatch = useDispatch()
  const formData = useSelector((state) => state.trivia.formData)

  useEffect(() => {
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(updateFormData({name: name, value: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchTriviaData(formData))
    dispatch(startGame())
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center m-auto w-[95%]">
      <div className="px-5 py-6 h-[55%] w-[95%] md:w-[65%] lg:w-[45%] bg-white flex flex-col items-center rounded-md shadow-lg relative">
        <div className="absolute top-[-80px] w-[150px] h-[150px] rounded-full bg-white flex justify-center items-center">
          <img src={require('../media/quiz.png')} alt="trivia game logo"
          className="w-[130px] m-0 p-0"></img>
        </div>
        <div className="mt-12 h-full md:p-5 flex flex-col">
          <h1 className="font-semibold italic text-center text-[18px] sm:text-[25px] text-black">Welcome to Trivia Game</h1>
          <form
            className="h-full flex flex-col justify-between"
            onSubmit={handleSubmit}>
            <div>
              <Categories onChange={handleChange}/>
              <Slider onChange={handleChange}/>
            </div>
            <button
            className="bg-yellow hover:bg-yellow-dark text-sm px-8 py-2 rounded-md font-bold tracking-wide cursor-pointer">START</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form;
