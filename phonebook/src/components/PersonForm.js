import PersonServices from '../services/persons'

const PersonForm = ({ 
  newName, 
  newNumber, 
  setNewName, 
  setNewNumber,
  persons,
  setPersons,
  setMessage,
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
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const oldPerson = persons.find(person => person.name === newName)
        const newPerson = { ...oldPerson, number: newNumber}
        
        PersonServices
          .update(newPerson.id, newPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => {
              return person.name === returnedPerson.name ? returnedPerson : person
            }))
            
            setMessage({
              content: `Updated ${returnedPerson.name}'s number`,
              type: 'default',
            })
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
          
          .catch(() => {
            setMessage({
              content: `Information of ${newName} has already been removed from server`, 
              type: 'error',
            })
            setPersons(persons.filter((person) => person.name !== newName))
          })
      }
      
    } else {
      const newPerson = { 
        name: newName,
        number: newNumber,
      }
      
      PersonServices
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response))
          setMessage({
            content: `Added ${response.name}`,
            type: 'default',
          })
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
      
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