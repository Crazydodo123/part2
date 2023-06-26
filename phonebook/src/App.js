import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filtered, setNewFiltered] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const filterNames = (event) => {
    setNewFiltered(event.target.value)
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
      setPersons(persons.concat(newPerson))
      
    }
    
    setNewName('')
    setNewNumber('')
  }
  
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filtered))
  
  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input
        value={filtered}
        onChange={filterNames}
      />
      <h2>add a new</h2>
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
      <h2>Numbers</h2>
      {filteredPersons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App