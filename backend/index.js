import express from 'express'
import { initApp } from './src/initApp.js'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve('./config/.env') })

const app = express()
const port = process.env.PORT || 3000

initApp(app, express)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
