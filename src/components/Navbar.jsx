
import {useState} from 'react'
import {close,logo,menu} from '../assets'
import {navLinks} from '../constants'

function Navbar() {
  const[toggle,setToggle]=useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hookbank"
        className="w-[124px] h-[32px]"/>
    <ul className="list-none sm:flex hidden justify-end items-center flex-1">
{navLinks.map((nav,index)=>(
  <li key={nav.id}
  className={`font-poopins font-normal cursor-pointer text-[16px] ${index===navLinks.length-1 ? 'mr-0' :'mr-10'}  text-white `}>
    <a href={ `#${nav.id}`}>
    {nav.title}
</a>
  </li>
))}
    </ul>
    <div className='sm:hidden flex flex-1 justify-end items-center'>
      <img src={toggle ? close: menu }
className="w-[28px] h-[28px] object-container" 
onClick={()=>setToggle((prev)=>//update state is trhan kartay hen
             !prev                      // ek call back function create karengay sub say pehlay. jaisy he menu pr click karen to close khul jae
)}
// jali method state ko update karnay ka
// onClick={()=>setToggle((prev)=>//update state is trhan kartay hen
//              !prev                      // ek call back function create karengay sub say pehlay. jaisy he menu pr click karen to close khul jae
// )}
/>
{/* //agar toogle onhe to flex container bun jan warna hidden rahay */}
<div className={`${toggle ? 'flex' :'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140] rounded-xl sidebar`}>
<ul className="list-none flex  flex-col justify-end items-center flex-1">
{navLinks.map((nav,index)=>(
  <li key={nav.id}
  className={`font-poopins font-normal cursor-pointer text-[16px] ${index===navLinks.length-1 ? 'mr-0' :'mb-4'}  text-white `}>
    <a href={ `#${nav.id}`}>
    {nav.title}
</a>
  </li>
))}
    </ul>
</div>
    </div>
    </nav>
  )
}

export default Navbar
