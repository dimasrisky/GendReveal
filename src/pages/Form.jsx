import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Form = () => {
  const navigate = useNavigate()
  const [ inputUsername, setInputUsername ] = useState()
  
  function analyzeGender(event){
    event.preventDefault()
    navigate(`/results/${inputUsername}`)
  }

  return (
    <main onSubmit={analyzeGender} className='w-[100vw] h-[100vh] flex justify-center items-center bg-gradient-to-r from-primary-blue to-primary-pink text-white font-inter'>
      <form className='w-[90%] md:max-w-[35rem] bg-white bg-opacity-[40%] border-2 border-white rounded-[0.5rem] flex flex-col gap-[1.5rem] py-[3rem] px-[1rem]'>
        <div className="flex flex-col">
          <label htmlFor="username" className="md:text-[1.3rem]">Name :</label>
          <input type="text" className="bg-transparent border-b-2 text-[0.8rem] py-3 text-white outline-none placeholder:text-white" placeholder="Type your nickname..." value={inputUsername} onChange={( event ) => setInputUsername(event.target.value)} required/>
        </div>
        <button type="submit" className="w-full bg-white hover:bg-slate-50 text-black text-center text-xs tracking-wider py-2 rounded-[0.5rem]">Analyze</button>
      </form>
    </main>
  )
}

export default Form