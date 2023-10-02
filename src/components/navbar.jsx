
import React from 'react'

const Navbar = () => {
  return (
    <nav class="md:pt-3 md:pl-10  lg:ml-[-4%] flex  justify-between items-center   ">
        <div className=' pr-[20%] flex'>
            <div className='w-[30px] h-[30px] md:hidden pt-3 mr-[-48px]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" >
  <path d="M3.75 8.75H26.25M3.75 15H26.25M3.75 21.25H26.25" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</svg>
</div>
   <img className=" w-[63px] h-[57px] mt-[-8px]"src="src/assets/logo.png  " alt="" />
<h1  class='md:pt-4 pl-4  lg:mt-[-10%] text-[40px] font-extrabold font-primary italic '>Zippy</h1></div>
<ol class="list-none justify-end items-center flex-1 sm:flex   text-[20px]   pr-20 hidden @media (max-width: 768px)">
 <li className='pr-5'>Menu</li>
 <li className='pr-5'>Cotact</li>
 <li >About</li>
 
</ol>
<button class="  bg-[#EB002B] rounded-[25px] h-[35px] w-[70px] text-[#FFF] font-sans " >Login</button>
</nav>
  )
}

export default Navbar