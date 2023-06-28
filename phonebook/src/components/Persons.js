const Persons = ({ persons, filtered }) => {
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filtered))
  
  return (
    <div>
      {filteredPersons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default Persons