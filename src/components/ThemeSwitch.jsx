import { useContext } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import { ThemeContext } from '../context/ThemeContext'

const ThemeSwitch = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div className='p-2'>
          {theme === 'dark' ? (
            <div className='flex items-center cursor-pointer hover:text-accent' onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
              <HiSun className='text-primary text-2xl mr-2 hover:text-accent' /> Light
            </div>
          ) : (
            <div className='flex items-center cursor-pointer hover:text-accent' onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
              <HiMoon className='text-primary text-2xl mr-2 hover:text-accent' /> Dark
            </div>
          )}
        </div>
      );
    };

export default ThemeSwitch