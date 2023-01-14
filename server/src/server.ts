import express from 'express'
import { toDosRoutes } from './routes'
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(toDosRoutes)

app.get('/health', (req, res) => {
    return res.json("up")
})

app.listen(3333, () => console.log("Listening on port 3333"))
