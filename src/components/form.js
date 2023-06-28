import TriviaContext from "../context/trivia";
import { useContext, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    category: '',
    level: ''
  })

  const { callApi } = useContext(TriviaContext)

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
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div className="bg-blue-100">
          <p>Select a topic</p>
          <div>
            <input
                type="radio"
                id="films"
                name="category"
                value="11"
                onChange={handleChange}
            />
            <label htmlFor="home">Films</label>
          </div>
          <div>
            <input
                type="radio"
                id="animals"
                name="category"
                value="27"
                onChange={handleChange}
            />
            <label htmlFor="home">Animals</label>
          </div>
          <div>
            <input
                type="radio"
                id="music"
                name="category"
                value="12"
                onChange={handleChange}
            />
            <label htmlFor="home">Music</label>
          </div>
          <div>
            <input
                type="radio"
                id="nature"
                name="category"
                value="21"
                onChange={handleChange}
            />
            <label htmlFor="present">Sports</label>
          </div>
          <div>
            <input
                type="radio"
                id="nature"
                name="category"
                value="17"
                onChange={handleChange}
            />
            <label htmlFor="present">Science and Nature</label>
          </div>
        </div>

        <div className="flex lg:block">
          <p>Select your level of difficulty</p>
          <div>
            <input
                type="radio"
                id="easy"
                name="level"
                value="easy"
                onChange={handleChange}
            />
            <label htmlFor="home">Easy</label>
          </div>
          <div>
            <input
                type="radio"
                id="medium"
                name="level"
                value="medium"
                onChange={handleChange}
            />
            <label htmlFor="present">Medium</label>
          </div>
          <div>
            <input
                type="radio"
                id="difficult"
                name="level"
                value="difficult"
                onChange={handleChange}
            />
            <label htmlFor="present">Difficult</label>
          </div>
        </div>
        <button type="submit">Start!</button>
      </form>
    </div>
  )
}

export default Form;
