import { Request, Response } from "express"
import jwt from 'jsonwebtoken'


export class JwtService {
  verifyToken = (request: Request, response: Response, next: () => void) => {
    const token = request.headers['x-access-token'] as string
    jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, decoded) => {
      if (err) return response.status(401).json({
        error: true,
        msg: 'Token Invalid, client Unauthorized'
      })
      next()
    })
  }
}