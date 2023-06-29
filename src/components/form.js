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
    <div className="p-5">
      <form onSubmit={handleSubmit}>

        <div>
          <h3 className="mb-3 font-bold text-md">Select a topic</h3>
          <div className="flex flex-wrap">
            <div>
              <input
                  type="radio"
                  id="films"
                  name="category"
                  value="11"
                  onChange={handleChange}
                  className="d-none peer/films"
              />
              <label htmlFor="films" className="inline-block mb-3 mr-3 bg-indigo-300 px-4 py-2
              rounded-full peer-checked/films:bg-indigo-400 hover:cursor-pointer hover:bg-indigo-400">Films</label>
            </div>

            <div>
              <input
                  type="radio"
                  id="animals"
                  name="category"
                  value="27"
                  onChange={handleChange}
                  className="d-none peer/animals"
              />
              <label htmlFor="animals" className="inline-block mb-3 mr-3 bg-indigo-300 px-4 py-2
              rounded-full peer-checked/animals:bg-indigo-400 hover:cursor-pointer hover:bg-indigo-400">Animals</label>
            </div>

            <div>
              <input
                  type="radio"
                  id="music"
                  name="category"
                  value="12"
                  onChange={handleChange}
                  className="d-none peer/music"
              />
              <label htmlFor="music" className="inline-block mb-3 mr-3 bg-indigo-300 px-4 py-2
              rounded-full peer-checked/music:bg-indigo-400 hover:cursor-pointer hover:bg-indigo-400">Music</label>
            </div>

            <div>
              <input
                  type="radio"
                  id="sports"
                  name="category"
                  value="21"
                  onChange={handleChange}
                  className="d-none peer/sports"
              />
              <label htmlFor="sports" className="inline-block mb-3 mr-3 bg-indigo-300 px-4 py-2
              rounded-full peer-checked/sports:bg-indigo-400 hover:cursor-pointer hover:bg-indigo-400">Sports</label>
            </div>

            <div>
              <input
                  type="radio"
                  id="nature"
                  name="category"
                  value="17"
                  onChange={handleChange}
                  className="d-none peer/nature"
              />
              <label htmlFor="nature" className="inline-block mb-3 mr-3 bg-indigo-300 px-4 py-2 rounded-full
              peer-checked/nature:bg-indigo-400 hover:cursor-pointer hover:bg-indigo-400">Science and Nature</label>
            </div>
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
                className="d-none peer/easy"
            />
            <label htmlFor="easy" className="">Easy</label>
          </div>
          <div>
            <input
                type="radio"
                id="medium"
                name="level"
                value="medium"
                onChange={handleChange}
                className="d-none peer/medium"
            />
            <label htmlFor="medium">Medium</label>
          </div>
          <div>
            <input
                type="radio"
                id="difficult"
                name="level"
                value="difficult"
                onChange={handleChange}
                className="d-none peer/difficult"
            />
            <label htmlFor="difficult">Difficult</label>
          </div>
        </div>
        <button type="submit" className="bg-indigo-400 px-3 py-2 rounded">Start</button>
      </form>
    </div>
  )
}

export default Form;
