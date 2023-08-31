
import React from 'react'

const Navbar = () => {
  return (
    <nav class="pt-4 pl-10 flex justify-between items-center bg-[#FFD700] w-[] ">
   <img className="w-[60px] h-[50px]"src="src/assets/logo.png " alt="" />
<h1  class='pt-5 pl-4 text-[40px] font-extrabold font-primary italic '>Zippy</h1>
<ol class="list-none justify-end items-center flex-1 sm:flex   text-[20px]   pr-20 ">
 <li className='pr-5'>Menu</li>
 <li className='pr-5'>Cotact</li>
 <li >About</li>
 
</ol>
<button class=" mr-6 bg-[#EB002B] rounded-[25px] h-[35px] w-[70px] text-[#FFF] font-sans" >Login</button>
</nav>
  )
}

export default Navbar