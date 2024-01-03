import { useState } from 'react'

export function NewTodo({addTodo}) {
    const [newItem, setNewItem] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        if(newItem.trim().length > 0) {
            addTodo(newItem)
            setNewItem("")
        }
    }
    return(
        <form onSubmit={handleSubmit}
        className='flex'>
            <input type="text" value={newItem} onChange={e=>setNewItem(e.target.value)} 
            placeholder='Add new todo'
            className='p-3 w-full bg-zinc-600 focus:bg-zinc-500 outline-none text-zinc-300'/>
            <button disabled={newItem.trim().length === 0}
            className='p-2 bg-green-600 text-zinc-300 text-lg leading-none hover:bg-green-500 disabled:bg-zinc-500 w-12'>+</button>
        </form>
    )
}