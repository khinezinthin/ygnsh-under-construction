import React from 'react'
import './App.css'
import vector1 from "./assets/vector-gear-1.svg"
import vector2 from "./assets/vector-gear-2.svg"
import {FaFacebookF,FaLinkedinIn} from "react-icons/fa"
import {BiLogoGmail} from "react-icons/bi"
import Icon from './Icon'

const App = () => {
  return (
    <div className=' bg-img h-screen flex justify-center items-center'>
      <div className=' flex flex-col max-[400px]:gap-5 '>
        <div className=' flex justify-center items-center flex-col'>
          <div className="relative">
            <img src={vector1} alt="gear1" className=' max-sm:top-8 max-sm:w-9 animate-spin-reverse absolute z-20 right-6 top-11 w-11 max-[370px]:w-8 max-[370px]:top-6'/>
            <img src={vector2} alt="gear2" className=' max-sm:top-3 max-sm:w-5 max-sm:right-16 animate-spin-slow absolute z-20 right-20 top-6 w-6 max-[370px]:w-4 max-[370px]:top-4'/>

            <img src={vector1} alt="gear1" className=' max-sm:w-9 max-sm:bottom-[90px] max-sm:left-7 animate-spin-slow absolute z-20 left-9 bottom-28 w-11 max-[370px]:w-8 max-[370px]:bottom-[80px] max-[370px]:left-5'/>
            <Icon/>
          </div>
        </div>

          <div className=' flex justify-center items-center flex-col max-sm:gap-0 max-[400px]:gap-1 text-[#fff]'>
            <h1 className='max-[820px]:text-[30px] text-[35px] font-bold tracking-wider max-sm:text-[25px] text-center max-[460px]:text-[20px]' >Yangon Software House</h1>
            <h3 className='max-[820px]:text-[30px] text-[#024a62] text-center max-[460px]:text-[20px] text-[35px] font-bold tracking-wider m:-mt-1 max-[570px]:mt-0 max-sm:text-[25px]'>IS UNDER CONSTRUCTION</h3>
            
            <div className=' font-medium text-sm tracking-widest mt-1 max-sm:text-[12px] max-[400px]:text-[11px] text-center'>
              <p>if you want to contact us</p>
              <p>you can mail to 
                <a href='mailto:yangonsoftwarehouse@gmail.com' target='blank' 
                className=' underline text-[#024a62] '>
                  <span> enquiry@ygnsh.com</span>
                </a> and 
              </p>

              <p>you can call this phone number 
                <a href="tel:09787909924">
                <span className='underline text-[#024a62]'>09787909924</span>
                </a>
              </p>
            </div>

            <div className='flex gap-3 mt-3'>
              <a
              className=' bg-white text-[#024a62] p-2 rounded-full cursor-pointer hover:scale-105 duration-300 hover:bg-[#ffffffb0]'
               href="https://www.facebook.com/yangonsoftwarehouse?mibextid=ZbWKwL" target='blank'>
                <FaFacebookF/>
              </a>

              <a
              className='bg-white text-[#024a62] p-2 rounded-full cursor-pointer hover:scale-105 duration-300 hover:bg-[#ffffffb0]'
              href="https://www.linkedin.com/company/ygnsh/" target='blank'>
              <FaLinkedinIn />
              </a>
              <a
              className='bg-white text-[#024a62] p-2 rounded-full cursor-pointer hover:scale-105 duration-300 hover:bg-[#ffffffb0]'
              href="mailto:yangonsoftwarehouse@gmail.com" target='blank'>
              <BiLogoGmail />
              </a>
            </div>
          </div>
       </div>
    </div>
  )
}

export default App