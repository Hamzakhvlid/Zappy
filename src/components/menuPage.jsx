import React from 'react'
import Sampledata from './data'
import RoundBox from './roundBox'

const MenuPage = () => {
  return (
    <div >
        <h1 className='float-left text-[#EB002B] font-sans font-bold italic text-[180%] ' >Menu</h1>
    <div className='flex flex-nowrap pt-10 float-left h-[41vh] max-h-[90vh] overflow-x-auto scrollbar-hide' style={{  scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>{
        
        Sampledata.map((item,index)=>
        <RoundBox key={index} title={item.title} imageSrc={item.imageSrc}/>)}</div></div>
  )
}

export default MenuPage