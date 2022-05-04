import React from 'react'
import { FaInstagram, FaTelegram, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

const About = () => {
  return (
    <div className='hero'>
      <h1 className='hero-text font-semibold text-4xl info'>My Socials</h1>
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
        <li className='about__icon--item'>
          <a href="https://www.linkedin.com/in/lazizbek-tojiboyev-24185420b" target={'_blank'} rel='noreferrer'>
            <span />
            <span />
            <span />
            <span />
            <FaLinkedinIn className='text-4xl' />
          </a>
        </li>
        <li className='about__icon--item'>
          <a href="https://laziz-dev.netlify.app" target={'_blank'} rel='noreferrer'>
            <span />
            <span />
            <span />
            <span />
            <FiArrowUpRight className='text-4xl' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default About