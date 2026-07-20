import { CreatePost } from './components/CreatePost'
import { Post } from './components/Post'
import { PostFilter } from './components/PostFilter'

export function App() {
  return (
    <>
      <PostFilter field='Alejandro' />
      <CreatePost />
      <Post title='Alejandro' contents='Alejandro' author='Alejandro' />
    </>
  )
}
