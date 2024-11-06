import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between h-16 px-3 text-white bg-purple-700 shadow-sm shadow-black'>
      <div className="text-2xl font-bold tracking-wider logo"> 
        <Link href="/">🚀 BitLinks</Link>
      </div>
      <ul className='flex items-center justify-center gap-4 '>
        <Link href="/"><li>Home</li></Link>
        <Link href="/"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <li className='flex gap-3'>
          <Link href="/shorten"><button className='p-3 py-1 font-bold bg-purple-500 rounded-lg shadow-lg hover:scale-110'>Try Now</button></Link>
          <Link href="/github"><button className='p-3 py-1 font-bold bg-purple-500 rounded-lg shadow-lg hover:scale-110'>GitHub</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar