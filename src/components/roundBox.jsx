import React from 'react'

const RoundBox = ({ title, imageSrc }) => {
  return (
    <div className='shrink-0 rounded-lg w-[18%]  h-[32vh] bg-white shadow shadow-[#53535330] mr-6' > 
    <div className=' ml-3  rounded-lg w-[90%]  h-[27vh] shadow  shadow-[#00000030]'><img src={imageSrc} className="ml-2 pt-2"alt="" /> 
        </div> <h1 className='pt-1 font-medium'>{title}</h1> </div>
  )
}

export default RoundBox