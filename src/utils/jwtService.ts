import { Request, Response } from "express";
import jwt from 'jsonwebtoken'

export class jwtService {
  async execute(request: Request, response: Response, next: () => void) {
    // const token = request.headers['x-access-token']
    jwt.verify(, 'SECRETKEY', (err, decoded) => {
      if (err) return response.status(401).end()
      return decoded.id
      next()
    })
  }
}