import { TodoItem } from "./TodoItem";
import type { Todo, deleteTodo, toggleTodo } from "../../typeStructure";

declare type TodoList = {
  todos: Todo[]
  deleteTodo: deleteTodo
  toggleTodo: toggleTodo
}

export const TodoList:React.FC<TodoList> = ({todos, deleteTodo, toggleTodo})=> {
    return(
      <ul className="m-3">
        {todos.length === 0 && 
          <p className='text-zinc-600 text-xl text-center '>Empty</p>
        }
        {todos.map((todo)=>
          <TodoItem 
            key={todo.id} {...todo} 
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}>
          </TodoItem>
          ).reverse()}
      </ul>
    )
}