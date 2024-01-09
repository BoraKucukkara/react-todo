import { appTitle, TodoListArray } from "../../typeStructure"

type Header = {
    appTitle: appTitle
    todos: TodoListArray
} 

export const Header:React.FC<Header> = ({appTitle, todos}) => {
    return (
        <div className="relative">
            <h2 className="group-has-[li]:text-gray-300 text-2xl p-2 mt-3 text-center text-gray-500 transition-colors duration-300">
                {appTitle} 
            </h2>
            {todos.length > 0 &&
                <div className=" absolute right-4 top-2 text-zinc-500 w-8 h-8 bg-zinc-800 bg-opacity-50 rounded-full flex justify-center items-center">
                    {todos.filter(todo=>todo.completed != true).length}
                </div>
            }
        </div>
        
    )
}