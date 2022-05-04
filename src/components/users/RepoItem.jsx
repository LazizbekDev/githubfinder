import { FaLink, FaStar,FaInfo,FaEye, FaUtensils } from 'react-icons/fa'
const RepoItem = ({ repo }) => {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_coutn
    } = repo
    return (
        <div className="mb-2 rounded-md card bg-neutral hover:bg-neutral-focus">
            <div className="card-body">
                <h3 className="cart-title mb-2 font-semibold">
                    <a href={html_url}>
                        <FaLink className="inline mr-1"/> {name}
                    </a>
                </h3>
                <p className='mb-3'>{description}</p>
                <div>
                    <div className="mr-2 badge badge-info badge-lg"><FaEye /> {watchers_count}</div>
                    <div className="mr-2 badge badge-success badge-lg"><FaStar /> {stargazers_coutn}</div>
                    <div className="mr-2 badge badge-error badge-lg"><FaInfo /> {open_issues}</div>
                    <div className="mr-2 badge badge-warning badge-lg"><FaUtensils /> {forks}</div>
                </div>
            </div>
        </div>
    )
}

export default RepoItem