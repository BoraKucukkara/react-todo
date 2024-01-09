import { useState } from "react"
import { deleteTodo, toggleTodo } from "../../typeStructure"

declare type TodoItem = {
    id: string
    title: string
    completed: boolean
    deleteTodo: deleteTodo
    toggleTodo: toggleTodo
  }

export const TodoItem:React.FC<TodoItem> = ({deleteTodo, toggleTodo, id, title, completed}) => {
    const [classToggle, setClassToggle] = useState<boolean>(true)
    return(
        <li className={'list-item-base relative last:border-none ' + (classToggle ? 'list-item-enter':'list-item-leave')}>
            <label htmlFor={id} className="flex gap-2 ps-3 w-full cursor-pointer">
                <input id={id} type="checkbox" checked={completed} onChange={e=>toggleTodo(id, e.target.checked)}
                className="hidden"/>
                {completed == true ?
                <svg className="stroke-green-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="" strokeWidth="4"><path d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"/><path  d="m16 24l6 6l12-12"/></g></svg>
                :
                <svg className="stroke-zinc-500 stroke-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="" strokeWidth="4"><path d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"/></g></svg>
                } 
                <p className=" w-9/12 overflow-hidden text-ellipsis  text-nowrap ">
                    {title}
                </p>
            </label>
            <button onClick={()=> {setClassToggle(false); deleteTodo(id)}} type="button" className="text-sm pe-2 absolute right-0">
                <svg className="stroke-zinc-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="" strokeWidth="2" d="m7 7l10 10M7 17L17 7"/></svg>
            </button>
        </li>
    )
}