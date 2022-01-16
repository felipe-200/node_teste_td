import { ConnectionDB } from '../database'


interface userProps {
  username: string,
  password: string
}

export class LoginModel {
  async execute({ username, password }: userProps) {
    const connection = new ConnectionDB()
    const database = await connection.execute()
    const base = database.db("teste-tindin")
    const user = base.collection<userProps>('user')
    const doc = {
      username,
      password
    }
    const result = await user.findOne(doc)
    return result
  }
}