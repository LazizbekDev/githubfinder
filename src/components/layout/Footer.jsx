import { FaGrav, FaRegCopyright } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="footer p-5 bg-gray-700 text-primary-content footer-center">
      <FaGrav className='text-6xl' />

      <p className='md:flex xs:block'>Copyright <FaRegCopyright /> {new Date().getFullYear()} All rights reserved</p>
    </footer>
  )
}

export default Footer