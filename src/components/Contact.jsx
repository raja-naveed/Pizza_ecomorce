import React from 'react'
const Contact = () => {
  return (
    <div className='container'>
        <div className="heading text-center font-bold text-6xl py-8">
            <h1>Have Question In Your Mind?</h1>
            <h1 className='py-7'>Let Us Help You</h1>


            <input className='text-slate-700 rounded-full' type="text" placeholder='Enter Your Emails' />
            <button className='rounded-full text-lg text-white bg-orange-600'>Submit Now</button>
        </div>
    </div>
  )
}

export default Contact
