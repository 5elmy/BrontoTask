"use client"

import ImageCard from "./image/page";
import AddUser from "./modal/page";
import { useEffect, useState } from "react";
import axios from "axios";



export default function Home() {

let [users, setUser] = useState([])
  let getAllUser = async()=>{
    await axios.get(`https://dv2.brontosolutions.com:8000/assignment/userprofiles/`).then(res=>{
      console.log(res);
      setUser(res.data.results)
      
    }).catch(err=>{
      console.log(err);
      
    })
  }
  useEffect(()=>{
    getAllUser()
  },[])
 
  return (
 


<main className="mx-2">

<div className="">
  <AddUser users={getAllUser}/>
</div>
    <section className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[16px]  ">
      {users.map(ele=>{
        return  <div key={ele.id} className=" flex justify-center items-center   ">
       <ImageCard users={getAllUser} user={ele}/>
      </div>
      })}
     
      

   
    </section>


</main>



   
  );
}
