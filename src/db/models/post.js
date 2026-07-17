import mongoose, { Schema } from 'mongoose'

const postSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  contents: String,
  tags: [String],
})

//esta es la coleccion
export const Post = mongoose.model('post', postSchema)
