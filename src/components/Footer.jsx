import React,{useState} from 'react'
import Rules from "../../images/image-rules.svg"
import Close from "../../images/icon-close.svg"
import Modal from './Modal'

const Footer = () => {
  const [preview,setPreview] = useState(false);
  const handleOnClose = () => setPreview(false);


  return (
    <>
      <Modal onClose={handleOnClose} visible={preview} />
      <div className=' laptop:ml-[64.97rem] mobile:flex-col mobile:justify-center '>
          <button onClick={() => setPreview(!preview)}  className=' mobile:mt-[8.4rem] text-white hover:text-[#3B4262] hover:bg-gradient-to-b from-[#F3F3F3]  to-[#fff] opacity-100 border-[#fff] border-[1px] border-solid rounded-[8px] h-[40px] w-[128px] '>
              <h3 className=' text-[1rem] leading-[19px] tracking-[2.5px] font-barlow '>RULES</h3>
          </button>                
      </div>
    </>
  )
}

export default Footer