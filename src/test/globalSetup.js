import { MongoMemoryServer } from 'mongodb-memory-server'

export default async function globalSetup() {
  const instance = await MongoMemoryServer.create()
  global.__MONGOINSTANCE = instance
  //esta es un varaib
  process.env.DATABASE_URL = instance.getUri()
}
