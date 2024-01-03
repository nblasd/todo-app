import List from "./List"

export default function Home() {
  const date = new Date().getDate()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  const week = new Date().getDay()

  const weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  
  return (
    <main className="bg-slate-950 w-full h-screen text-slate-200 text-center">

      <h1 className='font-extrabold text-8xl pt-20'>ToDoList.</h1>
      <p className="pb-20">{date}/{month + 1}/{year} {weekNames[week]}</p>
      <div>
      <input type="text" className='bg-slate-800  rounded-md w-1/4 h-10 rounded-r-none' />
      <button className='bg-emerald-500 h-10 rounded-md w-16 rounded-l-none font-bold'>+Add</button>
      </div>
      <div className="flex justify-center w-full my-12">
          <List/>
      </div>
      
    </main>
  )
}
