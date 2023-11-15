import React from 'react'

const Loading = () => {
  return (
    <main className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <div className='flex flex-col items-center'>
        <img src="/icon/loadingIcon.png" alt="loading" className='animate-spin' width='80%' />
        <h1 className='fotn-lalezar font-semibold mt-[1rem]'>Analyzing...</h1>
      </div>
    </main>
  )
}

export default Loading