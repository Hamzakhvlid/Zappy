import React from 'react'

const Hero = () => {
  return (
    <div >
   
<h1 class="text-left  text-[36px]  italic text-[#FFF] pl-[360px] pt-8">Finger Lick'in</h1>

<div className='lg:grid lg:grid-cols-3  md:flex '>
<div className='pl-8 pt-24 flex item-start  text-left'>
<h1 class="text-[45px] font-porter text-[#FFF]">Where <br></br> hunger<br></br>meets <br /> happiness<br></br> - your<br></br> go-to <br /> fast food <br /> destination</h1>
</div>
<div className=' flex flex-col  '>
<img class="float-left pl-80  w-min " src="public/images/tomatoslice.png" alt="" />
<img class="float-left pl-60 w-min  " src="public/images/leave.png" alt="" />
<img class="float-left pl-80  w-min" src="public/images/tomatoslice.png" alt="" />


</div>
<div className='float-right flex-col '  >



<img class="float-right pr-10 mb-[-40px]" src="public/images/bun.png" alt="" />
<img class="float-right pr-10 mb-[-40px] x" src="public/images/cheese.png" alt="" />
<img class="float-right pr-10 mb-[-12px] " src="public/images/kbab.png" alt="" />
<img class="float-right pr-10 mb-[-15px] " src="public/images/tomato.png" alt="" />
<img class="float-right pr-10 mt-[-20px] " src="public/images/salad.png" alt="" />
<img class="float-right pr-10 mt-[-33px]  " src="public/images/belowbun.png" alt="" />
<img class="float-right  w-min   " src="public/images/leave.png" alt="" />

<img class="float-right  pr-20   w-min  mt-[-10px] " src="public/images/tomatoslice.png" alt="" />


</div>
</div>
  </div>
  )
}

export default Hero