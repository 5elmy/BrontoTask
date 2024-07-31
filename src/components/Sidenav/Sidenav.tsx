import React from 'react'

export default function Sidenav() {
  return (
    <div>
    <div
 
    className="bg-blue-950  fixed left-0 "
    style={{
        boxShadow:"0px 0px 2px rgb(0,0,0,.25)",
        height:"100vh",
        width:"50px",
        padding:"2px"
    }}

    >
        <div style={{
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"space-between",
            height:"100%"
        }}  >

            <div className='pt-[30px] flex justify-center items-center'>
                <img src="/Vector.svg" alt="" />
            </div>
            <div className='pt-[30px]  flex justify-center items-center '>
                <img src="/second_Vector.svg" alt="" />
            </div>



        </div>

    </div>
</div>
  )
}
