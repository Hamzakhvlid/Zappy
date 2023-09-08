import React from 'react'

const RoundBox = ({ title, imageSrc }) => {
  return (
    <div className='shrink-0 rounded-lg w-[13%]   h-[35vh] bg-white shadow shadow-[#53535330] mr-6' > 
    <div className='mt-[-19%] '>
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="47" viewBox="0 0 76 33" fill="none"  >
  <rect x="29" width="18" height="33" fill="#EB002B"/>
  <rect x="58" width="18" height="33" fill="#EB002B"/>
  <rect width="18" height="33" fill="#EB002B"/>
</svg>
</div>
    <div className=' ml-3  rounded-lg w-[90%]  h-[27vh] shadow  shadow-[#00000030]'><img src={imageSrc} className="ml-2 pt-2"alt="" /> 
        </div> <h1 className='pt-1 font-medium'>{title}</h1> </div>
  )
}

export default RoundBox