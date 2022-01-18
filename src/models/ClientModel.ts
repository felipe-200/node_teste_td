import { ConnectionDB } from '../database'

interface IUserProps {
  _id: string,
  username: string,
  password: string
}

export class ClientModels {
  async execute() {
    const connection = new ConnectionDB()
    const database = await connection.execute()
    const user = database.collection<IUserProps>('user')
    const result = await user.find({}).toArray()
    return result
  }
}