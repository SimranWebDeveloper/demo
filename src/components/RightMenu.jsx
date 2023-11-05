import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalState"
import { MdFileUpload } from "react-icons/md"
import { BsFileEarmarkWordFill } from "react-icons/bs"
import { BiSolidDownArrow } from "react-icons/bi"
import { FaFilePowerpoint,FaFileExcel,FaFolder } from "react-icons/fa"
import { NavLink } from "react-router-dom"



const RightMenu = () => {
    const {offcanvas}=useContext(GlobalContext)
    // dropdown btn
    const [dBtn,setDBtn]=useState(false)
  return (
    <div className={`${offcanvas}`}>

     {/* offcanvas */}
     {/* {offcanvas=='w-1/4'?<p>Upload file</p>: ''} */}

        <div className="h-screen  text-black">
          {/* dropdown btn */}
          <button onClick={()=>setDBtn(!dBtn)} className="w-full bg-green-800 text-white px-10 py-2 uppercase  flex justify-center items-center space-x-1">
            <p>new </p>
            <BiSolidDownArrow className='text-sm'/>
            </button>
          {
           dBtn && <div className="p-4">
            {/* upload file */}
          <div>
            <label htmlFor="files" className="btn flex space-x-2"><MdFileUpload/> 
            <p>Upload file</p>
            </label>
            <input id="files" style={{visibility: 'hidden'}} type="file" />
          </div>
            {/* upload files */}
            <div>
            <label htmlFor="files" className="btn flex space-x-2"><MdFileUpload/> 
            <p>Upload file</p>
            </label>
            <input id="files" style={{visibility: 'hidden'}} type="file" />
          </div>
          {/* word document */}
          <div>
            <label htmlFor="files" className="btn flex space-x-2"><BsFileEarmarkWordFill/> 
            <p>Upload file</p>
            </label>
            <input id="files" style={{visibility: 'hidden'}} type="file" />
          </div>
                    {/* powerpoint document */}
                    <div>
            <label htmlFor="files" className="btn flex space-x-2"><FaFilePowerpoint/> 
            <p>Upload file</p>
            </label>
            <input id="files" style={{visibility: 'hidden'}} type="file" />
          </div>
                    {/* exel document */}
                    <div>
            <label htmlFor="files" className="btn flex space-x-2"><FaFileExcel/> 
            <p>Upload file</p>
            </label>
            <input id="files" style={{visibility: 'hidden'}} type="file" />
          </div>
          


          




          </div>}

<hr className="my-2 bg-slate-300"/>
          {/* personal file */}
          <div className='p-2'>
                    <NavLink to={'/'} className={'flex space-x-2 p-4 bordernpm r'}>
                    <FaFolder className='text-blue-600 text-2xl'/>
                    <span>Personal Files</span>
                    </NavLink>
                    
                

                </div>
   
        </div>
       
    </div>
  )
}

export default RightMenu