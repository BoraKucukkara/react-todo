export type Todo = {
    id: string
    title: string
    completed: boolean
  }
export type TodoListArray = Todo[]

export type deleteTodo = {
  (id:string):void
}

export type toggleTodo = {
  (id:string, completed:boolean):void
}

export type appTitle = string