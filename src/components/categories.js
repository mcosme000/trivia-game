const Categories = ({onChange}) => {

  const handleChange = (e) => {
    onChange(e)
  }

  const options = [
    { id: 1, value: 11, label: "Films", category: "films"},
    { id: 2, value: 27, label: "Animals", category: "animals" },
    { id: 3, value: 12, label: "Music", category: "music" },
    { id: 4, value: 21, label: "Sports", category: "sports" },
    { id: 5, value: 17, label: "Science", category: "science" }
  ]

  const renderOptions = options.map((option) => {
    return (
      <div key={option.id}>
      <input
          type="radio"
          id={option.category}
          name="category"
          value={option.value}
          onChange={handleChange}
          className={`d-none peer/${option.category}`}
      />
      <label htmlFor={option.category} className={`inline-block text-sm mb-3 mr-3 bg-indigo-300 px-3 py-1
      rounded-full peer-checked/${option.category}:bg-indigo-400 hover:cursor-pointer hover:bg-indigo-400`}>{option.label}</label>
    </div>)
  })

  return (
    <div className="mb-4">
      <h3 className="mb-2 font-bold text-md">Select a topic</h3>
      <div className="flex flex-wrap">
        {renderOptions}
      </div>
    </div>
  )
}

export default Categories;
