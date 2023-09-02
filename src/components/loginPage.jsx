import React from 'react'

function LoginPage() {
  return (
    <div className='mx-auto rounded-lg mt-[18%] w-[100%] lg:w-[50%] h-[50vh] bg-white' >
      <h1 className='text-center pt-[13%] font-bold text-lg'>Login</h1>
      <hr class="border-red-500 border-width-1px height-2px mt-[3%] w-[70%] ml-[16%]"/>
     
      <form>
  <input type="email" id="email" placeholder=" Email "  className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[60%] h-12 mt-[5%]'  />
  <input type="email" id="email" placeholder=" Password "  className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[60%] h-12 mt-[5%] obsecure'  />
  
</form>

<button class=" mt-[6%] bg-[#EB002B] rounded-[25px] h-[35px] w-[70px] text-[#FFF] font-sans " >Login</button>
<img src="images/bike.png" alt=""  className='mt-[-10%]'/>


      </div>
  )
}

export default LoginPage