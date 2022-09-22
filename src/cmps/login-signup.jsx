import { useState, useEffect } from 'react'
import { userService } from '../services/user.service'
import { AppHeaderExplore } from '../cmps/app-header-explore'



export function LoginSignup(props) {
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    const [isSignup, setIsSignup] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(async () => {
        const users = await userService.getUsers()
        setUsers(users)

    }, [])

    const clearState = () => {
        setCredentials({ username: '', password: '', fullname: '' })
        setIsSignup(false)
    }


    const handleChange = ev => {
        const field = ev.target.name;
        const value = ev.target.value;
        setCredentials({ ...credentials, [field]: value });
    }

    const onLogin = (ev = null) => {
        if (ev) ev.preventDefault();
        if (!credentials.username) return;
        props.onLogin(credentials);
        clearState()

    }

    const onSignup = (ev = null) => {
        if (ev) ev.preventDefault();
        if (!credentials.username || !credentials.password || !credentials.fullname) return;
        props.onSignup(credentials);
        clearState()

    }

    const toggleSignup = () => {
        setIsSignup(!isSignup)
    }



    return (
        <section>
            <AppHeaderExplore />

            <div className="log-page flex column justify-center align-center">
            <p>
                <button className="btn-link" onClick={toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</button>
            </p>
               
                <div className='login-section flex column'>
                    {!isSignup && <form className="login-form flex column" onSubmit={onLogin}>
                    <h4>Login Workerr</h4>
                        <input
                            type="text"
                            name="fullname"
                            value={credentials.fullname}
                            placeholder="Fullname"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            placeholder="Password"
                            onChange={handleChange}
                            required
                        />

                        <button>Login</button>
                    </form>}
                </div>

                <div className="signup-section flex column">
                    {isSignup && <form className="signup-form flex column " onSubmit={onSignup}>
                      <h4>Join Workerr</h4>
                        <input
                            type="text"
                            name="fullname"
                            value={credentials.fullname}
                            placeholder="Fullname"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="username"
                            value={credentials.username}
                            placeholder="Username"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            placeholder="Password"
                            onChange={handleChange}
                            required
                        />

                        <button >Signup</button>
                    </form>}
                </div>
            </div>
        </section>
    )
}





