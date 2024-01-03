import { useState } from 'react'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const [newItem, setNewItem] = useState("asdasd")

  function handleSubmit(e) {
    e.preventDefault()
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title: newItem, completed: true}
      ]
    })
  }
  
  return (
    <>
      <Header appTitle="Todo List" />
      <TodoList todos={todos}/>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newItem} onChange={e=>setNewItem(e.target.value)} />
        <button>Add</button>
      </form>
    </>
  )
}

export default App
