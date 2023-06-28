import axios from 'axios'

const PersonForm = ({ 
  newName, 
  newNumber, 
  setNewName, 
  setNewNumber,
  persons,
  setPersons,
}) => {
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      
    } else {
      const newPerson = { 
        name: newName,
        number: newNumber,
      }
      
      axios
        .post('http://localhost:3001/persons', newPerson)
        .then(response => setPersons(persons.concat(response.data)))
    }
    
    setNewName('')
    setNewNumber('')
  }
  
  
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input
          value={newName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        number: <input 
          value={newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm