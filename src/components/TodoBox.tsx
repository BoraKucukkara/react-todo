import { useEffect, useState } from 'react'
import { Header } from './Header'
import { TodoList } from './TodoList'
import { NewTodo } from './NewTodo'
import type {TodoListArray, deleteTodo, toggleTodo,appTitle} from '../../typeStructure'

type TodoBox = {
  appTitle: appTitle
}

export const TodoBox:React.FC<TodoBox> = ({appTitle}) => {
  const localName = appTitle.replace(' ', '_').toLowerCase()
  const [todos, setTodos]= useState<TodoListArray>(()=>{
    const localData = localStorage.getItem(localName)
    if (localData == null) return []
    return JSON.parse(localData)
  })

  useEffect(():void =>{
    localStorage.setItem(localName, JSON.stringify(todos))
  }, [localName, todos])

  function addTodo(newItem: string) {
    setTodos(currentTodos => {
        return [
          ...currentTodos,
          {id: (Date.now() * Date.now() + (Math.random() * Date.now())).toString(8), title: newItem, completed: false}
        ]
    })
  }

  const deleteTodo:deleteTodo = (id) => {
    setTimeout(() => {
      setTodos(currentTodos => {
        return currentTodos.filter(todo => todo.id !== id)
      })
    }, 300);
  }

  const toggleTodo:toggleTodo = (id, completed) => {
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
    <div className='bg-zinc-700 overflow-y-auto flex flex-col justify-between group'>
      <div>
      <Header appTitle={appTitle} todos={todos}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
      </div>
      <NewTodo addTodo={addTodo} appTitle={appTitle} />
    </div>
  )
}