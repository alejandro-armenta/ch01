import { MongoMemoryServer } from 'mongodb-memory-server'

export default async function globalTeardown() {
  await global.__MONGOINSTANCE.stop()
}
