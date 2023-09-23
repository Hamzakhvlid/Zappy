import React from 'react'
import RoundBox from './roundBox'

const MenuBox = (props) => {
  return (
    <RoundBox>
        
        <div className=' ml-3  rounded-lg w-[90%]   h-[18vh] shadow  shadow-[#00000030]'><img src={props.imageSrc} className="ml-2 pt-2 w-[150px] h-[120px] " alt="" />
</div> <h1 className='pt-1 font-medium'>{props.title}</h1>
    </RoundBox>
  )
}

export default MenuBox