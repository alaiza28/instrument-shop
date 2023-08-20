import React, { useState } from 'react'

//import icons
import {AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart} from "react-icons/ai";
import {MdLocationOn} from "react-icons/md"
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs"

//import logo image
import Logo from '../assets/logo.png';

// const sunIcon = document.querySelector(".sun")
// const moonIcon = document.querySelector(".moon")

// const userTheme = localStorage.getItem("theme")
// const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// const iconToggle = () => {
//   moonIcon.classList.toggle("display-none");
//   sunIcon.classList.toggle("display-none");
// }

// const themeCheck = () => {
//   if(userTheme === "dark" || (userTheme && systemTheme)) {
//     document.documentElement.classList.add("dark");
//     moonIcon.classList.add("display-none");
//     return;
//   }else{
//     sunIcon.classList.add("display-none")
//   }
// }

// const themeSwitch = () => {
//   if(document.documentElement.classList.contains("dark")){
//     document.documentElement.classList.remove("dark");
//     localStorage.setItem("theme", "dark");
//     iconToggle();
//     return
//   }else{
//     document.documentElement.classList.contains("dark");
//     localStorage.setItem("theme", "dark");
//     iconToggle();
//   }
// }

// sunIcon.addEventListener("click", ()=>{
//   themeSwitch()
// })

// moonIcon.addEventListener("click", ()=>{
//   themeSwitch()
// })

// themeCheck()

const Nav = () => {
  const [theme, setTheme] = useState("light");;
  //handle switch
  const handleThemeSwitch = () => {
    const html = document.querySelector('html');
    if (theme === 'light') {
      setTheme('dark');
      html.classList.add('dark');
    }else{
      html.classList.remove('dark');
      setTheme('light')
    }
  }
  return (
    <nav className='w-full h-[100px] '>
          <div className='px-40 h-full w-full flex justify-between items-center'>
            {/* Logo */}
            <div className='flex flex-col items-center'>
                <img src={Logo} className='h-[50px] w-auto' alt="" />
                <h2 className='font-fourth text-[15px] font-medium text-fourth'>Instruments.</h2>
            </div>
            {/* Search Bar */}
            <div className='flex items-center mr-30'>
                <input type="text" className='border border-lime-600 w-[600px] p-4 mr-20' placeholder='Search Instruments'/>
                    <button className='flex items-center px-6 py-4 bg-fourth text-white'>
                        Your Location
                        <MdLocationOn className='ml-2'/>
                    </button>
            </div>
            {/* Icons */}
            <div className='flex items-center justify-between space-x-8'>
                <div>
                <button onClick={handleThemeSwitch}>
                  {
                    theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />
                  }
                </button>
                </div>
                <AiOutlineUser size={23}/>
                <div className='relative'>
                    <AiOutlineShoppingCart size={23} />
                    <span className='absolute top-[-6px] left-3 rounded-full px-1 text-[12px] bg-red-500 text-white'>1</span>
                </div>
                <AiOutlineHeart size={23}/>
            </div>
          </div>  
    </nav>
  )
}

export default Nav