import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='w-[100vw] h-[100vh] flex justify-center items-center bg-gradient-to-r from-primary-blue to-primary-pink text-white font-inter'>
      <div className='flex flex-col w-[90%] md:max-w-[45rem] gap-[3rem]'>
        <div>
          <h1 className='font-lalezar text-[4rem] md:text-[6rem] leading-[4rem] md:leading-[6rem]'>Let Me Identify You !</h1>
          <p className='text-xs md:text-base'>What if i said, I can guess your gender just from your name, in GendReveal I can guess someone's gender just based on their name</p>
        </div>
        <div className='flex flex-col gap-[0.8rem]'>
          <Link to='/form' className='bg-white text-black text-xs tracking-wider text-center py-[0.5rem] rounded-[0.5rem]'>Try It</Link>
          <button onClick={() => alert('this page is still under developement')} className='bg-transparent border-2 border-white text-xs tracking-wider text-center py-[0.5rem] rounded-[0.5rem] hover:bg-white hover:text-black transition-all duration-300'>About</button>
        </div>
      </div>
    </main>
  )
}
export default Home