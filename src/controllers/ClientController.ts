
import { Request, Response } from "express";
import { ClientModels } from "../models/ClientModel";

export class ClientController {
  async handle(request: Request, response: Response) {
    const clients = new ClientModels()
    const result = await clients.execute()
    return response.json({
      error: false,
      data: result,
    })
  }
}