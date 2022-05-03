import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = ({ title = 'Github' }) => {
    return (
        <div className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
            <div className="container mx-auto">
                <div className="flex-none px-2 mx-2">
                    <FaGithub className='pr-2 text-3xl inline' />
                    <Link to='/'
                        className='text-lg align-middle font-bold cursor-pointer' replace>
                        {title}
                    </Link>
                </div>

                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <Link to='/' replace className='btn btn-ghost btn-sm rounded-btn'>Home</Link>
                        <Link to='/about' replace className='btn btn-ghost btn-sm rounded-btn'>About</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar