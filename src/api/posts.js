export const createPost = async (post) => {
  const createdPost = await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  })

  return await createPost.json()
}

export const getPosts = async (queryParams) => {
  //here only the headers!
  const value = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/posts?` +
      new URLSearchParams(queryParams),
  )

  //waits for the full text body
  return await value.json()
}
