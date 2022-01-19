import express from 'express'
import { routes } from './routes'
import cors from 'cors'
// import { config } from 'dotenv'
// config()
// // ou 
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3001, () => console.log('SERVER START'))