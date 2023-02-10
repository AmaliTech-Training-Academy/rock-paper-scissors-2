import React,{useState } from 'react'
import Logo from "../../images/Logo.svg"
import Triangle from "../../images/bg-triangle.svg"
import Paper from "../../images/icon-paper.svg"
import Scissors from "../../images/icon-scissors.svg"
import Rock from "../../images/icon-rock.svg"
import Rules from "../../images/image-rules.svg"
import Close from "../../images/icon-close.svg"
import Header from './Header'
import Content from './Content'
import Footer from './Footer'


const Homepage = () => {
  return (
    <main className='w-full min-h-screen laptop:pl-[20.8125rem] laptop:pr-[2rem] pt-[3rem] pb-[2rem] mobile:pb-[4rem] mobile:px-[2rem] bg-[#2A45C2] children:grid children:grid-rows-3 children:border-solid children:border-[#DB2E4D] children:border-[0.1875rem] mobile:grid mobile:grid-rows-[12.5625rem_17.58375rem_11.22875rem] '>
        <Header/>
        <Content/>
        <Footer/>
    </main>
  )
}

export default Homepage


    
    
    {/* <main className='grid grid-cols-[700px_301px] w-[1001px] h-[688px]  mobile:w-full mobile:min-h-screen'>
        <div className='grid grid-rows-[150px_465px] gap-y-[2rem]'>
            <div className=' mobile:hidden flex flex-row items-center'>
                <div className='  border-[#fff] border-[3px] border-solid rounded-[15px] flex flex-row  justify-between  w-[170px] basis-full h-[150px] px-[24px] py-[18px]'>
                    <img src={Logo} alt=""/>
                    <div className='h-[114px] rounded-[8px] bg-[#f3f3f3] basis-3/12 flex flex-col justify-center items-center text-center'>
                        <h5 className='font-barlow text-[#2A45C2] text-[16px] leading-[19.2px] tracking-[2.5px]'>
                            SCORE
                        </h5>
                        <h1 className='font-barlowbold text-[#565468] text-[64px] leading-[64px] h-[64px] w-[53px] font-bold text-center'>12</h1>
                    </div>
                </div>
            </div>
            <div className=' mobile:hidden flex flex-row justify-center'>
                <div className='sm:hidden w-[470px] gap-[5rem] h-[430px] grid grid-rows-2'>
                    <div className='flex flex-row children:rounded-full'>
                        <div className='h-[252px] w-[248px] hover:visible flex flex-row items-center justify-center'>
                            <button className='flex flex-row h-[203px] hover:visible w-[198px] justify-center items-center bg-[#2A45C2] hover:translate-y-2 hover:duration-300 rounded-full'>
                                <div className='flex flex-row justify-center items-center h-[194px] w-[198px] self-start bg-[#4664F4] rounded-full'> 
                                    <div className='flex flex-row  w-[152px] rounded-full h-[152px] bg-[#BABFD4]'>
                                        <div className='flex flex-row justify-center items-center h-[144px] w-[152px] bg-gradient-to-b from-[#F3F3F3]  to-[#DADADA] opacity-[98%] self-end rounded-full'>
                                            <img src={Paper} className='w-[67.21px] h-[80px] origin-center rotate-[-4deg] self-center' alt=''/>
                                        </div> 
                                    </div>
                                </div>
                            </button>
                        </div>
                        
                        <div className='h-[252px] w-[248px] hover:visible flex flex-row items-center justify-center bg-white rounded-full'>
                            <button className='flex hover:visible flex-row justify-center items-center h-[203px] w-[198px] bg-[#C76C1B] hover:translate-y-2 hover:duration-300 rounded-full'>
                                <div className='flex flex-row justify-center items-center bg-[#EB9F0E] h-[194px] w-[198px] rounded-full self-start'>
                                    <div className='flex flex-row  w-[152px] rounded-full h-[152px] bg-[#BABFD4]'>
                                        <div className='flex flex-row justify-center items-center h-[144px] w-[152px] bg-gradient-to-b from-[#F3F3F3]  to-[#DADADA] opacity-[98%] self-end rounded-full'>
                                            <img src={Scissors} className='w-[67.21px] h-[80px] origin-center rotate-[-4deg] self-center' alt=''/>    
                                        </div> 
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center '>
                        <div className='h-[252px] w-[248px] hover:visible flex flex-row items-center justify-center'> 
                            <button className='hover:visible flex flex-row justify-center items-center h-[203px] w-[198px] bg-[#9D1634] hover:translate-y-2 hover:duration-300 rounded-full'>
                                <div className='h-[194px] w-[198px] rounded-full bg-[#DB2E4D] flex flex-row justify-center items-center self-start shadow-[0_3px_3px_rgba(0, 0, 0, 0.196706)]'>
                                    <div className='flex flex-row  w-[152px] rounded-full h-[152px] bg-[#BABFD4]'>
                                        <div className=' flex flex-row justify-center items-center h-[144px] w-[152px] bg-gradient-to-b from-[#F3F3F3]  to-[#DADADA] opacity-[98%] self-end rounded-full'>
                                            <img src={Rock} className='w-[67.21px] h-[80px] origin-center rotate-[-4deg] self-center' alt=''/>    
                                        </div> 
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <img src={Triangle} alt="" className='absolute self-center ml-[6.8rem] h-[287px] w-[254px] z-[-1]'/>
                </div>
            </div>
        </div>

         */}
    {/* </main> */}