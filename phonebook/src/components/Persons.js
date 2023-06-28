import PersonServices from '../services/persons'

const Persons = ({ persons, filtered, setPersons }) => {
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filtered))
  
  const removePerson = (deletedPerson) => {
    if (window.confirm(`Delete ${deletedPerson.name} ?`)) {
      PersonServices
        .remove(deletedPerson.id)
        .then(setPersons(persons.filter(person => person.id !== deletedPerson.id)))
    }
  }
  
  return (
    <div>
      {filteredPersons.map(person => (
        <div key={person.name}>
          {person.name} {person.number} <button onClick={() => removePerson(person)}>delete</button>
        </div>
      ))}
    </div>
  )
}

export default Persons