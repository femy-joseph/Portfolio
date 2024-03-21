import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import mylogo from '../assets/logo2.png';
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav,setNav] =useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300'>
        <div>
        <img src={mylogo} alt='Logo' style={{width:'100px'}} />
        </div>
        {/* Menu */}
        
            <ul className=' hidden md:flex'>
                <li> <Link to="home" spy={true} smooth={true}  duration={500} > Home</Link> </li>
                <li> <Link to="about" spy={true} smooth={true}  duration={500} > About</Link> </li>
                <li> <Link to="skills" spy={true} smooth={true}  duration={500} > Skills</Link> </li>
                <li> <Link to="work" spy={true} smooth={true}  duration={500} > Work</Link> </li>
                <li> <Link to="contact" spy={true} smooth={true}  duration={500} > Contact</Link> </li>
            </ul>
        
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10' >
            {!nav ? <FaBars/> : <FaTimes/>} 
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center '}>
        <li className='py-6 text-4xl' > <li><Link onClick={handleClick} to="home" spy={true} smooth={true}  duration={500} > Home</Link> </li> </li>
        <li className='py-6 text-4xl'> <li> <Link onClick={handleClick} to="about" spy={true} smooth={true}  duration={500} > About</Link> </li> </li>
        <li className='py-6 text-4xl'>  <li><Link onClick={handleClick} to="skills" spy={true} smooth={true}  duration={500} > Skills</Link> </li> </li>
        <li className='py-6 text-4xl'> <li> <Link onClick={handleClick} to="work" spy={true} smooth={true}  duration={500} > Work</Link> </li> </li>
        <li className='py-6 text-4xl'> <li> <Link onClick={handleClick} to="contact" spy={true} smooth={true}  duration={500} > Contact</Link> </li> </li>  
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/femimol-joseph-4a14bb156/'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/femy-joseph'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='mailto:fjoseph@umass.com'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1gbFFuEb2GoJmol0UP_iS-ThfxCo70fwj/view?usp=drive_link'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar

