import { createContext, useState, useEffect } from 'react'

const TriviaContext = createContext();

function Provider({children}) {
  const [ data, setData ] = useState([])
  const [ currentQuestion, setCurrentQuestion ] = useState(0)
  const [ validated, setValidated ] = useState(false)
  const [ score, setScore ] = useState(0)
  const [ isPlaying, setIsPlaying ] = useState(false)
  const [ formData, setFormData] = useState({
    category: '',
    difficulty: ''
  })



  useEffect(() => {
  }, [data]);

  const callApi = async (formData) => {
    let difficulty = "easy"
    switch (formData.difficulty) {
      case "1": difficulty = "easy"
        break;
      case "2": difficulty = "medium"
        break;
      case "3": difficulty = "hard"
        break;
      default: difficulty = "easy"
        break;
    }
    const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${formData.category}&difficulty=${difficulty}&type=multiple`)
      .then(response => response.json())
      .then(data => data.results)
    setData(response)
  }

  const elements = {
    callApi: callApi,
    data: data,
    formData: formData,
    setFormData: setFormData,
    currentQuestion: currentQuestion,
    setCurrentQuestion: setCurrentQuestion,
    validated: validated,
    setValidated: setValidated,
    score: score,
    setScore: setScore,
    isPlaying: isPlaying,
    setIsPlaying: setIsPlaying
  }

  return (
    <TriviaContext.Provider value={elements}>
      {children}
    </TriviaContext.Provider>
  )
}

export default TriviaContext;
export { Provider }
