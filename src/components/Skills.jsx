import React from 'react'
import Python from '../assets/traced-python.png'
import postgresql from '../assets/traced-postgresql.png'
import splunk from '../assets/Splunk.png'
import react from '../assets/react.png'
import azure from '../assets/azure.png'
import Git from '../assets/git.png'


const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f]  text-gray-300'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>//These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Python} alt="python icon" />
            <p className='my-4'>Python</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={postgresql} alt="python icon" />
            <p className='my-4'>postgresql</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={splunk} alt="python icon" />
            <p className='my-4'>Splunk</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={react} alt="python icon" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Git} alt="python icon" />
            <p className='my-4'>Git</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={azure} alt="python icon" />
            <p className='my-4'>Azure</p>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default Skills