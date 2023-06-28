import { createContext, useState, useEffect } from 'react'

const TriviaContext = createContext();

function Provider({children}) {
  const [data, setData] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(1)

  useEffect(() => {
    console.log('Data updated');
  }, [data]);

  const callApi = async (formData) => {
    console.log("Getting data");
    const response = await fetch(`https://opentdb.com/api.php?amount=4&category=${formData.category}&difficulty=${formData.level}&type=multiple`)
      .then(response => response.json())
      .then(data => data.results)
    setData(response)
  }

  const elements = {
    callApi: callApi,
    data: data,
    currentQuestion: currentQuestion
  }

  return (
    <TriviaContext.Provider value={elements}>
      {children}
    </TriviaContext.Provider>
  )
}

export default TriviaContext;
export { Provider }


// category: 17 Science & Nature
// category: 10 Books
// category: 21 Sports
