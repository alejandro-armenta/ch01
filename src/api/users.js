export const login = async ({ username, password }) => {
  const result = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })

  if (!result.ok) throw new Error('failed to login')

  return await result.json()
}

export const signup = async ({ username, password }) => {
  const result = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/user/signup`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    },
  )

  if (!result.ok) throw new Error('failed to sign up')

  return await result.json()
}

export const getUserInfo = async (id) => {
  const result = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/users/${id}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  )
  return await result.json()
}
