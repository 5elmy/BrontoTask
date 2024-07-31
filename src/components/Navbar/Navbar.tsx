"use client"
import{ Dropdown } from "./GeneralSelect/GeneralSelect";
export default function Navbar() {

   
    
  return (
    <div  className='sticky inset-x-2 top-0 z-30 w-full transition-all border-b border-gray-200  bg-white'>
<div className='flex items-center h-[64px] justify-between px-4'>
   
   <div  className=' w-full  hidden md:block '>
  
   <Dropdown/>
   </div>

 
<div className="block md:hidden">
<img src="/Avatar.svg"  alt="" />
</div>
  
   


    <div className=" flex justify-center items-center gap-[24px] px-[24px]">
      <img src="/Icon button.svg" alt="" />
      <img src="/calendar-tick_nav.svg" alt="" />

      <img src="/message.svg" alt="" />
      <img src="/notification-bing.svg" alt="" />
      <img src="/Avatar.svg" className="hidden md:block" alt="" />

    </div>
   

    
 

</div>

</div>
  )
}
