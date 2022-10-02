import React from 'react';
import newsLetterImage from '../images/WhatsApp Image 2022-07-21 at 6.04 7.png'

function NewsLetter() {
  return (
    <div className='bg-red-100 h-screen flex items-center justify-center' id='newsLetter'>
           <div className=' h-3/4 w-2/4 relative dvd'>
              <div className='bg-red-400  w-3/5 h-full wrapper'>
                <img src={newsLetterImage} className=' w-full h-full imgg' />
              </div>
           </div>

          <form className='flex flex-col items-center justify-between h-52 formy'>
            <h1 className='text-4xl' id='newsLetterHeading'>Our News Letter </h1>
            <input type="email" placeholder='enter your email' className='mt-4 px-14 py-3 bg-blue-50' id='newsLetterInput'/>
            <button className='bg-black text-stone-50 px-5 py-3'id='newsLetterButton'>Subscribe now</button>
          </form>
    </div>
  )
}

export default NewsLetter;