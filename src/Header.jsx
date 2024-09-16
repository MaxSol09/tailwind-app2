import React from 'react'
import Logo from './images/logo.svg'
import people from './images/People.svg'
import Menu from './images/Menu.png'

export const Header = () => {
  return (
    <header className='px-5 xl:px-32 py-9 pb-20'>
        <nav className='flex justify-between'> 
          <img src={Logo} alt='лого'></img>
          <div className='text-xl hidden xl:flex text-white gap-norm'>
            <p className='hover:text-black'>Home</p>
            <p className='hover:text-black'>Portfolio</p>
            <p className='hover:text-black'>Services</p>
            <p className='hover:text-black'>Contact</p>
          </div>
          <img className='flex xl:hidden' src={Menu}></img>
        </nav>
        <div className='grid space-y-6 xl:flex text-left justify-center pt-20 gap-x-32'>
        <img className='w-6/6 flex xl:hidden items-center' src={people}></img>
          <div className='text-white space-y-6 xl:space-y-10 m-auto ml-0'>
              <p className='font-bold tracking-big'>WELCOME</p>
              <h1 className='text-3xl xl:text-hug'>Lorem ipsum dolor sit<br></br> amet consectetur </h1>
            <p className='text-base text-gray-100 max-w-96'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
            <button className='text-black px-14 py-3 bg-white rounded text-lg'>Explore</button>
          </div>
          <img className='w-3/5 hidden xl:flex' src={people}></img>
        </div>
    </header>
  )
}
