import Img1 from './images/log1.svg'
import Img2 from './images/log2.svg'
import Img3 from './images/log3.svg'
import Img4 from './images/log4.svg'
import Img5 from './images/log5.svg'
import Img6 from './images/log6.svg'
import Img7 from './images/log7.svg'

import React from 'react'

export const Footer = () => {
  return (
    <footer className='px-5 xl:px-32 py-9'>
      <div className='text-white space-y-3 xl:space-y-0 grid xl:flex justify-center xl:justify-between'>
        <div className='flex space-x-5 m-auto xl:m-0'>
          <img src={Img1}></img>
          <img src={Img2}></img>
          <img src={Img3}></img>
          <img src={Img4}></img>
          <img src={Img5}></img>
          <img src={Img6}></img>
          <img src={Img7}></img>
        </div>
        <p>© Start, 2022. All rights reserved.</p>
      </div>
    </footer>
  )
}
