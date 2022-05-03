import React from 'react'
import { FaInstagram, FaTelegram } from 'react-icons/fa'

const About = () => {
  return (
    <div className='hero'>
      <ul className='about__icon'>
        <li className='about__icon--item'>
          <a href="https://instagram.com/mern.me" target={'_blank'} rel='noreferrer'>
            <span />
            <span />
            <span />
            <span />
            <FaInstagram className='text-4xl' />
          </a>
        </li>
        <li className='about__icon--item'>
          <a href="https://t.me/mernme" target={'_blank'} rel='noreferrer'>
            <span />
            <span />
            <span />
            <span />
            <FaTelegram className='text-4xl' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default About