import React,{useState} from 'react'
import Triangle from '../../images/bg-triangle.svg'
import Paper from '../../images/icon-paper.svg'
import Scissor from '../../images/icon-scissors.svg'
import Rock from '../../images/icon-rock.svg'
// import { checkWinner } from '../Helper/Check-winner'
// import Clickedcomponent from './Clickedcomponent'
// import Clickedcomponent from './Clickedcomponent';



const Content = () => {
  
  // const buttons = document.getElementsByTagName("button");
  // const scoreEl = document.getElementById('score');
  // const choices = [ 'paper', 'rock','scissors'];
  // let userChoice = undefined;
  // let score = 0 ;

  // const updateScore = (value) => {
  //   score += value;
  //   scoreEl.innerText = score;
  // };

  // const randomChoice = ()=>{
  //   return choices[Math.floor(Math.random() *choices.length)];
  // }

  // console.log(randomChoice());

  // Eventlisteners for button clicks
  
  // const checkWiner = () =>{
  //   const computerChoice = randomChoice();
    
  //   if (userChoice === computerChoice){
  //     //draw
  //   }else if ((userChoice === 'paper' && computerChoice === 'rock') 
  //   ||(userChoice === 'rock' && computerChoice === 'scissors') ||
  //   (userChoice === 'scissors' && computerChoice === 'paper')){
  //     //user won
  //     updateScore(1);
  //   }else {
  //     //user Lost
  //     updateScore(-1);
  //   }

  // }
 
  
  // buttons.forEach((button) => {
  //      button.addEventListener('click', () => {
  //      userChoice = button.getAttribute('data-choice');//
  //        checkWiner();
  //     });
  // });
  
  // const [showClicked, setShowClicked] =useState(false);
  // const [defaultShow,setShow] =useState(true);
  
  // const showComponent = () =>{
    //   setShowClicked(
      //   return(<>
      //     <div className='bg-pink-500 text-white'> 
      //       <h1>Hello I am component</h1>      
      //     </div>   
  //   </>)
  //   )
  // }
  // if ()
  // style={{display: !preview ? 'block' : 'none'}}

  return (
  <>
    <div id="main" className='laptop:mx-[7rem] laptop:grid laptop:grid-rows-2 laptop:gap-x-[5rem] laptop:gap-y-[1.3rem]  laptop:children:w-[12.375rem] laptop:children:h-[12.6875rem] laptop:h-[26.875rem] laptop:w-[29.75rem] mobile:gap-x-[5.5rem] mobile:gap-y-[9rem]  mobile:children:w-[8.125rem] mobile:children:h-[8.3125rem]'>
      <button identity={btns[0]} onClick={() => handleClick(identity, keyValue)} keyValue={0}  className=' flex flex-row items-start rounded-full z-[1] bg-[#2A45C2] hover:translate-y-2 hover:duration-300 '>
        <div className=' laptop:w-[12.375rem] laptop:h-[12.125rem] flex flex-row items-center justify-center rounded-full mobile:w-[8.085625rem] mobile:h-[7.92375rem] bg-[#4664F4]'>
          <div className=' laptop:w-[9.5rem] laptop:h-[9.5rem] flex flex-row self-center mobile:w-[6.206875rem] rounded-full mobile:h-[6.208125rem]  bg-[#BABFD4]'>
            <div className='laptop:w-[9.5rem] laptop:h-[9rem] flex flex-col justify-center self-end bg-[#DADADA] rounded-full mobile:w-[6.206875rem] mobile:h-[5.88125rem] bg-'>
              <img src={Paper} className='laptop:h-[5rem] laptop:w-[4.200625rem] rotate-[-4deg] self-center mobile:w-[2.744375rem] mobile:h-[3.2675rem]' alt=''/>
            </div>
          </div>
        </div>
      </button>

      <button  identity={btns[1]} onClick={() => handleClick(identity, keyValue)} keyValue={1} className=' flex flex-row items-start  rounded-full z-[1] bg-[#C76C1B] hover:translate-y-2 hover:duration-300'>
        <div className=' laptop:w-[12.375rem] laptop:h-[12.125rem] flex flex-row items-center  justify-center rounded-full mobile:w-[8.085625rem] mobile:h-[7.92375rem] bg-[#EB9F0E]'>
          <div className='laptop:w-[9.5rem] laptop:h-[9.5rem] flex flex-row mobile:w-[6.206875rem] rounded-full mobile:h-[6.208125rem]  bg-[#BABFD4]'>
            <div className='laptop:w-[9.5rem] laptop:h-[9rem] flex flex-col justify-center self-end bg-[#DADADA] rounded-full mobile:w-[6.206875rem] mobile:h-[5.88125rem] bg-'>
              <img src={Scissor} className='laptop:h-[5rem] laptop:w-[4.200625rem] rotate-[-4deg] self-center mobile:w-[2.744375rem] mobile:h-[3.2675rem]' alt=''/>
            </div>
          </div>
        </div>
      </button>

      <button identity={btns[2]} onClick={() => handleClick(identity, keyValue)} keyValue={2} className=' laptop:col-span-2  flex flex-row items-start mx-auto z-[1] rounded-full mobile:col-span-2 bg-[#9D1634] hover:translate-y-2 hover:duration-300'>
        <div className='laptop:w-[12.375rem] laptop:h-[12.125rem] flex flex-row items-center justify-center rounded-full mobile:w-[8.085625rem] mobile:h-[7.92375rem] bg-[#DB2E4D]'>
          <div className='laptop:w-[9.5rem] laptop:h-[9.5rem] flex flex-row mobile:w-[6.206875rem] rounded-full mobile:h-[6.208125rem]  bg-[#BABFD4]'>
              <div className=' laptop:w-[9.5rem] laptop:h-[9rem] flex flex-col justify-center self-end bg-[#DADADA] rounded-full mobile:w-[6.206875rem] mobile:h-[5.88125rem] bg-'>
                <img src={Rock} className='laptop:h-[5rem] laptop:w-[4.200625rem] rotate-[-4deg] self-center mobile:w-[2.744375rem] mobile:h-[3.2675rem]' alt=''/>
              </div>
          </div>
        </div>
      </button>
      <img src={Triangle} alt="" className='laptop:h-[17.9375rem] laptop:mx-[8.5rem] laptop:w-[15.875rem] laptop:mt-[7.3rem]  absolute mobile:ml-[6.8rem] mobile:mt-[4.5rem] mobile:w-[10.375rem] mobile:h-[11.75rem] z-[0]'/>
      
    </div>
    
    
  </>
  )
}

export default Content

// onClick={() => handleClick(identity, keyValue)}