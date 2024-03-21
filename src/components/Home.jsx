import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

function Home() {
  return (
    <div name='home' className= 'w-full h-screen bg-[#0a192f]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi , My name is </p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Femimol (Femy 😜)</h1>
        <h2 className='text-4xl sm:text-4xl font-bold text-[#8892b0]'> </h2>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I'm a Software Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a software engineer currently pursuing Masters CS at Umass amherst.I have 3.5 years software development work experience in Bosch India.
            Currently,I am focused on building responsive full-stack web applications.</p>
        <div>
            <button className='text-white group border-2 px-6 py-3  my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <Link to="work" spy={true} smooth={true}  duration={500} >View Work</Link>
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/> 
            </span> 
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home
