import React from 'react'
import { Link } from 'react-router-dom'
import Error from "../components/Error"

const ResultFinished = ({dataGender}) => {
  return (
    <>
    {dataGender?.gender === null ? <Error /> : (
      <main className={`w-[100vw] h-[100vh] flex justify-center items-center ${dataGender?.gender === 'male'? 'bg-primary-blue' : 'bg-primary-pink'} font-inter text-white`}>
        <div className='flex flex-col items-center gap-4'>
          <img src={`/icon/${dataGender?.gender === 'male'? 'male.png' : 'female.png'}`} alt="gender" />
          <h1 className='font-semibold text-xl'>This Person Is A {dataGender?.gender}</h1>
          <div className='flex text-xs gap-5'>
            <p><b>Name:</b> {dataGender?.name}</p>
            <p><b>Gender:</b> {dataGender?.gender}</p>
            <p><b>Accuracy:</b> {dataGender?.probability * 100}%</p>
          </div>
          <Link to='/' className="w-[80%] bg-white text-black text-xs py-2 text-center rounded-[0.5rem] mt-[3rem]">Back To Home</Link>
        </div>
      </main>
    )}
    </>
  )
}

export default ResultFinished