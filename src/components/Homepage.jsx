import React,{useState } from 'react'

// import Rules from "../../images/image-rules.svg"
// import Close from "../../images/icon-close.svg"
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Modal from './Modal'


const Homepage = () => {
  return (
    <main className='w-full min-h-screen  laptop:pl-[20.8125rem] laptop:grid laptop:grid-rows-[214px_430px_44px] laptop:pr-[2rem] pt-[3rem] pb-[2rem] mobile:pb-[4rem] mobile:px-[2rem] bg-[#2A45C2] children:grid children:grid-rows-3 mobile:grid mobile:grid-rows-[12.5625rem_17.58375rem_11.22875rem] '>
        <Header/>
        <Content/>
        <Footer/>
        {/* <Modal/> */}
    </main>
  )
}

export default Homepage

