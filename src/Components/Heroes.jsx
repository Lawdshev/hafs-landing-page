import React from 'react';
import Logo from '../images/Ellipse 1.png';
import Ellipse from '../images/Ellipse 3.png';
import Star from '../images/Star 1.png';


function Heroes() {
    
  return (
    <div className="h-screen bg-red-200">
        <div className="container flex py-4">
            <nav className="container flex flex-col md:flex-row ">
                <ul className='flex self-center mx-auto w-52 justify-between'>
                    <li className='hover:bg-black hover:text-white px-2 py-1 duration-500'>Home</li>
                    <li className='hover:bg-black hover:text-white px-2 py-1 duration-500'>Shop</li>
                    <li className='hover:bg-black hover:text-white px-1 py-1 duration-500'>About Us</li>
                </ul>
            </nav>
            <span className="flex justify-between self-center w-32 text-xl mr-4">
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-cart-shopping"></i>
            </span>
        </div>  
        <div className=" w-screen h-3/4 flex px-8 heroe1">
            <span className="writeup self-center w-2/4 h-2/4 flex flex-col justify-between">
                <span>
                    <h1 className='text-7xl font-bold wrt'>LUXE SKIN</h1>
                    <h1 className='text-6xl font-bold wrt'>CONCEALER</h1>
                </span>
                <span className="btns">
                    <button className="hover:bg-white hover:text-black bg-black text-white px-7 py-4 border-solid border-2 border-black text-2xl duration-500 btn">Click to Buy Now</button>
                    <a href="#products">
                     <button className="bg-white border-black border-solid border-2 px-14 py-4 ml-12 text-2xl hover:bg-black hover:text-white animate-bounce duration-500 btn exp">Explore</button>
                    </a>
                </span>
            </span>
            
            <span className="vectors self-center w-2/4 h-2/4 flex ml-14">
              <img src={Ellipse} alt="" className='w-96 place-self-center  self-center ellipse1' />
              <img src={Ellipse} alt="" className='w-80  self-center absolute right-13 ml-7 ellipse2' />
              <img src={Logo} alt=""  className='w-96 absolute top-11 right-15 stick'/>
              <img src={Star} alt="" className='w-40 absolute mt-44 star' />
              <p className='text-white absolute text-2xl mt-52 ml-14 perc'>40% <br/> OFF</p>
            </span>
        </div>  
    </div>)
}

export default Heroes;