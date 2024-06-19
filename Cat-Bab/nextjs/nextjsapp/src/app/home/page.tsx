import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='w-screen h-full flex justify-center items-center'>
        <h1>homepage</h1>
    <Link href={'/login'}>go to loing</Link>
    </div>
   
  )
}

export default Home