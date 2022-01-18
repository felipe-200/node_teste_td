import { MongoClient } from 'mongodb'

const uri = "mongodb://localhost:27017"
export class ConnectionDB {
  async execute() {
    const client = new MongoClient(uri);
    const database = await client.connect();
    const base = database.db("teste-tindin")
    return base
  }
}