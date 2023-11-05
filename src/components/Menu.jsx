import {FaFolder} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='h-96 w-3/4 '>
        <h2 className='bg-gradient-to-b from-gray-200 to-gray-100 p-5 font-semibold'>Personal Files</h2>
        <hr />
        <div>
            {/* title */}
            <div className='flex justify-between items-center p-5 border-b font-semibold text-sm'>
            <div className='w-1/12'>
                    <NavLink to={'/'}>Icon</NavLink>
                </div>
                <div className='w-3/12'>
                    <NavLink to={'/'}>Name</NavLink>
                </div>
                
                <div className='w-2/12'>
                    <NavLink to={'/'}>Size</NavLink>
                </div>
                <div className='w-1/12'>
                    <NavLink to={'/'}>Mounth</NavLink>
                </div>
                <div className='w-2/12'>
                    <NavLink to={'/'}>Modified by</NavLink>
                </div>
                <div className='w-3/12'>
                    <NavLink to={'/'}>Security Marks</NavLink>
                </div>
            </div>
            {/* 1 */}
            <div className='flex justify-between items-center p-5 border-b text-sm'>
                <div className='w-1/12'>
                    <FaFolder className='text-blue-600 text-2xl'/>
                </div>
                <div className='w-3/12'>
                    <NavLink to={'/'}>testing</NavLink>
                </div>
                <div className='w-2/12'>
                    <NavLink to={'/'}></NavLink>
                </div>
                <div className='w-1/12'>
                    <NavLink to={'/'}>4 Hour</NavLink>
                </div>
                <div className='w-2/12'>
                    <NavLink to={'/'}>React Developer</NavLink>
                </div>
                <div className='w-3/12'>
                    <NavLink to={'/'}></NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu