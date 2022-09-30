import React from 'react';
import Products from "../Products/Products"
//import pic from '../images/WhatsApp Image 2022-07-21 at 6.04 4 (1).png'

const Card  = ({image,name,price}) => {
    return ( 
        <div className=' container w-60 h-96 ml-10 text-center justify-between'>
            <img src={image} alt="make up" className='mt-10' />
            <p className='mt-3'>{name}</p>
            <p>{price}</p>
            <button className='bg-red-200 px-4 py-1 mt-3 shadow-lg'>Buy Now</button>
        </div>
     );
}
 
 

function heroes2() {
  return (
    <div className='h-screen bg-red-100'>
      <div className="h-1/4 bg-red-200 text-center">
        <h1 className='text-5xl'>POPULAR PRODUCTS</h1>
        <p className='text-2xl mt-2 italic font-light'>MEET OUR BEST SELLERS</p>
      </div>
      <div className= "self-center h-3/5 px-14 flex justify-between">
        {
            Products.map((product)=>{
                return <Card key={product.price} {...product}/>
            })
        }
      </div>
    </div>
  )
}

export default heroes2;
