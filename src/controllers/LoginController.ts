import { json, Request, Response } from 'express'
import { LoginModel } from '../models/LoginModel'
import jwt from 'jsonwebtoken'

export class LoginController {
  async handle(request: Request, response: Response) {

    const { username, password } = request.body
    const login = new LoginModel()
    const result = await login.execute({ username, password })
    if (result?._id) {
      const token = jwt.sign({ id: result._id }, process.env.JWT_SECRET_TOKEN, {
        expiresIn: 300
      })
      return response.status(200).json({
        error: false,
        isAuth: true,
        token
      })
    }
    return response.status(400).json({
      error: true,
      isAuth: false,
    })

  }
}