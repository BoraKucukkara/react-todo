import { TodoItem } from "./TodoItem";

export function TodoList({todos, deleteTodo, toggleTodo}) {
    return(
        <ul className="min-h-[10rem] mt-3">
          {todos.length === 0 && 
            <p className='text-zinc-600 text-xl text-center '>Empty</p>
            }
          {todos.map(todo=>
            <TodoItem 
              key={todo.id} {...todo} 
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}>
            </TodoItem>
            )}
      </ul>
    )
}