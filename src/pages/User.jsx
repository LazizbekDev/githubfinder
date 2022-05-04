import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import GithubContext from '../context/GithubContext'
import { FaGithub, FaUsers, FaUserFriends, FaStore } from 'react-icons/fa'
import { RiGitRepositoryLine } from 'react-icons/ri'
import Repos from '../components/users/Repos'

const User = () => {
    const { login } = useParams();

    const { user, getUser, loading, getUserRepos, repos } = useContext(GithubContext)

    useEffect(() => {
        getUser(login)
        getUserRepos(login)
        // eslint-disable-next-line
    }, [])

    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user

    return (
        <>{loading ? (
            <div className='w-100 mt-20'>
                <img
                    src='https://johnjorgenson.com/wp-content/uploads/2018/05/colorful-loader-gif-transparent.gif'
                    alt='loading...'
                    width={130}
                    className='text-center mx-auto'
                />
            </div>
        ) : (
            <div className='w-full mx-auto lg:width-10/12'>
                <div className="mb-4">
                    <Link to={'/'} replace className='btn btn-ghost'>GO back</Link>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                    <div className="custom-card-image mb-6 md:mb-0">
                        <div className="rounded-lg shadow-xl card image-full">
                            <figure>
                                <img src={avatar_url} alt={user.login} />
                            </figure>

                            <div className="card-body justify-end">
                                <h2 className="card-title">{name}</h2>
                                <p>{user.login}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="mb-6">
                            <h1 className="text-3xl card-title">
                                {name}

                                <div className="ml-2 mr-1 badge badge-success">
                                    {type}
                                </div>

                                {hireable && (
                                    <div className="badge badge-info mx-1">Hireable</div>
                                )}
                            </h1>

                            <p>{bio}</p>
                            <div className="mt-4 card-actions">
                                <a href={html_url} target="_blank" rel='noreferrer' className='btn btn-outline'>
                                    VISIT GITHUB  <FaGithub size={'1.5rem'} className='ml-4' />
                                </a>
                            </div>
                        </div>
                        <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                            {location && (
                                <div className="stat">
                                    <div className="stat-title text-md">Location</div>
                                    <div className="text-lg stat-value">{location}</div>
                                </div>
                            )}
                            {blog && (
                                <div className="stat">
                                    <div className="stat-title text-md">Website</div>
                                    <div className="text-lg stat-value">
                                        <a
                                            href={blog.startsWith('http') ? blog : `https://${blog}`}
                                            rel='noreferrer'
                                            target={'_blank'}>
                                                {blog}
                                        </a>
                                    </div>
                                </div>
                            )}
                            {twitter_username && (
                                <div className="stat">
                                    <div className="stat-title text-md">Twitter</div>
                                    <div className="text-lg stat-value">
                                        <a
                                            href={`https://twitter.com/${twitter_username}`}
                                            rel='noreferrer'
                                            target={'_blank'}>
                                                {twitter_username}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-lg py-5 mb-6 shadow-md bg-base-100 stats">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className='text-3xl md:text-5xl' />
                        </div>
                        <div className="stat-title pr-5">Followers</div>
                        <div className="stat-value pr-5 text-3xl md:text-5">{followers}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUserFriends className='text-3xl md:text-5xl' />
                        </div>
                        <div className="stat-title pr-5">Following</div>
                        <div className="stat-value pr-5 text-3xl md:text-5">{following}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <RiGitRepositoryLine className='text-3xl md:text-5xl' />
                        </div>
                        <div className="stat-title pr-5">Public Repos</div>
                        <div className="stat-value pr-5 text-3xl md:text-5">{public_repos}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaStore className='text-3xl md:text-5xl' />
                        </div>
                        <div className="stat-title pr-5">Public Gists</div>
                        <div className="stat-value pr-5 text-3xl md:text-5">{public_gists}</div>
                    </div>
                </div>
                <Repos repos={repos} />
            </div>
        )}</>
    )
}

export default User