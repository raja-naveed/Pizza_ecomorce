import React , {Link}from 'react'

const Navigation = () => {
  return (
    <div className='container flex flex-row items-center justify-between m-6'>
        <div className="logo ">
            <h2 className='text text-5xl font-bold text-orange-500'>FOODIE</h2>
        </div>
        <div className="nav font-bold text-lg">
            <ul className='flex flex-row items-center mx-6 hover:text-orange-300'>
                <li className='mx-6'><a href="#">Home</a></li>
                <li className='mx-6'><a href="#">About</a></li>
                <li className='mx-6'><a href="#">Testonomial</a></li>
                <li className='mx-6'><a href="#">Contact</a></li>
                <li className='mx-6 text-white'><button className='bg-orange-400 py-3 px-5 rounded-full '>Booking Now </button></li>
            </ul>
            {/* <ul>
                <li><Link>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Testonomial</Link></li>
                <li><Link>Work</Link></li>
                <li><Link>Contact</Link></li>
            </ul> */}
        </div>
    </div>
  )
}

export default Navigation;
