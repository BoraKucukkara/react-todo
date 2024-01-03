import { TodoItem } from "./TodoItem";

export function TodoList({todos}) {
    return(
        <ul className="rounded-lg">
        {todos.map(todo=>
          <TodoItem key={todo.id} {...todo}></TodoItem>
          )}
      </ul>
    )
}