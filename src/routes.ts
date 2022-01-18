import { Router } from 'express'
import { ClientController } from './controllers/ClientController'
import { LoginController } from './controllers/LoginController'
// import { config } from 'dotenv'
// config()
// // ou 
require('dotenv').config()

import { JwtService } from './services/JwtService'

const routes = Router()

routes.post('/login', new LoginController().handle)
routes.get('/allClients', new JwtService().verifyToken, new ClientController().handle)

export { routes }