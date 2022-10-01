import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-white flex justify-between py-4 px-8' id='footer'>
        <div className='flex flex-col w-12 items-center justify-between mt-4 h-28' id='socials'>
           <i className="fa-brands fa-instagram"></i>
           <i className="fa-brands fa-facebook-f"></i>
           <i className="fa-brands fa-twitter"></i>
        </div>
        <div className='w-3/4 flex justify-around px-8 mr-5' id='footer-words'>
          <div className='flex flex-col h-24 justify-between mt-2' id='footer-word'>
            <h1 className='text-xl font-medium' id='heading'>Features</h1>
            <h3 className='text-md font-thin' id='heading-two'>Pricing</h3>
            <h3 className='text-md font-thin' id='heading-two'>Sign Up</h3>
          </div>
          <div className='flex flex-col h-28 justify-between mt-2'id='footer-word'>
            <h1 className='text-xl font-medium' id='heading'>Term of use</h1>
            <h3 className='text-md font-thin' id='heading-two'>Privacy policy</h3>
            <h3 className='text-md font-thin' id='heading-two'>Legal notice</h3>
          </div>
          <div className='flex flex-col h-28 justify-between mt-2'id='footer-word'>
            <h1 className='text-xl font-medium' id='heading'>Feedback</h1>
            <h3 className='text-md font-thin' id='heading-two'>Privacy policy</h3>
            <h3 className='text-md font-thin'id='heading-two'>Legal notice</h3>
          </div>
        </div> 
    </div>
  )
}

export default Footer;