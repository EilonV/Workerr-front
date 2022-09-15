
export function login(user) {
    return (dispatch) => {
        dispatch({ type: 'LOGIN', user })
    }
}
export function logout() {
    return (dispatch) => {
        dispatch({ type: 'LOGIN' })
    }
}