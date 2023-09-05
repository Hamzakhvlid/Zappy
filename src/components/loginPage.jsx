import React from 'react'

function LoginPage() {
  return (
    <div className='mx-auto  mt-[18%]   rounded-lg w-[100%] lg:w-[50%] h-[63vh] bg-white' >
      <h1 className='text-center pt-[13%] font-bold text-lg'>Login</h1>
      <hr class="border-red-500 border-width-1px height-2px mt-[3%] w-[70%] ml-[16%]"/>
     
      <form>
  <input type="email" id="email" placeholder=" Email "  className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[60%] h-12 mt-[5%]'  />
  <input type="email" id="email" placeholder=" Password "  className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[60%] h-12 mt-[3%] obsecure'  /><br />
  <a href='https://www.google.com' className='text-[#EB002B] underline hover:underline-offset-4 ml-[30%] pt-[4%]'>forgot Password?</a>
</form>

<button class=" mt-[4%] bg-[#EB002B] rounded-[25px] h-[35px] w-[70px] text-[#FFF] font-sans " >Login</button>
<h1 className='text-center pt-[2%]  mt-2 text-md text-gray-400'>Or login with</h1>
<div className='flex justify-center mt-2'>
  <img  className="w-[7%] h-[7%] "src="images/googleLogo.png" alt="" />
  <img  className="w-[6%] h-[6%] "src="images/appleLogo.png" alt="" /> 
  
</div>
<h1 className='text-center pt-[2%]   text-md text-gray-400'>if you don't have any account? <a href='https://www.google.com' className='text-[#EB002B] underline hover:underline-offset-4'>SignUp</a></h1>
<img src="images/bike.png" alt=""  className=''/>



      </div>
  )
}

export default LoginPage