import { MongoClient } from 'mongodb'
// Connection URI
// const uri = process.env.MONGODB_URI;

const uri = "mongodb://localhost:27017"
// // Create a new MongoClient
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
//   return client
// }
// run().catch(console.dir);

export class ConnectionDB {
  async execute() {
    const client = new MongoClient(uri);
    await client.connect();
    return client
  }
}