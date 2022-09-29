import React from 'react';
import Logo from '../images/Ellipse 1.png';
import Ellipse from '../images/Ellipse 3.png';
import Star from '../images/Star 1.png';

function Heroes() {
  return (
    <div className="h-screen bg-red-300">
        <div className="container flex py-4">
            <nav className="container flex flex-row ">
                <ul className='flex self-center mx-auto w-52 justify-between'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About Us</li>
                </ul>
            </nav>
            <span className="flex justify-between self-center w-32 text-xl mr-4">
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-cart-shopping"></i>
            </span>
        </div>  
        <div className=" w-screen h-3/4 flex px-8">
            <span className="writeup self-center w-2/4 h-2/4 flex flex-col justify-between">
                <text>
                    <h1 className='text-7xl font-bold'>LUXE SKIN</h1>
                    <h1 className='text-6xl font-bold'>CONCEALER</h1>
                </text>
                <span className="btns">
                    <button className="bg-black text-white px-7 py-4 border-solid border-2 border-black text-2xl">Click to Buy Now</button>
                    <button className="bg-white border-black border-solid border-2 px-14 py-4 ml-12 text-2xl">Explore</button>
                </span>
            </span>
            
            <span className="vectors self-center w-2/4 h-2/4 flex ml-14">
              <img src={Ellipse} alt="" className='w-96 place-self-center  self-center' />
              <img src={Ellipse} alt="" className='w-80  self-center absolute right-13 ml-7 ' />
              <img src={Logo} alt=""  className='w-96 absolute top-11 right-15'/>
              <img src={Star} alt="" className='w-40 absolute mt-44 ' />
            </span>
        </div>  
    </div>)
}

export default Heroes;