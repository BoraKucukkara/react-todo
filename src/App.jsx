import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'
import { NewTodo } from './components/NewTodo'

function App() {
  const [todos, setTodos] = useState(()=>{
    const localData = localStorage.getItem("todos")
    if (localData == null) return []
    return JSON.parse(localData)
  })

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  function addTodo(newItem) {
    setTodos(currentTodos => {
        return [
          ...currentTodos,
          {id: crypto.randomUUID(), title: newItem, completed: false}
        ]
    })
  }

  function deleteTodo(id) {
    setTimeout(() => {
      setTodos(currentTodos => {
        return currentTodos.filter(todo => todo.id !== id)
      })
    }, 220);
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  
  return (
    <main className='bg-zinc-700 overflow-hidden shadow-2xl rounded-xl'>
      <Header appTitle="Todo List" todos={todos}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
      <NewTodo addTodo={addTodo} />
    </main>
  )
}

export default App
