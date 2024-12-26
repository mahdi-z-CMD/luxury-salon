import './App.css';
import Logo from './assets/logo2_nobg.png';
import React, { useState } from "react";

// images
import image1 from './assets/images/image1.jpg'
import image2 from './assets/images/image2.jpg'
import image3 from './assets/images/image3.jpg'
import image1_tool from './assets/images/image1_tool.png'
import image2_tool from './assets/images/image2_tool.png'
import image3_tool from './assets/images/image3_tool.png'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <div className="App overflow-x-hidden overflow-y-hidden">
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
        <h1 className='pt-10 text-3xl text-white tracking-widest leading-9 sm:text-6xl font-bold'>UNISEX HAIR <span className='text-black text-stroke p-1'>HAVEN</span></h1>
        <p className='text-sm sm:text-base leading-7 text-white pt-10 text-center w-80 sm:w-2/3 lg:w-2/3 xl:w-1/2 self-center font-lovelace font-normal'>There is a vision at the Luxury Hair Club hair salon in Düsseldorf, Oberbilk: to create a retreat for men as well as a modern beauty salon for women. You can experience the results for yourself during your visit and let yourself be pampered in a luxurious way.</p>
        <a className='text-white text-sm sm:text-base tracking-wider mt-20 font-semibold border border-white self-center w-72 p-5 rounded cursor-pointer hover:text-white hover:border-black  hover:bg-black hover:bg-opacity-80 transition-all duration-200 ease-in-out'>Prices</a>
      </div>
      </header>
      <div className='sm:w-[110%] sm:h-[150px] bg-orangeColor -rotate-2 bottom-10 right-5 sm:relative flex justify-center items-center'>
        <h1 className='text-transparent text-stroke2 tracking-widest xl:text-8xl 2xl:text-9xl lg:text-7xl md:text-6xl sm:text-5xl'>
          RASAGE & TONTE
        </h1>
      </div>
      <main>
        {/* section 1 */}
        <section className='sm:flex bottom-20 relative'>
          <div className='sm:flex flex-col sm:w-1/2 mt-52 items-center'>
          <h1 className="font-monument leading-10 tracking-widest sm:text-6xl"> LA <span className="text-orangeColor">BARBE</span> </h1>
            <p className='font-lovelace sm:w-1/2 xl:w-100 lg:w-100 md:w-100 sm:text-left mt-10 sm:text-base font-normal leading-6 text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non.</p>
            <a className='mt-24 border border-black rounded p-5 text-[#000000] sm:text-xs cursor-pointer leading-5 tracking-wider hover:text-white hover:border-black  hover:bg-black hover:bg-opacity-80 transition-all duration-200 ease-in-out'>EN SAVOIR PLUS</a>
          </div>
          <div className='sm:flex sm:w-1/2 justify-start right-48 relative items-center'>
            <img src={image2_tool} className="w-[333px] h-[333px] rotate-12 relative left-24 z-10 top-20" alt="Description of image" />
            <img src={image1} className="w-[540px] h-[665px] -rotate-2" alt="Description of image"></img>
          </div>
        </section>
        {/* section 2 */}
        <section className='sm:flex flex-row-reverse mt-40'>
          <div className='sm:flex flex-col sm:w-1/2 mt-32 items-center'>
          <h1 className="font-monument leading-10 tracking-widest sm:text-6xl"> LA <span className="text-orangeColor">BARBE</span> </h1>
            <p className='font-lovelace sm:w-1/2 sm:text-left mt-10 sm:text-base font-normal leading-6 text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non.</p>
            <a className='mt-24 border border-black rounded p-5 text-[#000000] sm:text-xs cursor-pointer leading-5 tracking-wider hover:text-white hover:border-black  hover:bg-black hover:bg-opacity-80 transition-all duration-200 ease-in-out'>EN SAVOIR PLUS</a>
          </div>
          <div className='sm:flex sm:w-1/2 justify-start left-10 relative items-center flex-row-reverse'>
            <h1 className='absolute -top-16 left-20 text-stroke2 sm:text-9xl text-transparent font-monument'>SOINS</h1>
            <img src={image1_tool} className="w-[203px] h-[353px] -rotate-12 relative right-124 z-10 top-20" alt="Description of image" />
            <img src={image2} className="w-[540px] h-[665px] rotate-2" alt="Description of image"></img>
          </div>
        </section>
        {/* section 3 */}
        <section className='sm:flex mt-60 relative'>
          <h1 className='absolute -top-16 left-40 w-[100%] text-stroke2 sm:text-9xl text-transparent font-monument'>COIFFURE & COLO</h1>
          <div className='sm:flex flex-col sm:w-1/2 mt-52 items-center'>
          <h1 className="font-monument leading-10 tracking-widest sm:text-6xl"> LA <span className="text-orangeColor">BARBE</span> </h1>
            <p className='font-lovelace sm:w-1/2 sm:text-left mt-10 sm:text-base font-normal leading-6 text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non.</p>
            <a className='mt-24 border border-black rounded p-5 text-[#000000] sm:text-xs cursor-pointer leading-5 tracking-wider hover:text-white hover:border-black  hover:bg-black hover:bg-opacity-80 transition-all duration-200 ease-in-out'>EN SAVOIR PLUS</a>
          </div>
          <div className='sm:flex sm:w-1/2 justify-start right-10 relative items-center'>
            <img src={image3_tool} className="w-[220px] h-[381px] rotate-12 relative left-32 z-10 top-20" alt="Description of image" />
            <img src={image3} className="w-[540px] h-[665px] -rotate-2" alt="Description of image"></img>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
