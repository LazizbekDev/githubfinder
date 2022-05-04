const URL = process.env.REACT_APP_URL
const TOKEN = process.env.REACT_APP_TOKEN

export const fetchSearchUser = async (text) => {
    const params = new URLSearchParams({
        q: text
    })

    
    const response = await fetch(`${URL}search/users?${params}`, {
        headers: {
            Authorization: `token ${TOKEN}`
        }
    })

    const {items} = await response.json()
}