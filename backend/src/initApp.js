import { connectDB } from '../db/connection.js'
import cors from 'cors'

export const initApp = (app, express) => {
    // Connect to Database
    connectDB()

    // Global Middleware
    app.use(cors())
    app.use(express.json())

    // Routes (will be added here)
    app.get('/', (req, res) => res.send('Hello World!'))

    // Global Error Handling
    app.use((err, req, res, next) => {
        const statusCode = err.statusCode || 500
        return res.status(statusCode).json({
            message: err.message,
            stack: err.stack
        })
    })
}
