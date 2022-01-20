import { Router } from 'express'
import { ClientController } from './controllers/ClientController'
import { LoginController } from './controllers/LoginController'


import { JwtService } from './services/JwtService'

const routes = Router()

routes.post('/login', new LoginController().handle)
routes.get('/clients', new JwtService().verifyToken, new ClientController().handle)

export { routes }