import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { userService } from '../services/user.service'
import { AppHeaderExplore } from '../cmps/app-header-explore'
import { useDispatch } from 'react-redux'
import { onSignup, onLogin } from '../store/actions/user.actions'
import { uploadService } from '../services/upload.service'

export function LoginSignup(props) {
  // console.log(props);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    fullname: '',
    imgUrl: '',
    country: '',
  })
  const [isSignup, setIsSignup] = useState(props.isSignUp)
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()

  console.log('users:', users)

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const users = await userService.getUsers()
    setUsers(users)
  }

  // useEffect(() => {
  //   const { username, password } = credentials
  //   if (username === 'guest' && password === 'guest') {
  //     props.onLogin(credentials)
  //     clearState()
  //   }
  // }, [credentials])

  const clearState = () => {
    setCredentials({ username: '', password: '', fullname: '' })
    setIsSignup(false)
  }

  const handleChange = (ev) => {
    const field = ev.target.name
    const value = ev.target.value
    setCredentials({ ...credentials, [field]: value })
  }

  function onGuestMode() {
    setCredentials({ username: 'guest', password: 'guest', fullname: '' })
  }

  const handleLogin = (ev = null) => {
    if (ev) ev.preventDefault()
    if (!credentials.username) return
    // console.log(credentials)
    dispatch(onLogin(credentials,props.onClose))
    clearState()
    // window.location.reload(false)
  }
  const handleSignup = (ev = null) => {
    if (ev) ev.preventDefault()
    if (!credentials.username || !credentials.password || !credentials.fullname)
      return
    props.onSignup(credentials)
    dispatch(onSignup(credentials))

    clearState()
  }

  const toggleSignup = (ev) => {
    ev.stopPropagation()
    setIsSignup(!isSignup)
    // console.log('signUp:')
  }

  const stopPropagation = (ev) => {
    ev.stopPropagation()
  }

  const checkIfUserAllreadyIn = (allreadyIn) => {
    allreadyIn = sessionStorage.loggedinUser.map((users) =>
      users.includes(users.username)
    )

    // console.log('You allready in mate ', allreadyIn)
  }

  const onImgUpload = async (ev) => {
    const res = await uploadService.uploadImg(ev)
    console.log('res:', res)
    const urls = res.map((image) => image.url)
    credentials.imgUrl = urls
    // console.log(credentials.imgUrl)

    // imgUrl.push(res.url)
  }

  // console.log(users)

  return (
    <div
      className='login-background flex justify-center align-center'
      onClick={() => {
        props.toggleSignIn(false)
        props.toggleSignUp(false)
      }}
    >
      <div className='signIn-up-section' onClick={stopPropagation}>
        {!isSignup && (
          <section>
            <h4>Sign In to Workerr</h4>
            <form
              className='login-form'
              onSubmit={handleLogin}
              checkIfUserAllreadyIn={checkIfUserAllreadyIn}
            >
              {/* <select
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                        >
                            <option value="">Select User</option>
                            {users.map(user => <option key={user._id} value={user.username}>{user.fullname}</option>)}
                        </select> */}
              <input 
                type='text'
                name='username'
                value={credentials.username}
                placeholder='Username'
                onChange={handleChange}
                required
                autoComplete='true'
                autoFocus
              />
              <input
                type='password'
                name='password'
                value={credentials.password}
                placeholder='Password'
                onChange={handleChange}
                required
                autoComplete='false'
              />

              <button>Continue</button>
            </form>
            <div className='form-footer flex justify-center align-center'>
              <p>
                Not a member yet?{' '}
                <span onClick={toggleSignup} className='green pointer'>
                  Join now
                </span>
              </p>
            </div>
          </section>
        )}
        {isSignup && (
          <section>
            <h4>Join Workerr</h4>
            <form className='signup-form' onSubmit={handleSignup}>
              <input
                type='text'
                name='fullname'
                value={credentials.fullname}
                placeholder='Fullname'
                onChange={handleChange}
                required
                autoFocus
                autoComplete='true'
              />
              <input
                type='text'
                name='username'
                value={credentials.username}
                placeholder='Username'
                onChange={handleChange}
                required
                autoComplete='true'
              />
              <input
                type='password'
                name='password'
                value={credentials.password}
                placeholder='Password'
                onChange={handleChange}
                required
                autoComplete='false'
              />

              <input
                type='text'
                name='country'
                value={credentials.country}
                placeholder='country'
                onChange={handleChange}
                required
                autoComplete='true'
              />

              <input
                value={credentials.imgUrl}
                type='file'
                name='imgUrls'
                id='imgUrls'
                multiple
                onChange={onImgUpload}
              />

              <button>Continue</button>
            </form>
            <div className='form-footer flex justify-center align-center'>
              <p>
                Already a member?
                <span onClick={toggleSignup} className='green pointer'>
                  Sign In
                </span>
              </p>
            </div>

            {/* <hr></hr> */}
          </section>
        )}
        <Link to='/'>
          <div className='form-footer flex justify-center align-center'>
            <p>
              <span onClick={onGuestMode} className='green pointer'>
                Try as a guest
              </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
