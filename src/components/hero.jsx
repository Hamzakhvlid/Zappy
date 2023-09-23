import React from 'react'

const Hero = () => {
  return (
    <div className=' lg:flex    content-evenly ' >


      <div className='flex-col '>

        <h1 class="text-left  text-[200%]  italic text-[#FFF] pl-[50%] md:pt-8 ">Finger Lick'in</h1>


        <div className=' pt-24 flex   text-left '>
          <h1 class="text-[200%] lg:text-[300%] font-porter text-[#FFF]">Where <br></br> hunger<br></br>meets <br /> happiness<br></br> - your<br></br> go-to <br /> fast food <br /> destination</h1>
        </div>

      </div>

      <div className='flex'>
        <div className=' shrink-none flex-col md:pt-60 items-end md:pl-20'  >



          <img class="     " src="public/images/bun.png" alt="" />
          <img class="  mt-[-10%]  " src="public/images/cheese.png" alt="" />
          <img class=" mt-[-8%] " src="public/images/kbab.png" alt="" />
          <img class=" mt-[-5%]  " src="public/images/tomato.png" alt="" />
          <img class=" mt-[-7%] " src="public/images/salad.png" alt="" />
          <img class=" mt-[-8%] " src="public/images/belowbun.png" alt="" />



        </div>

        <div className='flex-col items-end md:pt-40'>
          <img class="    " src="public/images/tomatoslice.png" alt="" />
          <img class="     " src="public/images/leave.png" alt="" />
          <img class="     " src="public/images/tomatoslice.png" alt="" />


        </div>
      </div>

    </div>
  )
}

export default Hero