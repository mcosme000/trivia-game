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
  return response
}

export default callApi
