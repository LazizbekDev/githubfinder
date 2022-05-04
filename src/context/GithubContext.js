import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()
const URL = process.env.REACT_APP_URL
const TOKEN = process.env.REACT_APP_TOKEN

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const fetchSearchUser = async (text) => {
        setLoad()
        const params = new URLSearchParams({
            q: text
        })

        
        const response = await fetch(`${URL}search/users?${params}`, {
            headers: {
                Authorization: `token ${TOKEN}`
            }
        })

        const {items} = await response.json()
        
        dispatch({
            type: "GET_USERS",
            payload: items
        })
    }

    const getUser = async (login) => {
        setLoad()
        
        const response = await fetch(`${URL}users/${login}`, {
            headers: {
                Authorization: `token ${TOKEN}`
            }
        })

        if (response.state !== 404) {
            const data = await response.json()
        
            dispatch({
                type: "GET_USER",
                payload: data
            })
        } else {
            window.location = '/notFound'
        }
    }

    const getUserRepos = async (login) => {
        setLoad()
        
        const response = await fetch(`${URL}users/${login}/repos`, {
            headers: {
                Authorization: `token ${TOKEN}`
            }
        })

        const data = await response.json()
        
        dispatch({
            type: "GET_USER_REPOS",
            payload: data
        })
    }

    const clearUsers = () => dispatch({type: 'CLEAR_USERS'})
    const setLoad = () => dispatch({type: 'USER_LOAD'})
    return <GithubContext.Provider value={{
        users: state.users,
        ...state,
        fetchSearchUser,
        getUser,
        getUserRepos,
        clearUsers
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;