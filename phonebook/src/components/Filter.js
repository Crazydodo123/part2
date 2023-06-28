const Filter = ({ filtered, setNewFiltered }) => {
  
  const filterNames = (event) => {
    setNewFiltered(event.target.value)
  }
  
  return (
    <div>
      filter shown with <input
        value={filtered}
        onChange={filterNames}
      />
  </div>
  )
}

export default Filter