import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { signup } from '../api/users'
import { Link, useNavigate } from 'react-router-dom'

export function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  //sino le pones la funcion se llaman immediatamente!
  const signupMutation = useMutation({
    mutationFn: () => signup({ username, password }),
    onSuccess: () => navigate('/login'),
    onError: () => alert('failed to sign up'),
  })

  function handleSubmit(e) {
    e.preventDefault()
    signupMutation.mutate()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Link to='/'>Back to main page</Link>
      <hr />
      <br />
      <div>
        <label htmlFor='create-username'>Username: </label>
        <input
          type='text'
          name='create-username'
          id='create-username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor='create-password'>Password: </label>
        <input
          type='text'
          name='create-password'
          id='create-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <input
        type='submit'
        value={signupMutation.isPending ? 'Signing up...' : 'Sign up'}
        disabled={signupMutation.isPending || !username || !password}
      />
    </form>
  )
}
