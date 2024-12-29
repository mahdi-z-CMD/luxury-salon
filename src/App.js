import './App.css';
import Logo from './assets/logo2_nobg.png';
import React, { useState , useEffect } from "react";

// images
import image1 from './assets/images/image1.jpg'
import image2 from './assets/images/image2.jpg'
import image3 from './assets/images/image3.jpg'
import bg_artists from './assets/images/bg-artists.jpg'
import bg_artists2 from './assets/images/bg-artists2.png'
import image1_tool from './assets/images/image1_tool.png'
import image2_tool from './assets/images/image2_tool.png'
import image3_tool from './assets/images/image3_tool.png'
import image1_pd from './assets/images/produck1.png'
import image2_pd from './assets/images/produck2.png'
import image3_pd from './assets/images/produck3.png'
import Produckdata from './assets/producks.json'
import artisimg1 from './assets/images/artist1(1).jpg'
import artisimg2 from './assets/images/artist1(2).jpg'
import artisimg3 from './assets/images/artist1(3).jpg'
import artisimg4 from './assets/images/artist1(4).jpg'
import artisimg5 from './assets/images/artist1(5).jpg'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };
  const BoxProduct = (promp) => {
    
    return(
      <div className='flex flex-col basis-96 sm:basis-1/3 transition-transform duration-500 transform hover:scale-105 opacity-0 blur-100 animate-fade-in'>
        <div className='sm:h-[600px] h-[300px] bg-white flex justify-center items-center'>
          <img src={promp.src} className='2xl:w-80 2xl:h-1/2 lg:w-60' alt="Description" />
        </div>
        <div className='flex justify-between mt-5 font-medium text-xs sm:text-base sm:tracking-normal tracking-widest'>
          <h1>{promp.name}</h1>
          <span className='text-orange-500'>{promp.price} €</span>
        </div>
      </div>
    )
  }

  const Boxartists = (prop) =>{

    return(
      <div className='flex w-full justify-between -mt-10 p-6 pt-10 gap-3'>
        <div className='flex flex-col w-1/2'>
          <img src={prop.src} className='w-[100%] h-[265px] rounded-md'></img>
          <h1 className='w-4/4 text-base mt-3 font-monument'><span className='text-orangeColor'>{prop.span}</span>{prop.name}</h1>
        </div>
        <div className='flex flex-col relative top-10 w-1/2'>
          <img src={prop.src2} className='w-[100%] h-[265px] rounded-md'></img>
          <h1 className='w-4/4 text-base mt-3 font-monument'><span className='text-orangeColor'>{prop.span2}</span>{prop.name2}</h1>
        </div>
      </div>
    )
  }
  const [startIndex, setStartIndex] = useState(0); // Track the starting index
  const itemsToShow = width >= 620 ? 3 : 2; // Number of items to display at a time

  const handleNext = () => {
    if (startIndex + itemsToShow < Produckdata.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <div className="App overflow-x-hidden overflow-y-hidden bg-[#F5F5F0]">
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
      <div className='h-20 relative w-[140%] text-6xl sm:w-[110%] sm:h-[150px] bg-orangeColor -rotate-2 bottom-10 right-5 sm:relative flex justify-center items-center'>
        <h1 className='text-transparent text-stroke2 tracking-widest xl:text-8xl 2xl:text-9xl lg:text-7xl md:text-6xl sm:text-5xl'>
          RASAGE & TONTE
        </h1>
      </div>
      <main className='bg-[#F5F5F0]'>
        {/* section 1 */}
        <section className='sm:flex bottom-20 relative flex flex-col-reverse sm:flex-row'>
          <div className='sm:flex flex-col sm:w-1/2 sm:mt-52 mt-20 items-center'>
          <h1 className="font-monument leading-10 tracking-widest sm:text-6xl text-3xl"> LA <span className="text-orangeColor">BARBE</span> </h1>
            <p className='font-lovelace md:w-[80%] lg:w-1/2 sm:w-[80%] sm:text-left mt-10 sm:text-base font-normal leading-6 text-[#000000] text-base w-[80%] relative ml-auto mr-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non.</p>
            <a className='sm:mt-14 relative text-xs top-16 border border-black rounded p-5 text-[#000000] sm:text-xs cursor-pointer leading-5 tracking-wider hover:text-white hover:border-black  hover:bg-black hover:bg-opacity-80 transition-all duration-200 ease-in-out'>EN SAVOIR PLUS</a>
          </div>
          <div className='sm:flex sm:w-1/2 w-100 justify-start sm:right-48 right-2 top-5 relative items-center flex'>
            <img src={image2_tool} className="w-[244px] h-[251px] sm:w-[303px] sm:h-[333px] rotate-12 relative left-24 z-10 top-20" alt="Description of image" />
            <img src={image1} className="w-[540px] h-[465px] sm:w-[540px] sm:h-[665px] -rotate-2" alt="Description of image"></img>
          </div>
        </section>
        {/* section 2 */}
        <section className='sm:flex sm:flex-row-reverse mt-40 flex flex-col-reverse'>
          <div className='sm:flex flex-col sm:w-1/2 sm:mt-32 mt-20 items-center'>
          <h1 className="font-monument leading-10 tracking-widest sm:text-6xl text-3xl"> LA <span className="text-orangeColor">BARBE</span> </h1>
            <p className='font-lovelace md:w-[80%] lg:w-1/2 sm:w-[80%] sm:text-left mt-10 sm:text-base font-normal leading-6 text-[#000000] text-base w-[80%] relative ml-auto mr-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non.</p>
            <a className='sm:mt-14 relative text-xs top-16 border border-black rounded p-5 text-[#000000] sm:text-xs cursor-pointer leading-5 tracking-wider hover:text-white hover:border-black  hover:bg-black hover:bg-opacity-80 transition-all duration-200 ease-in-out'>EN SAVOIR PLUS</a>
          </div>
          <div className='sm:flex sm:w-1/2 justify-start sm: right-32 relative items-center flex-row-reverse flex '>
            <h1 className='absolute sm:-top-16 -top-11 sm:left-36 left-36 text-stroke2 sm:text-9xl text-transparent font-monument text-7xl'>SOINS</h1>
            <img src={image1_tool} className="w-[144px] h-[231px] -rotate-12 relative sm:right-124 right-11 z-10 top-20" alt="Description of image" />
            <img src={image2} className="w-[350px] h-[465px] sm:w-[540px] sm:h-[665px] rotate-2" alt="Description of image"></img>
          </div>
        </section>
        {/* section 3 */}
        <section className='sm:flex sm:flex-row sm:mt-60 mt-52 relative flex flex-col-reverse'>
          <h1 className='absolute sm:-top-16 -top-6 sm:w-[100%] w-[150%] text-stroke2 sm:text-9xl text-transparent font-monument text-7xl '>COIFFURE & COLO</h1>
          <div className='sm:flex flex-col sm:w-1/2 sm:mt-52 mt-20 items-center'>
          <h1 className="font-monument leading-10 tracking-widest sm:text-6xl text-3xl"> LA <span className="text-orangeColor">BARBE</span> </h1>
            <p className='font-lovelace md:w-[80%] lg:w-1/2 sm:w-[80%] sm:text-left mt-10 sm:text-base font-normal leading-6 text-[#000000] text-base w-[80%] relative ml-auto mr-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non.</p>
            <a className='sm:mt-14 relative text-xs top-16 border border-black rounded p-5 text-[#000000] sm:text-xs cursor-pointer leading-5 tracking-wider hover:text-white hover:border-black  hover:bg-black hover:bg-opacity-80 transition-all duration-200 ease-in-out'>EN SAVOIR PLUS</a>
          </div>
          <div className='sm:flex sm:w-1/2 w-100 justify-start sm:right-48 left-16 top-5 relative items-center flex'>
            <img src={image3_tool} className="w-[144px] h-[251px] sm:w-[200px] sm:h-[405px] rotate-12 relative left-20 z-10 top-20" alt="Description of image" />
            <img src={image3} className="w-[400px] h-[465px] sm:w-[540px] sm:h-[665px] -rotate-2" alt="Description of image"></img>
          </div>
        </section>
        {/* Product section */}
        <div className='relative mt-52 pt-8 flex gap-4 sm:gap-7 overflow-hidden flex-nowrap justify-center w-full pr-10 pl-10 sm:pr-20 sm:pl-20 transition-transform duration-500 pb-10'
        >
          <div className='absolute text-3xl w-full flex justify-between h-2/3 p-2 sm:p-5 mt-10'>
            <button onClick={handlePrev}>{'<'}</button>
            <button onClick={handleNext}>{'>'}</button>
          </div>
          <h1 className='text-2xl sm:text-3xl font-monument font-light leading-10 tracking-widest absolute sm:top-0  sm:left-40 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl z-10'>NOS PRODUCT</h1>
          {Produckdata.slice(startIndex, startIndex + itemsToShow).map((product, index) => (
          <BoxProduct key={index} name={product.name} price={product.price} src={product.src} />
        ))}
        </div>
        <div className='bg-orangeColor flex sm:flex-row flex-col sm:justify-around mt-28 p-16 lg:p-32 sm:p-20'>
            <div className='flex flex-col gap-2 sm:gap-5 justify-start text-left sm:mr-20'>
              <h1 className='text-3xl sm:text-5xl text-[#121212] font-lovelace font-extralight tracking-wider lg:text-3xl xl:text-5xl md:text-2xl'>Nous avons pour ambition de vous faire sortir du salon avec une nouvelle image de <span className='text-white underline'>vous</span>.</h1>
              <p className='text-base xl:text-base lg:text-xs sm:text-xs text-[#121212] leading-7 font-monument tracking-widest mt-10'>Richard Davidson,</p>
              <p className='text-base xl:text-base lg:text-xs sm:text-xs text-white opacity-70 font-monument tracking-widest'>Responsable du salon de Montpellier</p>
            </div>
            <div className='mt-10 sm:mt-0'>
              <p className='text-[#222124] xl:text-2xl md:text-xl lg:text-xl font-lovelace font-normal text-left xl:left-40 md:left-20 leading-7 tracking-wider sm:mt-0 mt-14 w-2/2 sm:leading-10 relative xl:w-1/2 md:w-2/3'>Une barbe nette, une moustache ciselée, une coupe personnalisée, des soins ciblés, le grooming, c’est l’art de prendre soin de vous. Chez nous, vous arrivez avec ou sans idée précise de votre futur look… </p>
            </div>
        </div>
        <div className='flex flex-col gap-3 justify-start items-center mt-20'>
          <h1 className='font-monument sm:text-6xl tracking-widest text-3xl'>NOS ARTISTES</h1>
          <p className='font-lovelace font-extralight text-base lead sm:text-base text-center w-3/4 xl:w-1/3 md:w-2/3 mt-10 sm:mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus</p>
          <a className='z-10 mb-24 relative text-xs top-10 border border-black rounded p-4 text-[#000000] sm:text-xs cursor-pointer leading-5 tracking-wider hover:text-white hover:border-black  hover:bg-black hover:bg-opacity-80 transition-all duration-200 ease-in-out'>DÉCOUVRIR</a>
          {
            width >= 620 ? <img src={bg_artists} className='sm:w-[940px] sm:h-[970px] sm:relative sm:bottom-7 border-8 border-[#F5F5F0]'></img> : <>
              <Boxartists
                src={artisimg1}
                src2={artisimg2}
                span={'Saga'}
                span2={'Sudanka'}
                name={' Lindén, Hair Designer'}
                name2={' Bakalowi, Hair Designer'}
              ></Boxartists>
              <Boxartists
                src={artisimg3}
                src2={artisimg4}
                span={'Saga'}
                span2={'Frank'}
                name={'  Boehm, Responsable'}
                name2={' Bakalowi, Hair Designer'}
              ></Boxartists>
            </>
          }
        </div>
        <div className='h-[500px] flex flex-col justify-end'>
          <h1>a</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
