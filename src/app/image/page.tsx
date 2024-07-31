"useClient"
import Menu from "@/components/Menu/Menu";
import { Avatar, Card, Chip} from "@nextui-org/react";

import Image from "next/image";

export default function ImageCard({users,user}) {

  console.log({user});
  

  return (
    <Card classNames={{base:"rounded-md"}}   className='  overflow-hidden relative rounded-lg'>
    
      <img
      className="rounded-lg"
      
      src={"/35d8ac896b7be8d2914d613d92182300_task.jpg"}
     
      />
    
      <div className='  absolute top-1 right-3 '>
     <Menu id={user.id} users={users}/>
      </div>
      
      
      <div className="  flex justify-center items-center absolute bottom-3 left-1 right-1">
        <div className="  w-[90%] flex flex-col gap-5 ">
        <div   className=" font-[Helvetica] text-[10px] font-[400] leading-[11.5px] text-left
        bg-[#FFFAFA] w-[85px] h-[19px]  rounded-[16px] py-4 px-6  flex  items-center text-[#001F56]">Class A</div>
        <p className="text-[#FFFAFA] font-[Helvetica] text-[14px] font-[700] leading-[16.1px] text-left" >
            CSS ile resim go lgelendirmesini nasil yaparim <br/>
            {user.job_title}
        </p>

        <div className="flex justify-between items-center">
      <div className="   flex gap-1  items-center">
      <img className=" w-[20px] h-[20px] rounded-full"  src="/Ellipse 1.svg" />
      <p  className="font-[Helvetica] leading-[13.8px] text-left font-[400] text-[12px] text-[#FFFAFA]" >{user.name}</p>
      </div>
      <div className="   flex gap-1  items-center">
      <img className=" w-[20px] h-[20px]  rounded-full"  src="/calendar-tick.svg" />
      <p  className="font-[Helvetica] leading-[13.8px] text-left font-[400] text-[12px] text-[#FFFAFA]" >24.4.2024</p>
      </div>
      <div className="   flex gap-1  items-center">
      <img className=" w-[20px] h-[20px]  rounded-full"  src="/clock.svg" />
      <p  className="font-[Helvetica] leading-[13.8px] text-left font-[400] text-[12px] text-[#FFFAFA]" >120</p>
      </div>
    
      
        </div>

        </div>
      </div>


    

    </Card>
  );
}
