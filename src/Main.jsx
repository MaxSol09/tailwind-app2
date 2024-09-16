import React from 'react'
import google from './images/google.svg'
import microsoft from './images/microsoft.svg'
import airbnb from './images/airbnb.svg'
import facebook from './images/facebook.svg'
import spotify from './images/spotify.svg'
import people2 from './images/People2.svg'
import people3 from './images/People3.svg'
import item1 from './images/item1.svg'
import item2 from './images/item2.svg'
import item3 from './images/item3.svg'
import item4 from './images/item4.svg'



export const Main = () => {
  return (
    <main className='py-14'>
        <section>
            <div className=' text-center space-y-4'>
                <p className='font-bold tracking-big text-green-300'>PARTNERS</p>
                <h1 className='xl:text-hug font-semibold text-2xl'>Lorem Ipsum Dolor</h1>
                <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.</p>
                <div className="grid xl:flex space-y-10 xl:space-y-0 xl:space-x-16 justify-center pt-8">
                    <img src={google} alt="fgddf" />
                    <img src={microsoft} alt="ytyty" />
                    <img src={airbnb} alt="grgr" />
                    <img src={facebook} alt="kik" />
                    <img src={spotify} alt="vbfb" />
                </div>
                <div className='pt-5'>
                    <button className='text-white px-14 py-3 bg-black rounded text-lg'>Learn more</button>
                </div>
                <div className='grid space-y-5 xl:space-y-0 xl:flex xl:space-x-32 text-left justify-center pt-20'>
                    <img className='w-1/1 xl:w-1/2' src={people2}></img>
                    <div className='space-y-5 xl:space-y-10 m-auto w-1/1 xl:w-1/2'>
                    <h1 className='text-hug text-black'>Lorem ipsum dolor sit amet consectetur </h1>
                    <p className=' text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing<br></br> elit. Suscipit nemo hic quos, ab, dolor aperiam nobis<br></br> cum est eos error ipsum, voluptate culpa nesciunt<br></br> delectus iste?</p>
                    <button className='text-white px-14 py-3 bg-black rounded text-lg'>Learn more</button>
                    </div>
                </div>
                <div className='grid space-y-5 xl:space-y-0 xl:flex xl:space-x-32 text-left justify-center pt-20'>
                    <img className='w-1/1 xl:w-1/2 xl:hidden flex' src={people3}></img>
                    <div className='space-y-5 xl:space-y-10 m-auto w-1/1 xl:w-1/2'>
                    <h1 className='text-hug text-black'>Lorem ipsum dolor sit<br></br> amet consectetur </h1>
                    <p className=' text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing<br></br> elit. Suscipit nemo hic quos, ab, dolor aperiam nobis<br></br> cum est eos error ipsum, voluptate culpa nesciunt<br></br> delectus iste?</p>
                    <button className='text-white px-14 py-3 bg-black rounded text-lg'>Learn more</button>
                    </div>
                    <img className='hidden xl:flex w-1/1 xl:w-1/2' src={people3}></img>
                </div>
                <p className='font-bold tracking-big text-green-300 pt-24'>TEAM</p>
                <h1 className='text-hug font-semibold'>Our Talents</h1>
                <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur<br></br>
                adipisicing elit.</p>
                <div className='grid xl:flex xl:space-x-6 xl:space-y-0 space-y-8 justify-center py-3'>
                    <div className=' xl:p-4 grid justify-center p-10 rounded-md space-y-2 shadow-shadow'>
                        <img src={item1}></img>
                        <h1 className='text-2xl text-left'>Peg Legge</h1>
                        <p className='text-left text-gray-500'>CEO</p>
                    </div>
                    <div className='xl:p-4 grid justify-center p-10 rounded-md space-y-2 shadow-shadow'>
                        <img src={item2}></img>
                        <h1 className='text-2xl text-left'>Richard Guerra</h1>
                        <p className='text-left text-gray-500'>CEO</p>
                    </div>
                    <div className='xl:p-4 grid justify-center p-10 rounded-md space-y-2 shadow-shadow'>
                        <img className='m-auto' src={item3}></img>
                        <h1 className='text-2xl text-left'>Alexandra Stolz</h1>
                        <p className='text-left text-gray-500'>DESINGER</p>
                    </div>
                    <div className='xl:p-4 grid justify-center p-10 rounded-md space-y-2 shadow-shadow'>
                        <img src={item4}></img>
                        <h1 className='text-2xl text-left'>Janet Bray</h1>
                        <p className='text-left text-gray-500'>DEVELOPER</p>
                    </div>
                </div>
                <button className='text-white px-14 py-3 bg-black rounded text-lg'>View Team</button>
            </div>
        </section>
    </main>
  )
}
