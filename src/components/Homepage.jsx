import React from 'react'
import Logo from "../../images/Logo.svg"
import Triangle from "../../images/bg-triangle.svg"


const Homepage = () => {
  return (
    <div className='w-full min-h-screen flex flex-row justify-center items-center'>
        <div className='grid grid-cols-[700px_301px] w-[1001px] h-[688px]'>
            <div className='grid grid-rows-[150px_465px] gap-y-[2rem]'>
                <div className='flex flex-row items-center'>
                    <div className=' border-[#fff] border-[3px] border-solid rounded-[15px] flex flex-row  justify-between  w-[170px] basis-full h-[150px] px-[24px] py-[18px]'>
                        <img src={Logo} alt=""/>
                        <div className='h-[114px] rounded-[8px] bg-[#f3f3f3] basis-3/12 flex flex-col justify-center items-center text-center'>
                            <h5 className='font-barlow text-[#2A45C2] text-[16px] leading-[19.2px] tracking-[2.5px]'>
                                SCORE
                            </h5>
                            <h1 className='font-barlowbold text-[#565468] text-[64px] leading-[64px] h-[64px] w-[53px] font-bold text-center'>12</h1>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-row justify-center'>
                    <div className=' w-[470px] h-[430px] grid grid-rows-2 children:border-solid children:border-[#333] children:border-[4px]'>
                        <div className=''>
                            <div></div>
                            <div></div>
                        </div>
                        <div></div>
                        <img src={Triangle} alt="" className='absolute  z-[-1]'/>
                    </div>
                </div>
            </div>

            <div className='flex flex-row justify-end items-end '>
                <button className='text-white border-[#fff] border-[1px] border-solid rounded-[8px] h-[40px] w-[128px] self-end '>
                    <h3>RULES</h3>
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Homepage