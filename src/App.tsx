import { TodoBox } from './components/TodoBox'

function App() {
  return (
    <>
      <h1 className='w-full text-center text-zinc-600 font-extralight text-3xl md:text-7xl opacity-50 mb-5'>
        Simple Planner
      </h1>
      <main className='flex flex-col md:flex-row items-center justify-center flex-wrap gap-3 md:gap-0 '>
        <TodoBox appTitle="Should Do"/>
        <TodoBox appTitle="Must Do"/>
        <TodoBox appTitle="Could Do"/>
      </main>
    </>
  )
}
export default App
