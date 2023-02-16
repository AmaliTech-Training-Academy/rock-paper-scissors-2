import React from 'react';
import Rules from '../../images/image-rules.svg'
import Close from '../../images/icon-close.svg'

const Modal = ({visible,onClose}) => {
  if (!visible) return null;

  return (
    <div onClick={()=> onClose()} className='mobile:z-10 min-h-screen  w-full mobile:bg-white  mobile:justify-center mobile:items-center absolute  laptop:flex laptop:flex-row laptop:justify-center laptop:items-center inset-0 laptop:bg-black laptop:opacity-95 laptop:z-10'>
        <div  className='mobile:flex mobile:flex-col mobile:absolute mobile:inset-0 px-[2rem] rounded-[0.5rem] flex flex-col justify-center gap-[4rem] items-start laptop:bg-white laptop:w-[25rem] laptop:mt-[10rem] laptop:h-[25.9375rem] '>
            <div className='flex flex-row gap-[14rem]'>
            <h4 className='font-barlow mobile:absolute mobile:left-[39%] mobile:top-[20%] font-bold text-[#3B4262] text-[2rem] leading-[2rem]'>RULES</h4>
            
            <img  src={Close} onClick={onClose} className='mobile:absolute mobile:top-[88%] mobile:left-[50%] mobile:inset-0 cursor-pointer self-center w-[1.193125rem] h-[1.193125rem]'alt=''/>
            </div>
            <div className=' self-center laptop:w-[19.0625rem] laptop:h-[16.9375rem]'>
              <img src={Rules} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Modal