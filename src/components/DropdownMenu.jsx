import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import api from '../api/axios'
/**
 * DropdownMenu
 * 
 * A dropdown menu component that fetches subjects from the api and renders them as a list of links.
 * The component takes four props: open, setOpen, setLocked, and setSideMenu.
 * Open is a boolean that determines whether the dropdown menu is open or not.
 * setOpen is a function that sets the open state.
 * setLocked is a function that sets the locked state.
 * setSideMenu is a function that sets the side menu state.
 * The component is a wrapper around a ul element that contains links to each subject's page.
 * When the component is open, it renders the list of links with each subject's name.
 * When the component is closed, it renders nothing.
 * The component fetches the subjects from the api and updates the state with the fetched data.
 * 
 * @param {boolean} open - Whether the dropdown menu is open or not.
 * @param {function} setOpen - A function that sets the open state.
 * @param {function} setLocked - A function that sets the locked state.
 * @param {function} setSideMenu - A function that sets the side menu state.
 */
export default function DropdownMenu({open, setOpen}) {
  const [name, setName] = useState([])

  const loadSubjectName = async () => {
  try {
    const res = await api.get('/subjects/')
    console.log(res.data)
    setName(res.data)
  } catch (err) {
    console.log(err.response?.data || err.message)
  }
}
  useEffect(() => {
    loadSubjectName();
  },[])
  return (
    
    <>
  { open ? <div className='lg:fixed w-full lg:max-w-[420px] top-[250px] sm:top-[280px] lg:top-[60px] mx-auto   lg:right-72 xl:right-100 lg:bg-white pl-12  mt-[24px] z-10 block transition-all duration-600 ease-in-out bg-amber-400' onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <ul className='flex flex-col'>
        {name.map(sub => (
          
        <Link to={`/course/${sub._id}`} key={sub._id} onClick={() => { setOpen(false); setLocked(false); setSideMenu(false)}}>
          <li key={sub._id} className='font-sans font-normal text-[#888] text-[16px] leading-[18px] text-left py-[22px] border-b-2 border-dotted'>{sub.name} Course</li>
         </Link> 
          ))}
      </ul>
    </div> : 'display: none'}

   
  </>
    
  )
}
