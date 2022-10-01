import React from 'react';
import newsLetterImage from '../images/WhatsApp Image 2022-07-21 at 6.04 7.png'

function NewsLetter() {
  return (
    <div className='bg-red-100 h-screen flex justify-between p-20' id='newsLetter'>
        <div className='w-4/12' id='newsLetterImage'>
           <div className='relative h-full w-full'>
              <div className='bg-red-400 relative w-full h-full'></div>
              <img src={newsLetterImage} className='absolute w-full h-full -top-6 -right-6' />
              <div className='absolute -top-10 -right-8 h-16 w-36 border-t-black border-r-black border-solid border-2 border-l-0 border-b-0'></div>
           </div>
        </div>
        <div className='w-1/2 flex flex-col self-center items-center justify-around h-44 mr-12'id='newsLetterForm'>
          <h1 className='text-4xl'id='newsLetterHeading'>Our News Letter</h1>
          <form className='flex flex-col items-center justify-between h-1/2'>
            <input type="email" placeholder='enter your email' className='w-96 h-8 p-4 bg-blue-50' id='newsLetterInput'/>
            <button className='bg-black text-stone-50 h-9 w-40'id='newsLetterButton'>Subscribe now</button>
          </form>
        </div>
    </div>
  )
}

export default NewsLetter;