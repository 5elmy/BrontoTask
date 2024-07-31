"use client"
import React from 'react'
import {Popover, PopoverTrigger, PopoverContent,  Divider} from "@nextui-org/react";
import { MdDelete } from "react-icons/md";
import { Edit } from '../utils/icons';
import axios from 'axios';

export default function Menu({id,users}) {

  
  let deleteuser = async(id)=>{
    await axios.delete(`https://dv2.brontosolutions.com:8000/assignment/userprofiles/delete/${id}/`).then(res=>{
      console.log(res);
      users()
      
    }).catch(err=>{
      console.log(err);
      
    })
  }
  return (
    <Popover placement="bottom-end" className='shadow-md' showArrow={true}>
    <PopoverTrigger>
    
      <div className=' cursor-pointer text-[32px] text-[#FFFAFA]'>...</div>
    </PopoverTrigger>
    <PopoverContent className=' bg-white shadow-md'>
      <div className=" w-[150px] md:w-[200px] ">
      <div className="  p-3 flex  gap-[12px]  items-center">
 <div className='w-[20px] h-[20px] bg-[#2C29B0] rounded-md flex justify-center items-center'>
<Edit/>

 </div>
      <p  className="font-[Inter] leading-[20px] text-left font-[400] text-[14px] text-[#2C29B0] " >Edit</p>
      </div>
        
       
        <Divider className='bg-black w-full' />
        <div className="  p-3 flex  gap-[12px]  items-center">
 <div className='w-[20px] h-[20px] rounded-md flex justify-center items-center' onClick={()=>{
  deleteuser(id)
 
 }}>
 <MdDelete  className='text-red-500 text-[32px]' />

 </div>
      <p  className="font-[Inter] leading-[20px] text-left font-[400] text-[14px] text-red-500 " >Delete</p>
      </div>
   
      </div>
     
  
    </PopoverContent>
  </Popover>
  )
}





