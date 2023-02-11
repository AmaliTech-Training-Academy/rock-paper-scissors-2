import React from 'react'
import Logo from "../../images/logo.svg"

const Header = () => {
  return (
    <div className='laptop:flex laptop:flex-row laptop:justify-between laptop:w-[43.75rem] mobile:h-[6rem] mobile:border-[rgba(255, 255, 255, 0.289199)] mobile:border-[0.1875rem] rounded-[0.9375rem] mobile:border-solid  mobile:flex mobile:flex-row mobile:justify-between mobile:items-center'>
        <div className=' mobile:ml-[2rem] mobile:w-[5.1875rem]'>
            <img src={Logo} alt=""/>
        </div>
        <div className='mobile:w-[5rem] mobile:mr-[0.75rem] '>
            <div className='mobile:h-[4.5rem] rounded-[0.5rem] bg-[#f3f3f3] flex flex-col  justify-center items-center text-center'>
                <h5 className='font-barlow text-[0.625rem] leading-[0.75rem] tracking-[0.0975rem] font-semibold text-[#2A45C2] '>SCORE</h5>
                <h1 className='font-barlow text-[#565468] mobile:text-[2.5rem] mobile:leading-[2.5rem] font-bold '>12</h1>
            </div>
        </div>
    </div>
  )
}

export default Header