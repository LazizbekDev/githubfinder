import { useContext } from 'react'
import GithubContext from '../../context/GithubContext'
import UserItem from './UserItem'

const UserResults = () => {
    const { users, loading } = useContext(GithubContext)

    return (
        <div>
            {loading ? (
                <div className='w-100 mt-20'>
                    <img
                        src='https://johnjorgenson.com/wp-content/uploads/2018/05/colorful-loader-gif-transparent.gif'
                        alt='loading...'
                        width={130}
                        className='text-center mx-auto'
                    />
                </div>
            ) : (
                <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:gird-cols-3 md:grid-cols-2'>
                    {users?.map((user) => (
                        <UserItem key={user.id} user={user} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default UserResults