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


