import React from 'react'
import Sampledata from './data'
import RoundBox from './roundBox'
import MenuBox from './menubox'
import Navbar from './navbar'

const MenuPage = () => {
  var arr = Sampledata['menu'];
  return (
    <div >
    <Navbar/>
      <h1 className='float-left text-[#EB002B] font-sans font-bold italic text-[180%] pr-2 ' >Menu  </h1>

      <div className='flex flex-nowrap pt-10 float-left h-[44vh] max-h-[90vh] overflow-x-auto ' style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>{

       arr.map((item, index) =>
          <MenuBox key={index} title={item.title} imageSrc={item.imageSrc} />)}</div>


<div>
<h1 className='float-left text-[#EB002B] font-sans font-bold italic text-[180%] pr-2 ' >Best Sellers</h1>
</div>

   
    </div>
  )
}

export default MenuPage