import { useState } from 'react'
import { appTitle } from '../../typeStructure'

type NewTodo = {
    addTodo: (newItem: string)=>void
    appTitle: appTitle
}

export const NewTodo:React.FC<NewTodo> = ({addTodo, appTitle}) => {
    const [newItem, setNewItem] = useState<string>("")
    function handleSubmit(e: { preventDefault: () => void }) {
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
            placeholder={appTitle}
            className='p-3 w-full bg-zinc-600 focus:bg-zinc-500 outline-none text-zinc-300 rounded-none self-end'/>
            <button disabled={newItem.trim().length === 0}
            className='p-2 bg-green-600 text-zinc-300 text-xl leading-none hover:bg-green-500 disabled:bg-zinc-500 w-14'>
                +
            </button>
        </form>
    )
}