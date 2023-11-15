import React from 'react'

const Error = () => {
  return (
    <>
        <main className='w-screen h-screen bg-[#1A1A1A] flex justify-center items-center font-inter text-white'>
            <div className='w-[80%] mx-auto'>
                <img src="/icon/error.png" alt="error" className='mx-auto' />
                <h1 className='font-bold text-center text-[0.9rem] mt-[1rem]'>Ooops! can`t finding your gender, Please type your name correctly !</h1>
            </div>
        </main>
    </>
  )
}

export default Error