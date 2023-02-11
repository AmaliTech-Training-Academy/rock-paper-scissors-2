import React from 'react'
import Triangle from '../../images/bg-triangle.svg'
import Paper from '../../images/icon-paper.svg'
import Scissor from '../../images/icon-scissors.svg'
import Rock from '../../images/icon-rock.svg'



const Content = () => {
  return (
    <div className='mobile:gap-x-[5.5rem] mobile:gap-y-[9rem] grid grid-cols-2  mobile:children:w-[8.125rem] mobile:children:h-[8.3125rem]'>
      <button className=' flex flex-row items-start rounded-full z-[1] bg-[#2A45C2] hover:translate-y-2 hover:duration-300 '>
        <div className=' flex flex-row items-center justify-center rounded-full mobile:w-[8.085625rem] mobile:h-[7.92375rem] bg-[#4664F4]'>
          <div className='flex flex-row self-center mobile:w-[6.206875rem] rounded-full mobile:h-[6.208125rem]  bg-[#BABFD4]'>
            <div className='flex flex-col justify-center self-end bg-[#DADADA] rounded-full mobile:w-[6.206875rem] mobile:h-[5.88125rem] bg-'>
              <img src={Paper} className=' self-center mobile:w-[2.744375rem] mobile:h-[3.2675rem]' alt=''/>
            </div>
          </div>
        </div>
      </button>

      <button className=' flex flex-row items-start  rounded-full z-[1] bg-[#C76C1B] hover:translate-y-2 hover:duration-300'>
        <div className=' flex flex-row items-center  justify-center rounded-full mobile:w-[8.085625rem] mobile:h-[7.92375rem] bg-[#EB9F0E]'>
          <div className='flex flex-row mobile:w-[6.206875rem] rounded-full mobile:h-[6.208125rem]  bg-[#BABFD4]'>
            <div className='flex flex-col justify-center self-end bg-[#DADADA] rounded-full mobile:w-[6.206875rem] mobile:h-[5.88125rem] bg-'>
              <img src={Scissor} className=' self-center mobile:w-[2.744375rem] mobile:h-[3.2675rem]' alt=''/>
            </div>
          </div>
        </div>
      </button>

      <button className=' flex flex-row items-start mobile:mx-auto z-[1] rounded-full col-span-2 bg-[#9D1634] hover:translate-y-2 hover:duration-300'>
        <div className='flex flex-row items-center justify-center rounded-full mobile:w-[8.085625rem] mobile:h-[7.92375rem] bg-[#DB2E4D]'>
          <div className='flex flex-row mobile:w-[6.206875rem] rounded-full mobile:h-[6.208125rem]  bg-[#BABFD4]'>
              <div className=' flex flex-col justify-center self-end bg-[#DADADA] rounded-full mobile:w-[6.206875rem] mobile:h-[5.88125rem] bg-'>
                <img src={Rock} className=' self-center mobile:w-[2.744375rem] mobile:h-[3.2675rem]' alt=''/>
              </div>
          </div>
        </div>
      </button>

      <img src={Triangle} alt="" className='absolute mobile:ml-[6.8rem] mobile:mt-[4.5rem] mobile:w-[10.375rem] mobile:h-[11.75rem] z-[0]'/>
    </div>
  )
}

export default Content

{/* <img src={Triangle} alt="" className='absolute self-center ml-[6.8rem] h-[287px] w-[254px] z-[-1]'/> */}