import React from 'react'
import './App.css'
import bgImg from "./assets/bg-img.svg"
// import img from "./assets/construction.svg"
import vector1 from "./assets/vector-gear-1.svg"
// import vector2 from "./assets/vector-gear-2.svg"
// import text from "./assets/text.svg"
import {FaFacebookSquare,FaLinkedin} from "react-icons/fa"

const App = () => {
  return (
    <div className=' bg-img h-screen flex justify-center items-center'>
      <div className=' flex flex-col max-[400px]:gap-5 '>
        <div className=' flex justify-center items-center flex-col'>
          {/* <div className=" relative">
            <img src={vector1} alt="gear1" className=' max-sm:top-8 max-sm:w-9 animate-spin-reverse absolute z-20 right-6 top-11 w-11'/>
            <img src={vector2} alt="gear2" className=' max-sm:top-3 max-sm:w-5 max-sm:right-16 animate-spin-slow absolute z-20 right-20 top-6 w-6'/>

            <img src={vector1} alt="gear1" className=' max-sm:w-9 max-sm:bottom-[90px] max-sm:left-7 animate-spin-slow absolute z-20 left-9 bottom-28 w-11'/>
            <img src={text} alt="text" className='absolute z-50 left-0 top-0 animate-pulse'/>
            <img src={img} className='relative w-[450px] max-sm:w-[350px] z-50' alt=""/>
          </div> */}
        </div>

          <div className=' flex justify-center items-center flex-col max-sm:gap-0 max-[400px]:gap-1 text-[#fff]'>
            <h1 className='max-[820px]:text-[30px] text-[35px] font-bold tracking-wider max-sm:text-[25px]' >Yangon Software House</h1>
            <h3 className='max-[820px]:text-[30px] text-[#024a62] text-center text-[35px] font-bold tracking-wider m:-mt-1 max-[570px]:mt-0 max-sm:text-[25px]'>IS UNDER CONSTRUCTION</h3>
            <p className=' font-medium text-sm tracking-widest mt-1 max-sm:text-[12px] max-[400px]:text-[11px]'>PLEASE COME BACK LATER</p>
            <div className='flex gap-3 mt-3'>
              <a
              className=' text-[26px] cursor-pointer hover:scale-105 duration-300 hover:text-[#ffffffb0]'
               href="https://www.facebook.com/yangonsoftwarehouse?mibextid=ZbWKwL" target='blank'>
                <FaFacebookSquare/>
              </a>

              <a
              className=' text-[26px] cursor-pointer hover:scale-105 duration-300 hover:text-[#ffffffb0]'
              href="https://www.linkedin.com/company/ygnsh/" target='blank'>
              <FaLinkedin />
              </a>
            </div>
          </div>
       </div>
    </div>
  )
}

export default App