import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPost } from '../api/posts'
import { useState } from 'react'

export function CreatePost() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [contents, setContents] = useState('')

  //esto solo crea la funcion para llamarse despues no ahorita
  const queryClient = useQueryClient()
  const createPostMutation = useMutation({
    mutationFn: () => createPost({ title, author, contents }),
    onSuccess: queryClient.invalidateQueries(['posts']),
  })

  const onSubmit = (event) => {
    event.preventDefault()
    //this executes the mutation
    createPostMutation.mutate()
  }

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
      <div>
        <label htmlFor='create-author'>Author: </label>
        <input
          type='text'
          id='create-author'
          name='create-author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
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
