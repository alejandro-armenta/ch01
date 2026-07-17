import { createServer } from 'node:http'
import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017/'
const dbName = 'ch2'
const client = new MongoClient(url)

try {
  await client.connect()
  console.log('Succesfully connected to the database')
} catch (err) {
  console.error('Error connecting to the database:', err)
}

const server = createServer(async (req, res) => {
  const db = client.db(dbName)
  const users = db.collection('users')
  const userList = await users.find().toArray()

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(userList))
})
