import './App.css';
import Logo from './assets/logo2_nobg.png';
import React, { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <div className="App overflow-x-hidden">
      <header className="custom-bg h-screen">
      <nav className="relative flex items-center justify-between pr-10 pl-10 sm:justify-around sm:p-0">
        {/* Logo */}
        <img src={Logo} alt="Luxury Hair Club Logo" className="w-36 lg:w-40 xl:w-52" />

        {/* Dropdown Menu */}
        <ul
          className={`absolute top-16 left-0 w-full p-4 rounded-lg transition-all duration-300 ease-in-out sm:relative sm:top-0 sm:w-auto sm:flex sm:gap-10 sm:items-center sm:bg-transparent sm:p-0 sm:rounded-none ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li className="hover:text-orangeColor cursor-pointer text-white xl:text-xl lg:text-sm md:text-xs font-monument pt-[5rem] sm:pt-0">
            Salon Overview
          </li>
          <li className="hover:text-orangeColor cursor-pointer text-white xl:text-xl lg:text-sm md:text-xs font-monument pt-[5rem] sm:pt-0">
            Price List
          </li>
          <li className="hover:text-orangeColor cursor-pointer text-white xl:text-xl lg:text-sm md:text-xs font-monument pt-[5rem] sm:pt-0">
            Gallery
          </li>
          <li className="hover:text-orangeColor cursor-pointer text-white xl:text-xl lg:text-sm md:text-xs font-monument pt-[5rem] sm:pt-0">
            Contact
          </li>
          {menuOpen ? <>
            <li className="text-orangeColor cursor-pointer text-lg font-monument pt-[5rem] sm:pt-0">
            Book Now
          </li>
          </> : null}
        </ul>

        {/* Menu Toggle Button */}
        <a
          className="font-monument xl:text-xl lg:text-sm md:text-end text-orangeColor cursor-pointer decoration-auto z-10"
          role="button"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="block sm:hidden border border-[#F89369] rounded-full px-4 py-2 text-center hover:bg-[#F89369] hover:text-white transition">
            {menuOpen === false ? "Menu" : "Close"}
          </span>
          <span className="hidden sm:block hover:text-orangeColor transition">
            Book Now
          </span>
        </a>
    </nav>
      <div className={`flex flex-col pt-10 transition-transform duration-300 ease-in-out ${menuOpen ? 'transform translate-y-[-45rem]' : 'transform translate-y-0'}`}>
        <span className='text-white font-normal text-xs sm:text-base'>Since 1989</span>
        <h1 className='pt-10 text-3xl text-white tracking-widest leading-9 sm:text-6xl'>UNISEX HAIR <span className='text-black text-stroke p-1'>HAVEN</span></h1>
        <p className='text-sm sm:text-base leading-7 text-white pt-10 text-center w-80 sm:w-2/3 lg:w-2/3 xl:w-1/2 self-center'>There is a vision at the Luxury Hair Club hair salon in Düsseldorf, Oberbilk: to create a retreat for men as well as a modern beauty salon for women. You can experience the results for yourself during your visit and let yourself be pampered in a luxurious way.</p>
        <a className='text-white text-sm sm:text-base tracking-wider mt-20 font-semibold border border-white self-center w-72 p-5 rounded cursor-pointer hover:text-white hover:border-black  hover:bg-black hover:bg-opacity-80 transition-all duration-200 ease-in-out'>Prices</a>
      </div>
      </header>

    </div>
  );
}

export default App;
