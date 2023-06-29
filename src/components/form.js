import TriviaContext from "../context/trivia";
import { useContext, useState } from "react";
import Categories from "./categories";
import Slider from "./slider";

const Form = () => {
  const [formData, setFormData] = useState({
    category: '',
    difficulty: ''
  })

  const { callApi, setCurrentQuestion } = useContext(TriviaContext)

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
    callApi(formData)
    setCurrentQuestion(0)

  }

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit}
      className="bg-blue-100 p-5 rounded-xl flex flex-col items-center">
        <div>
          <Categories onChange={handleChange}/>
          <Slider onChange={handleChange}/>
        </div>
        <button type="submit" className="bg-green-400 px-8 py-2 rounded-full">Start</button>
      </form>
    </div>
  )
}

export default Form;
