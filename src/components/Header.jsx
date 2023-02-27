import React from 'react'
import Logo from "../../images/logo.svg"

const Header = () => {
  const score = localStorage.getItem('score')
  return (
    <div className='laptop:border-solid  laptop:border-[0.1875rem] laptop:border-[rgba(255, 255, 255, 0.289199)] laptop:h-[9.375rem] laptop:gap-[5rem] laptop:flex laptop:flex-row  laptop:justify-between laptop:w-[43.75rem] mobile:h-[6rem] mobile:border-[rgba(255, 255, 255, 0.289199)] mobile:border-[0.1875rem] rounded-[0.9375rem] mobile:border-solid  mobile:flex mobile:flex-row mobile:justify-between mobile:items-center'>
        <div className=' mobile:ml-[2rem]  laptop:pl-[1rem] laptop:self-center laptop:basis-[70%] mobile:w-[5.1875rem]'>
            <img src={Logo} alt=""/>
        </div>
        <div className='mobile:w-[5rem] laptop:self-center laptop:pr-[1rem] laptop:basis-[30%] mobile:mr-[0.75rem] '>
            <div className=' laptop:h-[7.125rem]  mobile:h-[4.5rem] rounded-[0.5rem] bg-[#f3f3f3] flex flex-col  justify-center items-center text-center'>
                <h5 className='font-barlow text-[0.625rem] leading-[0.75rem] tracking-[0.0975rem] font-semibold text-[#2A45C2] '>SCORE</h5>
                <h1 id='score'className='font-barlow laptop:text-[4rem] laptop:leading-[4rem] laptop:font-bold text-[#565468] mobile:text-[2.5rem] mobile:leading-[2.5rem] font-bold '>{score}</h1>
            </div>
        </div>
    </div>
  )
}

export default Header

