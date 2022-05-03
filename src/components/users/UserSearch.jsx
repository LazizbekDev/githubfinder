import { useState, useContext } from 'react'
import GithubContext from '../../context/GithubContext';

const UserSearch = () => {
    const { users, fetchSearchUser, clearUsers } = useContext(GithubContext)
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setText('Write something')
        } else {
            fetchSearchUser(text)
        }
    }
    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mb-8 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="control-form">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder='Username...'
                                onChange={handleChange}
                                value={text}
                                className="w-full pr-40 bg-gray-200 input input-lg text-black" />
                            <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Search</button>
                        </div>
                    </div>
                </form>
            </div>

            {users?.length > 0 && (
                <div>
                    <button
                        className="btn btn-ghost btn-lg"
                        onClick={clearUsers}>
                        clear
                    </button>
                </div>
            )}
        </div>
    )
}

export default UserSearch