import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiSolidBellRing,BiSolidDownArrow,BiDotsVerticalRounded} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Header = () => {
  const {offcanvas,setOffcanvas}=useContext(GlobalContext)

  
  return (
    <header className="h-20 flex justify-center items-center">
      <section className=" container flex justify-between text-2xl " >
        {/* 1 */}
        <div className=" flex">
          <button onClick={()=>{offcanvas=='w-1/4'? setOffcanvas('w-1/12') : setOffcanvas('w-1/4') }}><GiHamburgerMenu/></button>
          <NavLink to={'/'} className={'flex'}>
            <img src="https://1curd3ms.trials.alfresco.com/assets/images/alfresco-logo-flower.svg" alt=""  className='w-10 h-10'/>
            <p  className='hidden md:block'>Alfresco Digital Workspace</p>
          </NavLink>

        </div>
        {/* 2 */}
        <div>
          <form  className='flex items-center justify-between py-1 px-3 bg-gray-100 rounded'>
            <button type='submit'><AiOutlineSearch/></button>
            <input type="text" className='bg-transparent outline-0 px-2' />
            <BiSolidDownArrow className='text-sm'/>
          </form>
        </div>
        {/* 3 */}
        <div className='flex items-center'> 
          <button><BiSolidBellRing/></button>
          <div className=" flex items-center">
            <p className='hidden lg:block'>React Developer</p>
            <span className='w-10 h-10 bg-sky-900 rounded-full text-white flex items-center justify-center'>RD</span>
            <BiDotsVerticalRounded className='block md:hidden lg:block'/>
          </div>
        </div>
      </section>

      
    </header>
  )
}

export default Header