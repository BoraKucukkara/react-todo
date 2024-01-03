export function TodoItem({id, title, completed}) {
    return(
        <li className="bg-zinc-700 p-3 min-w-[16rem] text-zinc-200 flex justify-between">
            <label htmlFor="id" className="flex gap-2">
                <input id={id} type="checkbox" checked={completed}/>
                {title}
            </label>
            <button type="button" className="text-sm">
                ✕
            </button>
        </li>
    )
}