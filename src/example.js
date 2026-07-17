import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

//hay un async aqui en el top level!

await initDatabase()

const doc = new Post({
  title: 'Hello Mongoose',
  author: 'Daniel Bugl',
  contents: 'This post is stored in a mongodb database using Mongoose',
  tags: ['mongoose', 'mongodb'],
})

//este es un insert
await doc.save()

//este es un read documentos, colleccion
const posts = await Post.find()

console.log(posts)
