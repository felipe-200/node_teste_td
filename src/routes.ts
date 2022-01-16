import { Router } from 'express'
import { LoginController } from './controllers/LoginController'
import "./database/index"

const routes = Router()

routes.post('/login', new LoginController().handle)

export { routes }