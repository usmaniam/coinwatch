import { Link } from "react-router-dom"
import ThemeSwitch from "./ThemeSwitch"
import {HiMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from "react"


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };


  return (
    <div className='rounded-div h-20 flex items-center justify-between font-bold'>
        <Link to='/'>
            <h1 className='text-2xl font-extrabold'>Coinwatch<span className='text-accent font-extrabold'>_</span></h1>
        </Link>
        <div className='hidden md:block'>
            <ThemeSwitch />
        </div>
         <div className='hidden md:block'>
            <Link to='/about' className='p-4 hover:text-accent'>
                About Us
            </Link>
            <Link to='/contact' className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'>
                Contact Us
            </Link>
         </div>
        {/* Menu */}
         <div onClick={handleNav} className="block md:hidden cursor-pointer z-10 hover:text-accent">
          {nav ? <AiOutlineClose size={25} /> : <HiMenuAlt3 size={25} />}
         </div>

        {/* Mobile Menu */}
        <div  className={
          nav
            ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'
            : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
        }>
            <ul className='w-full p-4'>
                <li onClick={handleNav} className="border-b py-6 hover:text-accent">
                    <Link to='/'>Home</Link>
                </li>
                <li onClick={handleNav} className="border-b py-6 hover:text-accent">
                   <Link to='/about'>About Us</Link>
                </li>
                <li onClick={handleNav} className="border-b py-6 hover:text-accent">
                   <Link to='/contact'>Contact Us</Link>
                </li>
                <li className="py-6 hover:text-accent">
                    <ThemeSwitch />
                </li>
            </ul>          
        </div>
    </div>
  )
}

export default Navbar