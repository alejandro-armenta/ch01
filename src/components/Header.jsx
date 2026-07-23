import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { jwtDecode } from 'jwt-decode'
import { User } from './User'

export function Header() {
  const [token, setToken] = useAuth()

  if (token) {
    const { sub } = jwtDecode(token)
    return (
      <div>
        Logged in as <User id={sub} />
        <br />
        {/* se llama en renderizado! */}
        <button onClick={() => setToken(null)}>Log out</button>
      </div>
    )
  } else {
    return (
      <div>
        <Link to='/login'>Log in</Link> | <Link to='/signup'>Sign up</Link>
      </div>
    )
  }
}
