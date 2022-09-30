import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-white flex justify-between py-4 px-8'>
        <div className='flex flex-col w-12 items-center justify-between mt-4 h-28'>
           <i className="fa-brands fa-instagram"></i>
           <i className="fa-brands fa-facebook-f"></i>
           <i className="fa-brands fa-twitter"></i>
        </div>
        <div className='w-3/4 flex justify-around px-8 mr-5'>
          <div className='flex flex-col h-24 justify-between mt-2'>
            <h1 className='text-xl font-medium'>Features</h1>
            <h3 className='text-md font-thin'>Pricing</h3>
            <h3 className='text-md font-thin'>Sign Up</h3>
          </div>
          <div className='flex flex-col h-28 justify-between mt-2'>
            <h1 className='text-xl font-medium'>Term of use</h1>
            <h3 className='text-md font-thin'>Privacy policy</h3>
            <h3 className='text-md font-thin'>Legal notice</h3>
          </div>
          <div className='flex flex-col h-28 justify-between mt-2'>
            <h1 className='text-xl font-medium'>Feedback</h1>
            <h3 className='text-md font-thin'>Privacy policy</h3>
            <h3 className='text-md font-thin'>Legal notice</h3>
          </div>
        </div> 
    </div>
  )
}

export default Footer;