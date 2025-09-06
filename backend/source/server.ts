import dotenv from 'dotenv'
import app from './app'
import prisma from './config/dbInit'

dotenv.config()

const PORT = process.env.PORT ? parseInt(process.env.PORT): 4000

async function startServer() {
    try {
        await prisma.$connect()
        console.log("✅ Database connected successfully")

        app.listen(PORT, () => {
            console.log(`✅ Server running on http://localhost:${PORT}`)
        })
    } catch(error) {
        console.log(`❌ Failed to connect to the database... error: ${error}`)
        process.exit(1)
    }
}

startServer()