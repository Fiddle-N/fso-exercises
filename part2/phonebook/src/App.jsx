import { useState } from 'react'

const Filter = ({search, setSearch, handleChange}) => (
  <div>
    filter shown with <input 
      value={search}  
      onChange={handleChange(setSearch)}
      />
  </div>
)

const PersonForm = ({
  newName, 
  setNewName, 
  newNumber, 
  setNewNumber, 
  handleChange, 
  addName
}) => (
  <form onSubmit={addName}>
    <div>
      name: <input 
        value={newName}  
        onChange={handleChange(setNewName)}
        />
    </div>
    <div>
      number: <input 
        value={newNumber}  
        onChange={handleChange(setNewNumber)}
        />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const Persons = ({persons}) => (
  <>
    {persons.map(person =>  
      <div key={person.id}>{person.name} {person.number}</div>
    )}
  </>
)

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(
      persons.concat({
        name: newName, number: newNumber, id: persons.length + 1
      }))
    setNewName('')
    setNewNumber('')
  } 

  const handleChange = setFn => event => {
    setFn(event.target.value)
  }

  const personsToShow = search
    ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())) 
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch} handleChange={handleChange} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName} 
        setNewName={setNewName} 
        newNumber={newNumber}
        setNewNumber={setNewNumber} 
        handleChange={handleChange}
        addName={addName}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
