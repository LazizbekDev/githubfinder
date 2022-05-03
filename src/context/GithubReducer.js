const githubReducer = (state, action) => {
    switch(action.type) {
        case "GET_USER":
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'USER_LOAD': 
            return {
                ...state,
                loading: true
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
        default:
            return state
    }
}

export default githubReducer