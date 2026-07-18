import { describe, expect, test } from '@jest/globals'
import { createPost } from '../services/posts'
import mongoose from 'mongoose'
import { Post } from '../db/models/post'
import { MongoOIDCError } from 'mongodb'

describe('creating posts', () => {
  test('with all parameters should succeed', async () => {
    const post = {
      title: 'Hello Mongoose!',
      author: 'Daniel Bugl',
      contents: 'This post is stored in a MongoDB database using Mongoose.',
      tags: ['mongoose', 'mongodb'],
    }

    const createdPost = await createPost(post)

    //este es un assert
    expect(createdPost._id).toBeInstanceOf(mongoose.Types.ObjectId)

    const foundPost = await Post.findById(createdPost._id)

    expect(foundPost).toEqual(expect.objectContaining(post))
    expect(foundPost.createdAt).toBeInstanceOf(Date)
    expect(foundPost.updatedAt).toBeInstanceOf(Date)
  })

  test('without title should fail', async () => {
    const post = {
      author: 'Daniel Bugl',
      contents: 'Post with no title',
      tags: ['empty'],
    }

    try {
      await createPost(post)
    } catch (err) {
      expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
      //console.log(err.message)
      expect(err.message).toContain('`title` is required')
    }
  })

  test('ale', async () => {})
})
