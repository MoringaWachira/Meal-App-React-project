import React from 'react'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
function Contact() {
  return (
    <div className='icons'>
       <h1>Contact Us</h1>
       <div className='social-icons'>
          <AiFillTwitterCircle className='social-icon'/>
          <AiFillInstagram className='social-icon'/>
          <FaTiktok className='social-icon'/>
       </div>
       <div>
            <p><span><SiGmail/></span> Email:chakula@gmail.com</p>
            <p><span><BsFillTelephoneFill /></span> Tel no:  +254 700000000</p>
            <p><span><ImLocation /></span> Location Nairobi-Kenya</p>
       </div>
    </div>
  )
}

export default Contact