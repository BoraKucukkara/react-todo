export function Header({appTitle, todos}){
    return (
        <h1 className="text-2xl p-2 text-center text-gray-500">
            {appTitle} {todos.length > 0 && todos.length}
        </h1>
    )
}