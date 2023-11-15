import { useState } from "react"
import { Link } from "react-router-dom"

const Form = () => {
  const [ inputUsername, setInputUsername ] = useState()

  return (
    <main className='w-[100vw] h-[100vh] flex justify-center items-center bg-gradient-to-r from-primary-blue to-primary-pink text-white font-inter'>
      <form className='w-[90%] bg-white bg-opacity-[40%] border-2 border-white rounded-[0.5rem] flex flex-col gap-[1.5rem] py-[3rem] px-[1rem]'>
        <div className="flex flex-col">
          <label htmlFor="username">Name :</label>
          <input type="text" className="bg-transparent border-b-2 text-xs py-3 text-white outline-none placeholder:text-white" placeholder="ex: ( harlen, josh, mia )" value={inputUsername} onChange={( event ) => setInputUsername(event.target.value)} required/>
        </div>
        <Link to={`/results/${inputUsername}`} className="w-full bg-white hover:bg-slate-50 text-black text-center text-xs tracking-wider py-2 rounded-[0.5rem]">Submit</Link>
      </form>
    </main>
  )
}

export default Form