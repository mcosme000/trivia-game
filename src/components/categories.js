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
          className="hidden peer"
      />
      <label htmlFor={option.category} className={`inline-block text-sm mb-3 mr-3 px-3 py-[0.5px] sm:px-5 sm:py-2
      rounded-md bg-grey peer-checked:bg-yellow-dark hover:cursor-pointer hover:bg-grey-dark`}>{option.label}</label>
    </div>)
  })

  return (
    <div className="mt-8 py-3">
      <h3 className="mb-2 font-bold text-md">Select a topic</h3>
      <div className="flex flex-wrap">
        {renderOptions}
      </div>
    </div>
  )
}

export default Categories;
