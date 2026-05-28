import {useState} from 'react'
import {Link} from 'react-router'
import { IoMdArrowDropdown } from "react-icons/io";
import DropdownMenu from './DropdownMenu';
export default function DropdownMenu2({setSideMenu}) {
   const [open, setOpen] = useState(true)
const [subMenu, setSubMenu] = useState(false)
  return (

    <>
  { open && <div className='sideMenu flex flex-col fixed w-full lg:top-[40px] sm:top-[95px] top-[58px] shadow-xl/45 left-0 bg-white px-12 py-4 sm:py-5 lg:py-8 z-2 block lg:hidden max-h-screen overflow-y-auto'>
      <ul className='flex flex-col gap-4'> 
        <li className='font-sans font-normal text-[#888] text-[16px] leading-[18px] text-left py-[16px] border-b-2 border-dotted'  onClick={() => {setOpen(false); setSideMenu(false)} }><Link to='/'> Home</Link></li>
        <li className='font-sans font-normal text-[#888] text-[16px] leading-[18px] text-left py-[16px] border-b-2 border-dotted' onClick={() => {setOpen(false); setSideMenu(false)} }><Link to='/about'> About</Link></li>
        <li className={`font-sans font-normal text-[#888] text-[16px] text-left leading-[18px] pt-[16px]
      ${subMenu
    ? "pb-none"
    : "pb-[16px] border-b-2 border-dotted"
  }`} onClick={() => {setOpen(true); setSubMenu(prev => !prev) }}>Course <IoMdArrowDropdown className="inline-block" />
        
   {(subMenu) && (
              <DropdownMenu open={open} setOpen={setOpen} />
            )}
            </li> 
        <li className='font-sans font-normal text-[#888] text-[16px] leading-[18px] text-left py-[16px] border-b-2 border-dotted' onClick={() => {setOpen(false); setSideMenu(false)} }><Link to='/blog'> Blog</Link></li>
        <li className='font-sans font-normal text-[#888] text-[16px] leading-[18px] text-left py-[16px] border-b-2 border-dotted' onClick={() => {setOpen(false); setSideMenu(false)} }><Link to='/contact'> Contact</Link></li>
      </ul>
    </div> }
   

    
    </>
    
    
  )  
}
