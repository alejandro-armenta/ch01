import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPost } from '../api/posts'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export function CreatePost() {
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

  const queryClient = useQueryClient()

  const [token] = useAuth()

  const createPostMutation = useMutation({
    mutationFn: () => createPost(token, { title, contents }),
    onSuccess: queryClient.invalidateQueries(['posts']),
  })

  const onSubmit = (event) => {
    event.preventDefault()
    //this executes the mutation
    createPostMutation.mutate()
  }

  if (!token) {
    return <div>Please login to create new posts.</div>
  } else {
    return (
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='create-title'>Title: </label>
          <input
            type='text'
            id='create-title'
            name='create-title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <textarea
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <br />
        <br />
        <input
          type='submit'
          value={createPostMutation.isPending ? 'Creating...' : 'Create'}
          disabled={!title || createPostMutation.isPending}
        />
        {createPostMutation.isSuccess ? (
          <>
            <br />
            Post created succesfully!
          </>
        ) : null}
      </form>
    )
  }
}
